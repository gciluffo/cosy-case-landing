import Image from "next/image";

// ── spine image data ─────────────────────────────────────────────────────────
// w/h from filename. hScale adds deterministic height variance (0.87-1.0).
// Skipped: w<=53px (too narrow), landscape spines (w > h).
const SPINES: { file: string; w: number; h: number; hScale: number }[] = [
  {
    file: "book_spine_20250914_143652_w370_h2705.jpg",
    w: 370,
    h: 2705,
    hScale: 0.97,
  },
  {
    file: "book_spine_20251115_100217_w156_h2295.jpg",
    w: 156,
    h: 2295,
    hScale: 0.91,
  },
  {
    file: "book_spine_20251115_100248_w152_h1302.jpg",
    w: 152,
    h: 1302,
    hScale: 0.95,
  },
  {
    file: "book_spine_20251115_100627_w276_h2416.jpg",
    w: 276,
    h: 2416,
    hScale: 1.0,
  },
  {
    file: "book_spine_20251115_101734_w225_h3113.jpg",
    w: 225,
    h: 3113,
    hScale: 0.88,
  },
  {
    file: "book_spine_20251115_103342_w197_h1890.jpg",
    w: 197,
    h: 1890,
    hScale: 0.94,
  },
  {
    file: "book_spine_20251115_103442_w255_h2616.jpg",
    w: 255,
    h: 2616,
    hScale: 1.0,
  },
  {
    file: "book_spine_20251115_103941_w301_h3123.jpg",
    w: 301,
    h: 3123,
    hScale: 0.96,
  },
  {
    file: "book_spine_20251116_102026_w188_h1138.jpg",
    w: 188,
    h: 1138,
    hScale: 0.9,
  },
  {
    file: "book_spine_20251116_102244_w73_h685.jpg",
    w: 73,
    h: 685,
    hScale: 0.98,
  },
  {
    file: "book_spine_20251116_102413_w541_h3628.jpg",
    w: 541,
    h: 3628,
    hScale: 0.92,
  },
  {
    file: "book_spine_20251116_102559_w130_h1206.jpg",
    w: 130,
    h: 1206,
    hScale: 1.0,
  },
  {
    file: "book_spine_20251116_102915_w813_h6068.jpg",
    w: 813,
    h: 6068,
    hScale: 0.94,
  },
  {
    file: "book_spine_20251116_104456_w88_h625.jpg",
    w: 88,
    h: 625,
    hScale: 0.87,
  },
  {
    file: "book_spine_20251116_104613_w126_h1005.jpg",
    w: 126,
    h: 1005,
    hScale: 0.99,
  },
  {
    file: "book_spine_20251116_104938_w243_h1490.jpg",
    w: 243,
    h: 1490,
    hScale: 0.91,
  },
  {
    file: "book_spine_20251118_080809_w134_h1029.jpg",
    w: 134,
    h: 1029,
    hScale: 0.96,
  },
  {
    file: "book_spine_20251118_081131_w349_h3153.jpg",
    w: 349,
    h: 3153,
    hScale: 1.0,
  },
  {
    file: "book_spine_20251118_081524_w456_h3356.jpg",
    w: 456,
    h: 3356,
    hScale: 0.93,
  },
  {
    file: "book_spine_20251118_081605_w319_h2585.jpg",
    w: 319,
    h: 2585,
    hScale: 0.98,
  },
  {
    file: "book_spine_20251119_081359_w144_h917.jpg",
    w: 144,
    h: 917,
    hScale: 0.91,
  },
  {
    file: "book_spine_20251119_182632_w89_h472.jpg",
    w: 89,
    h: 472,
    hScale: 1.0,
  },
  {
    file: "book_spine_20260106_221549_w302_h2984.jpg",
    w: 302,
    h: 2984,
    hScale: 0.95,
  },
  {
    file: "book_spine_20260106_221714_w447_h3043.jpg",
    w: 447,
    h: 3043,
    hScale: 0.88,
  },
  {
    file: "book_spine_20260110_145310_w186_h1375.jpg",
    w: 186,
    h: 1375,
    hScale: 1.0,
  },
  {
    file: "book_spine_20260112_181605_w279_h2168.jpg",
    w: 279,
    h: 2168,
    hScale: 0.96,
  },
  {
    file: "book_spine_20260114_185707_0_w113_h720.jpg",
    w: 113,
    h: 720,
    hScale: 0.9,
  },
  {
    file: "book_spine_20260115_084711_9_w270_h1221.jpg",
    w: 270,
    h: 1221,
    hScale: 0.97,
  },
  {
    file: "book_spine_20260115_194223_18_w212_h1606.jpg",
    w: 212,
    h: 1606,
    hScale: 0.93,
  },
  {
    file: "book_spine_20260118_202931_1_w67_h500.jpg",
    w: 67,
    h: 500,
    hScale: 1.0,
  },
  {
    file: "book_spine_20260123_210642_18_w98_h1269.jpg",
    w: 98,
    h: 1269,
    hScale: 0.89,
  },
  {
    file: "book_spine_20260125_195218_24_w62_h896.jpg",
    w: 62,
    h: 896,
    hScale: 0.95,
  },
  {
    file: "book_spine_20260126_222949_4_w214_h1488.jpg",
    w: 214,
    h: 1488,
    hScale: 1.0,
  },
  {
    file: "book_spine_20260128_025310_0_w103_h1167.jpg",
    w: 103,
    h: 1167,
    hScale: 0.92,
  },
  {
    file: "book_spine_20260128_082310_0_w545_h2664.jpg",
    w: 545,
    h: 2664,
    hScale: 0.97,
  },
  {
    file: "book_spine_20260131_164350_0_w150_h1151.jpg",
    w: 150,
    h: 1151,
    hScale: 0.91,
  },
  {
    file: "book_spine_20260131_172118_2_w295_h2511.jpg",
    w: 295,
    h: 2511,
    hScale: 1.0,
  },
  {
    file: "book_spine_20260201_003551_0_w91_h656.jpg",
    w: 91,
    h: 656,
    hScale: 0.94,
  },
  {
    file: "book_spine_20260201_060752_3_w503_h2973.jpg",
    w: 503,
    h: 2973,
    hScale: 0.88,
  },
  {
    file: "book_spine_20260207_203124_0_w536_h2942.jpg",
    w: 536,
    h: 2942,
    hScale: 1.0,
  },
  {
    file: "book_spine_20260210_150222_6_w78_h531.jpg",
    w: 78,
    h: 531,
    hScale: 0.96,
  },
  {
    file: "book_spine_20260210_195109_3_w344_h1805.jpg",
    w: 344,
    h: 1805,
    hScale: 0.9,
  },
  {
    file: "book_spine_20260211_130700_0_w257_h1644.jpg",
    w: 257,
    h: 1644,
    hScale: 0.98,
  },
  {
    file: "book_spine_20260214_094924_0_w226_h3745.jpg",
    w: 226,
    h: 3745,
    hScale: 0.93,
  },
  {
    file: "book_spine_20260215_183150_13_w103_h640.jpg",
    w: 103,
    h: 640,
    hScale: 1.0,
  },
  {
    file: "book_spine_20260216_205537_17_w139_h587.jpg",
    w: 139,
    h: 587,
    hScale: 0.87,
  },
  {
    file: "book_spine_20260217_133301_0_w168_h3249.jpg",
    w: 168,
    h: 3249,
    hScale: 0.95,
  },
  {
    file: "book_spine_20260218_003750_8_w203_h1162.jpg",
    w: 203,
    h: 1162,
    hScale: 1.0,
  },
  {
    file: "book_spine_20260220_214226_0_w342_h3115.jpg",
    w: 342,
    h: 3115,
    hScale: 0.91,
  },
  {
    file: "book_spine_20260223_160040_0_w96_h394.jpg",
    w: 96,
    h: 394,
    hScale: 0.97,
  },
  {
    file: "book_spine_20260308_011157_0_w736_h2675.jpg",
    w: 736,
    h: 2675,
    hScale: 0.94,
  },
  {
    file: "book_spine_20260308_030636_2_w652_h3749.jpg",
    w: 652,
    h: 3749,
    hScale: 1.0,
  },
  {
    file: "book_spine_20260308_034914_7_w110_h940.jpg",
    w: 110,
    h: 940,
    hScale: 0.89,
  },
  {
    file: "book_spine_20260308_035916_2_w212_h1239.jpg",
    w: 212,
    h: 1239,
    hScale: 0.96,
  },
  {
    file: "book_spine_20260310_150740_6_w184_h1238.jpg",
    w: 184,
    h: 1238,
    hScale: 1.0,
  },
  {
    file: "book_spine_20260311_225728_3_w87_h1115.jpg",
    w: 87,
    h: 1115,
    hScale: 0.92,
  },
  {
    file: "book_spine_20260321_053504_0_w803_h5509.jpg",
    w: 803,
    h: 5509,
    hScale: 0.98,
  },
  {
    file: "book_spine_20260321_141259_0_w124_h1189.jpg",
    w: 124,
    h: 1189,
    hScale: 0.91,
  },
  {
    file: "book_spine_20260323_192235_11_w135_h642.jpg",
    w: 135,
    h: 642,
    hScale: 0.95,
  },
  {
    file: "book_spine_20260325_132124_0_w219_h1338.jpg",
    w: 219,
    h: 1338,
    hScale: 1.0,
  },
  {
    file: "book_spine_20260328_220438_9_w160_h3042.jpg",
    w: 160,
    h: 3042,
    hScale: 0.88,
  },
];

// Skipped: w<=53px (too narrow), landscape spines (w > h).

const BOARD_PERCENT = 0.08; // floating-birch bookOffsetYPercent
const SHELF_IMAGE = "url('/shelves/middle-floating-birch.webp')";

// Split spines across two shelves — enough to fill shelf width, no repeats.
const SHELF1_SPINES = SPINES.slice(0, 18);
const SHELF2_SPINES = SPINES.slice(18, 36);

// Desktop config
const D_SHELF_H = 260;
const D_DISPLAY_H = Math.round(D_SHELF_H * (1 - BOARD_PERCENT - 0.04));
const D_PAD_X = 52;
const D_SHELF2_DELAY = SHELF1_SPINES.length * 65 + 100;

// Mobile config — 12 books per shelf, fills full viewport width
const M_SHELF_H = 180;
const M_DISPLAY_H = Math.round(M_SHELF_H * (1 - BOARD_PERCENT - 0.04));
const M_PAD_X = 30;
const M_SHELF1_SPINES = SPINES.slice(0, 15);
const M_SHELF2_SPINES = SPINES.slice(12, 24);
const M_SHELF2_DELAY = M_SHELF1_SPINES.length * 65 + 100;

interface ShelfRowsProps {
  shelf1Spines: (typeof SPINES)[number][];
  shelf2Spines: (typeof SPINES)[number][];
  shelfH: number;
  displayH: number;
  padX: number;
  shelf2Delay: number;
}

function ShelfRows({
  shelf1Spines,
  shelf2Spines,
  shelfH,
  displayH,
  padX,
  shelf2Delay,
}: ShelfRowsProps) {
  const shelves = [shelf1Spines, shelf2Spines];
  return (
    <div className="flex flex-col">
      {shelves.map((spines, shelfIndex) => (
        <div
          key={shelfIndex}
          className="relative"
          style={{
            height: shelfH,
            backgroundImage: SHELF_IMAGE,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            className="flex flex-row items-end h-full"
            style={{
              paddingBottom: Math.round(shelfH * BOARD_PERCENT),
              paddingLeft: padX,
              paddingRight: padX,
              paddingTop: Math.round(shelfH * 0.04),
            }}
          >
            {spines.map((spine, i) => {
              const scaledH = Math.round(displayH * spine.hScale);
              const displayW = Math.round((spine.w / spine.h) * scaledH);
              const delay = shelfIndex === 0 ? i * 65 : shelf2Delay + i * 65;
              return (
                <Image
                  key={spine.file}
                  src={`/spines/${spine.file}`}
                  alt=""
                  width={displayW}
                  height={scaledH}
                  loading="eager"
                  className="wave-spine shrink-0 select-none self-end"
                  style={{
                    width: displayW,
                    height: scaledH,
                    objectFit: "fill",
                    animationDelay: `${delay}ms`,
                  }}
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  const titleDelay = D_SHELF2_DELAY + SHELF2_SPINES.length * 65 + 200;

  return (
    <section
      className="relative flex flex-col items-center justify-center overflow-hidden"
      style={{ minHeight: "100svh", background: "rgb(255 250 245)" }}
    >
      {/* Subtle warm ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full opacity-[0.12] blur-3xl"
        style={{ background: "rgb(231 129 40)" }}
      />

      {/* ── Mobile shelf (< sm, ≤ 639px) ─────────────────────────────── */}
      <div className="sm:hidden w-80">
        <ShelfRows
          shelf1Spines={M_SHELF1_SPINES}
          shelf2Spines={M_SHELF2_SPINES}
          shelfH={M_SHELF_H}
          displayH={M_DISPLAY_H}
          padX={M_PAD_X}
          shelf2Delay={M_SHELF2_DELAY}
        />
      </div>

      {/* ── Desktop shelf (≥ sm) ──────────────────────────────────────── */}
      <div
        className="bookshelf-scroll hidden sm:block w-full overflow-x-auto"
        style={{ WebkitOverflowScrolling: "touch", scrollbarWidth: "none" }}
      >
        <div className="w-max mx-auto">
          <ShelfRows
            shelf1Spines={SHELF1_SPINES}
            shelf2Spines={SHELF2_SPINES}
            shelfH={D_SHELF_H}
            displayH={D_DISPLAY_H}
            padX={D_PAD_X}
            shelf2Delay={D_SHELF2_DELAY}
          />
        </div>
      </div>

      {/* ── Title ──────────────────────────────────────────────────────── */}
      <div className="mt-8 sm:mt-10 text-center px-4">
        <h1
          className="hero-title text-3xl sm:text-5xl lg:text-6xl font-bold text-[rgb(23_23_23)] leading-tight"
          style={{
            fontFamily: "var(--font-heading)",
            animationDelay: `${titleDelay}ms`,
          }}
        >
          Create Your Digital Bookshelf.
        </h1>
      </div>

      {/* ── Scroll cue ─────────────────────────────────────────────────── */}
      <div
        className="hero-scroll-cue absolute bottom-8 flex flex-col items-center gap-1.5 opacity-0"
        aria-hidden
      >
        <span className="text-xs tracking-widest uppercase text-[rgb(163_163_163)]">
          scroll
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="text-[rgb(163_163_163)]"
        >
          <path
            d="M8 3v10M3 9l5 5 5-5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
