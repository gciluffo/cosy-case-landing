import Image from "next/image";

const bullets = [
  { text: "Real book spine images sourced automatically" },
  { text: "Multiple shelf styles — wood, minimal, floating" },
  { text: "Arrange books in any order you like" },
  { text: "Add decorative items: plants, candles, trinkets" },
  { text: "Shareable shelf snapshots for social media" },
];

export default function BookshelfShowcase() {
  return (
    <section id="bookshelf" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — screenshot */}
          <div className="flex justify-center">
            <div className="relative">
              <div
                aria-hidden
                className="absolute inset-0 -m-8 rounded-3xl opacity-10 blur-2xl"
                style={{ background: "rgb(231 129 40)" }}
              />
              <div className="relative w-[260px] sm:w-[280px] aspect-[9/19] rounded-[36px] bg-[rgb(23_23_23)] shadow-2xl ring-1 ring-black/10 overflow-hidden p-[6px]">
                <div className="relative w-full h-full rounded-[30px] overflow-hidden">
                  <Image
                    src="/screenshots/bookshelf.png"
                    alt="CosyCase digital bookshelf"
                    fill
                    className="object-cover object-top"
                    sizes="280px"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right — copy */}
          <div className="text-center lg:text-left">
            <span className="inline-block text-xs font-semibold tracking-widest text-[rgb(231_129_40)] uppercase mb-3">
              Signature feature
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[rgb(23_23_23)] leading-tight mb-5"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              A bookshelf that looks{" "}
              <em className="not-italic text-[rgb(231_129_40)]">
                as good as the real thing
              </em>
            </h2>
            <p className="text-[rgb(115_115_115)] leading-relaxed mb-8">
              CosyCase transforms your reading history into a gorgeous digital
              shelf. Every book appears as its real spine — so your virtual
              collection feels as satisfying as reaching for a book off a
              physical shelf.
            </p>

            <ul className="space-y-3 mb-10 inline-block text-left">
              {bullets.map((b) => (
                <li key={b.text} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[rgb(255_250_245)] border border-[rgb(254_209_170)] flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2 6l3 3 5-5"
                        stroke="rgb(231 129 40)"
                        strokeWidth={1.8}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-sm text-[rgb(64_64_64)]">{b.text}</span>
                </li>
              ))}
            </ul>

            <a
              href="#download"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[rgb(231_129_40)] text-white font-semibold hover:bg-[rgb(215_117_31)] transition-colors"
            >
              Start your shelf
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
