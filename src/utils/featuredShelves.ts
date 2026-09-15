import { readdir } from "node:fs/promises";
import { extname, join } from "node:path";
import { imageSizeFromFile } from "image-size/fromFile";

export type FeaturedShelf = {
  /** File name only, e.g. `my-shelf-1234abcd.png`. */
  file: string;
  /** Intrinsic pixel width, read from the file at build time. */
  width: number;
  /** Intrinsic pixel height, read from the file at build time. */
  height: number;
};

const IMAGE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".webp", ".avif"]);

/**
 * Reads every image in `directory` and returns one record per image with its
 * real dimensions, ordered alphabetically by file name.
 *
 * A missing or unreadable directory yields an empty list, and entries that are
 * not readable images (system files, placeholders, directories) are ignored, so
 * a fresh checkout still builds and publishing is "drop a file in, rebuild".
 */
export async function listFeaturedShelves(
  directory: string,
): Promise<FeaturedShelf[]> {
  let entries;
  try {
    entries = await readdir(directory, { withFileTypes: true });
  } catch {
    return [];
  }

  const files = entries
    .filter(
      (entry) =>
        entry.isFile() &&
        IMAGE_EXTENSIONS.has(extname(entry.name).toLowerCase()),
    )
    .map((entry) => entry.name)
    .sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));

  return Promise.all(
    files.map(async (file) => {
      try {
        const { width, height } = await imageSizeFromFile(join(directory, file));
        return { file, width, height };
      } catch {
        return null;
      }
    }),
  ).then((shelves) =>
    shelves.filter((shelf): shelf is FeaturedShelf => shelf !== null),
  );
}
