import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const FEATURES = [
  {
    label: "Your Shelf",
    heading: "Your books, brought to life",
    body: "Add any book and watch it appear with its real spine on your shelf. Track what you're reading, what you've finished, and what's up next — all in one gorgeous view.",
    bullets: [
      "Real spine images sourced automatically",
      "Track reading, finished, and want-to-read lists",
      "Arrange books in any order you like",
    ],
    screenshot: "/screenshots/bookshelf.png",
    alt: "CosyCase digital bookshelf",
  },
  {
    label: "Spines",
    heading: "No spine? No problem.",
    body: "Upload a photo of your real book or let AI generate a unique spine design in seconds. Every book deserves its place on your shelf — even the rare ones.",
    bullets: [
      "Upload your own real book spine photos",
      "We have a large database of spine images for popular titles",
      "AI-generated art tailored to genre and title",
    ],
    screenshot: "/screenshots/create-spine.png",
    alt: "CosyCase AI spine creation",
  },
  {
    label: "Bulk Import",
    heading: "Move your whole library in one snap",
    body: "Point your camera at your physical bookshelf and CosyCase identifies every book automatically. Select what you want and import it all at once — no typing, no searching.",
    bullets: [
      "AI scans and identifies books from a photo",
      "Select and bulk-import in seconds",
      "Saves hours of manual entry",
    ],
    screenshot: "/screenshots/bulk-import.png",
    alt: "CosyCase bulk import from shelf photo",
  },
  {
    label: "Community",
    heading: "Reading is better together",
    body: "Share your shelf with friends, explore what others are reading, and earn badges for every milestone. Unlock exclusive shelf decorations as your reading life grows.",
    bullets: [
      "Share your shelf and see others' collections",
      "Earn badges for reading milestones",
      "Unlock cozy collectables and shelf decor",
    ],
    screenshot: "/screenshots/sharing.png",
    alt: "CosyCase sharing and community",
  },
];

const INTERVAL_MS = 6000;

export default function BookshelfShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const restartTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((i) => (i + 1) % FEATURES.length);
    }, INTERVAL_MS);
  };

  useEffect(() => {
    restartTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleSelect = (index: number) => {
    setActiveIndex(index);
    restartTimer();
  };

  return (
    <section id="bookshelf" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest text-[rgb(231_129_40)] uppercase mb-3">
            Visualize Your Library
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[rgb(23_23_23)] leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            The book tracking app that&apos;s{" "}
            <em className="not-italic text-[rgb(231_129_40)]">actually fun</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left — feature blocks */}
          <div className="flex flex-col gap-1">
            {FEATURES.map((f, i) => {
              const active = i === activeIndex;
              return (
                <button
                  key={f.label}
                  onClick={() => handleSelect(i)}
                  className={`text-left rounded-2xl px-6 py-5 transition-all duration-300 border-l-4 cursor-pointer ${
                    active
                      ? "border-[rgb(231_129_40)] bg-[rgb(255_250_245)]"
                      : "border-transparent hover:bg-[rgb(246_246_246)]"
                  }`}
                >
                  <span
                    className={`text-xs font-semibold tracking-widest uppercase mb-1.5 block transition-colors duration-300 ${
                      active
                        ? "text-[rgb(231_129_40)]"
                        : "text-[rgb(163_163_163)]"
                    }`}
                  >
                    {f.label}
                  </span>
                  <h3
                    className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                      active
                        ? "text-[rgb(23_23_23)]"
                        : "text-[rgb(115_115_115)]"
                    }`}
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {f.heading}
                  </h3>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateRows: active ? "1fr" : "0fr",
                      transition: "grid-template-rows 350ms ease",
                    }}
                  >
                    <div className="overflow-hidden">
                      <p className="text-sm text-[rgb(115_115_115)] leading-relaxed mb-4">
                        {f.body}
                      </p>
                      <ul className="space-y-2">
                        {f.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-3">
                            <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[rgb(255_250_245)] border border-[rgb(254_209_170)] flex items-center justify-center">
                              <svg
                                width="10"
                                height="10"
                                viewBox="0 0 12 12"
                                fill="none"
                              >
                                <path
                                  d="M2 6l3 3 5-5"
                                  stroke="rgb(231 129 40)"
                                  strokeWidth={1.8}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                            <span className="text-sm text-[rgb(64_64_64)]">
                              {b}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right — sticky phone mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="lg:sticky lg:top-24 self-start">
              <div className="relative">
                {/* Ambient glow */}
                <div
                  aria-hidden
                  className="absolute inset-0 -m-8 rounded-3xl opacity-10 blur-2xl"
                  style={{ background: "rgb(231 129 40)" }}
                />
                {/* Phone shell */}
                <div className="relative w-[260px] sm:w-[280px] aspect-[9/19] rounded-[36px] bg-[rgb(23_23_23)] shadow-2xl ring-1 ring-black/10 overflow-hidden p-[6px]">
                  <div className="relative w-full h-full rounded-[30px] overflow-hidden">
                    {FEATURES.map((f, i) => (
                      <div
                        key={f.screenshot}
                        className={`absolute inset-0 transition-opacity duration-500 ${
                          i === activeIndex ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <Image
                          src={f.screenshot}
                          alt={f.alt}
                          fill
                          className="object-cover object-top"
                          sizes="280px"
                          priority={i === 0}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Progress dot indicators */}
                <div className="flex justify-center gap-2 mt-6">
                  {FEATURES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => handleSelect(i)}
                      aria-label={`View ${FEATURES[i].label}`}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        i === activeIndex
                          ? "w-6 bg-[rgb(231_129_40)]"
                          : "w-1.5 bg-[rgb(214_211_209)] hover:bg-[rgb(180_178_177)]"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
