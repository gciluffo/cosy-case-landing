import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import sharp from "sharp";

const here = dirname(fileURLToPath(import.meta.url));
const publicDir = join(here, "..", "public");

const WIDTH = 1200;
const HEIGHT = 630;
const SHELF_HEIGHT = 230;
const SHELF_GAP = 16;
const SHELF_RADIUS = 18;

// Shelf source images are 722x1220 (portrait).
const SHELF_ASPECT = 722 / 1220;

const SHELF_FILES = [
  "boo-s-bookshelf-137f5916.webp",
  "classics-and-fantasy-30ee2233.webp",
  "favorite-romance-528da101.webp",
  "horror-haul-9e69a07c.webp",
  "lalas-book-nook-09dce4b7.webp",
];

async function roundedShelf(input, width, height) {
  const mask = Buffer.from(
    `<svg width="${width}" height="${height}"><rect rx="${SHELF_RADIUS}" ry="${SHELF_RADIUS}" width="${width}" height="${height}" fill="#ffffff"/></svg>`,
  );
  return sharp(input)
    .resize(width, height, { fit: "cover", position: "top" })
    .composite([{ input: mask, blend: "dest-in" }])
    .png()
    .toBuffer();
}

async function main() {
  const shelfWidth = Math.round(SHELF_HEIGHT * SHELF_ASPECT);
  const stripWidth =
    SHELF_FILES.length * shelfWidth + (SHELF_FILES.length - 1) * SHELF_GAP;
  const startX = Math.round((WIDTH - stripWidth) / 2);
  const shelfY = HEIGHT - SHELF_HEIGHT;

  const composites = [];
  for (let i = 0; i < SHELF_FILES.length; i += 1) {
    const shelf = await roundedShelf(
      join(publicDir, "featured-bookshelves", SHELF_FILES[i]),
      shelfWidth,
      SHELF_HEIGHT,
    );
    composites.push({
      input: shelf,
      left: startX + i * (shelfWidth + SHELF_GAP),
      top: shelfY,
    });
  }

  const mascotSize = 120;
  const mascot = await sharp(join(publicDir, "mascot.webp"))
    .resize(mascotSize, mascotSize)
    .png()
    .toBuffer();
  composites.push({
    input: mascot,
    left: Math.round((WIDTH - mascotSize) / 2),
    top: 56,
  });

  const textLayer = Buffer.from(
    `<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="${WIDTH}" height="8" fill="#E78128"/>
      <text x="${WIDTH / 2}" y="286" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="82" font-weight="bold" fill="#242421">CosyCase</text>
      <text x="${WIDTH / 2}" y="334" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="30" fill="#8B8A86">Digital Bookshelf &amp; Book Tracker</text>
    </svg>`,
  );

  await sharp({
    create: {
      width: WIDTH,
      height: HEIGHT,
      channels: 4,
      background: "#FCFAF6",
    },
  })
    .composite([...composites, { input: textLayer, top: 0, left: 0 }])
    .png({ compressionLevel: 9 })
    .toFile(join(publicDir, "og-image.png"));

  console.log("Wrote public/og-image.png (1200x630)");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
