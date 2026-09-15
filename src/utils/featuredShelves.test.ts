import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { crc32, deflateSync } from "node:zlib";
import { after, describe, it } from "node:test";
import assert from "node:assert/strict";
import { listFeaturedShelves } from "./featuredShelves.ts";

const makeTempDir = (): string => mkdtempSync(join(tmpdir(), "featured-shelves-"));

const tempDirs: string[] = [];
const newDir = (): string => {
  const dir = makeTempDir();
  tempDirs.push(dir);
  return dir;
};

after(() => {
  for (const dir of tempDirs) rmSync(dir, { recursive: true, force: true });
});

function pngChunk(type: string, data: Buffer): Buffer {
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length, 0);
  const typeBytes = Buffer.from(type, "ascii");
  const checksum = Buffer.alloc(4);
  checksum.writeUInt32BE(crc32(Buffer.concat([typeBytes, data])), 0);
  return Buffer.concat([length, typeBytes, data, checksum]);
}

/** Builds a real, decodable PNG of the given pixel dimensions. */
function pngBytes(width: number, height: number): Buffer {
  const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;
  const raw = Buffer.alloc(height * (1 + width * 4));
  return Buffer.concat([
    signature,
    pngChunk("IHDR", ihdr),
    pngChunk("IDAT", deflateSync(raw)),
    pngChunk("IEND", Buffer.alloc(0)),
  ]);
}

function writePng(dir: string, name: string, width: number, height: number): void {
  writeFileSync(join(dir, name), pngBytes(width, height));
}

describe("listFeaturedShelves", () => {
  it("returns an empty list when the directory does not exist", async () => {
    const dir = join(newDir(), "does-not-exist");

    assert.deepEqual(await listFeaturedShelves(dir), []);
  });

  it("returns an empty list when the directory holds no images", async () => {
    const dir = newDir();

    assert.deepEqual(await listFeaturedShelves(dir), []);
  });

  it("returns one record per image with its real dimensions", async () => {
    const dir = newDir();
    writePng(dir, "shelf.png", 640, 480);

    assert.deepEqual(await listFeaturedShelves(dir), [
      { file: "shelf.png", width: 640, height: 480 },
    ]);
  });

  it("orders records alphabetically by filename", async () => {
    const dir = newDir();
    writePng(dir, "zebra.png", 10, 20);
    writePng(dir, "apple.png", 30, 40);
    writePng(dir, "mango.png", 50, 60);

    const files = (await listFeaturedShelves(dir)).map((shelf) => shelf.file);

    assert.deepEqual(files, ["apple.png", "mango.png", "zebra.png"]);
  });

  it("ignores non-image entries, directories, and hidden files", async () => {
    const dir = newDir();
    writePng(dir, "shelf.png", 100, 200);
    writeFileSync(join(dir, ".DS_Store"), "junk");
    writeFileSync(join(dir, "README.md"), "# not an image");
    writeFileSync(join(dir, "notes.txt"), "hello");
    mkdirSync(join(dir, "nested.png"));

    const shelves = await listFeaturedShelves(dir);

    assert.deepEqual(shelves, [{ file: "shelf.png", width: 100, height: 200 }]);
  });

  it("ignores files that are not decodable images even with an image extension", async () => {
    const dir = newDir();
    writePng(dir, "shelf.png", 100, 200);
    writeFileSync(join(dir, "placeholder.png"), "not really a png");

    const shelves = await listFeaturedShelves(dir);

    assert.deepEqual(shelves, [{ file: "shelf.png", width: 100, height: 200 }]);
  });

  it("recognises image extensions regardless of case", async () => {
    const dir = newDir();
    writePng(dir, "SHOUT.PNG", 7, 9);

    const shelves = await listFeaturedShelves(dir);

    assert.deepEqual(shelves, [{ file: "SHOUT.PNG", width: 7, height: 9 }]);
  });
});
