import Image from "next/image";

export default function AIFeature() {
  return (
    <section
      id="ai-art"
      className="py-20 md:py-28 bg-[rgb(23_23_23)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — copy */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <span className="inline-block text-xs font-semibold tracking-widest text-[rgb(251_157_75)] uppercase mb-3">
              AI-powered
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-5"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Give every book a{" "}
              <span className="text-[rgb(251_157_75)]">
                spine worthy of your shelf
              </span>
            </h2>
            <p className="text-[rgb(163_163_163)] leading-relaxed mb-8">
              Can&apos;t find a spine image? Don&apos;t want a blank placeholder
              ruining your shelf aesthetic? CosyCase uses AI to generate
              beautiful, unique spine artwork for any book in seconds. Each
              piece is tailored to the book&apos;s title, genre, and vibe — so
              it always fits right in.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                {
                  label: "Instant generation",
                  desc: "AI art in under 10 seconds",
                },
                {
                  label: "Regenerate freely",
                  desc: "Not happy? Try a new style",
                },
                {
                  label: "Genre-aware styles",
                  desc: "Fiction, sci-fi, romance & more",
                },
                {
                  label: "Seamlessly blends in",
                  desc: "Looks great with real spines",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-[rgb(39_38_37)] rounded-xl p-4 border border-white/5"
                >
                  <div className="text-sm font-semibold text-white mb-0.5">
                    {item.label}
                  </div>
                  <div className="text-xs text-[rgb(115_115_115)]">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#download"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[rgb(231_129_40)] text-white font-semibold hover:bg-[rgb(215_117_31)] transition-colors"
            >
              Try it free
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

          {/* Right — phone mockup */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative">
              <div
                aria-hidden
                className="absolute inset-0 blur-3xl opacity-25 rounded-[40px]"
                style={{ background: "rgb(231 129 40)" }}
              />
              <div className="relative w-[260px] sm:w-[280px] aspect-[9/19] rounded-[36px] bg-[rgb(15_15_15)] shadow-2xl ring-1 ring-white/10 overflow-hidden p-[6px]">
                <div className="relative w-full h-full rounded-[30px] overflow-hidden bg-black">
                  <Image
                    src="/screenshots/create-spine.png"
                    alt="AI spine art generation screen"
                    fill
                    className="object-cover object-top"
                    sizes="280px"
                  />
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-8 bg-[rgb(39_38_37)] border border-white/10 rounded-2xl shadow-lg px-4 py-3 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[rgb(231_129_40)] flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-white">
                    AI generated
                  </div>
                  <div className="text-[10px] text-[rgb(115_115_115)]">
                    8 seconds
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
