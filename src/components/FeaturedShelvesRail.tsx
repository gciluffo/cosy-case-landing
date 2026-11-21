import Image from "next/image";
import Link from "next/link";
import type { FeaturedShelf } from "@/utils/featuredShelves";

interface FeaturedShelvesRailProps {
  shelves: FeaturedShelf[];
}

function ShelfTile({
  shelf,
  clone = false,
}: {
  shelf: FeaturedShelf;
  clone?: boolean;
}) {
  // Every shelf export is 722px wide; 1220 is the dominant height. Locking the
  // tile to that ratio keeps the rail even and lets object-cover crop the rare
  // taller export instead of stretching it. `items-start` stops the flex row
  // from stretching shorter tiles to the tallest one (which left dead space).
  return (
    <Link
      href="/featured-bookshelves"
      tabIndex={clone ? -1 : undefined}
      className="mr-5 sm:mr-6 w-[180px] sm:w-[220px] shrink-0 aspect-[722/1220] rounded-2xl overflow-hidden border border-surface-100 transition-opacity duration-300 hover:opacity-85"
    >
      <Image
        src={`/featured-bookshelves/${shelf.file}`}
        alt="A featured bookshelf built in CosyCase"
        width={shelf.width}
        height={shelf.height}
        loading="lazy"
        sizes="(max-width: 640px) 180px, 220px"
        className="w-full h-full object-cover"
      />
    </Link>
  );
}

function TileSet({
  shelves,
  clone = false,
}: {
  shelves: FeaturedShelf[];
  clone?: boolean;
}) {
  return (
    <div
      className={clone ? "marquee-clone flex items-start" : "flex items-start"}
      aria-hidden={clone || undefined}
    >
      {shelves.map((shelf) => (
        <ShelfTile key={shelf.file} shelf={shelf} clone={clone} />
      ))}
    </div>
  );
}

export default function FeaturedShelvesRail({
  shelves,
}: FeaturedShelvesRailProps) {
  if (shelves.length === 0) return null;

  return (
    <section
      className="py-16 sm:py-20 bg-surface-0"
      aria-labelledby="featured-shelves-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10 sm:mb-12">
        <span className="inline-block text-xs font-semibold tracking-widest text-orange uppercase mb-3">
          From the community
        </span>
        <h2
          id="featured-shelves-heading"
          className="text-3xl sm:text-4xl font-bold text-text-primary leading-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Shelves from readers
        </h2>
        <p className="max-w-2xl mx-auto mt-3 text-base text-text-secondary leading-relaxed">
          Real bookshelves built in CosyCase. Browse the spines, styles, and
          arrangements for a little inspiration for your own.
        </p>
      </div>

      <div
        className="marquee-viewport relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div
          className="marquee flex w-max"
          style={{ "--marquee-duration": `${shelves.length * (55 / 6)}s` } as React.CSSProperties}
        >
          <TileSet shelves={shelves} />
          <TileSet shelves={shelves} clone />
        </div>
      </div>

      <div className="text-center mt-10 sm:mt-12">
        <Link
          href="/featured-bookshelves"
          className="inline-flex items-center gap-1.5 font-semibold text-charcoal transition-colors"
          style={{ cursor: "pointer" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "rgb(231 129 40)";
            e.currentTarget.style.cursor = "pointer";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "";
          }}
        >
          Browse all featured shelves
          <svg
            width="15"
            height="15"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
            style={{ cursor: "pointer", pointerEvents: "none" }}
          >
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
