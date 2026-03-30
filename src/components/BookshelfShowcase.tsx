import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const FEATURES = [
  {
    label: "Your Shelf",
    heading: "Your books, brought to life",
    body: "Add any book and watch it appear with its real spine on your shelf. Track what you're reading, what you've finished, and what's up next — all in one view.",
    bullets: [
      "Create bookshelves for each occasion — read, currently reading, want to read, etc.",
      "Track reading, finished, and want-to-read lists",
      "Arrange books in any order you like",
    ],
    screenshot: "/screenshots/bookshelf.png",
    alt: "CosyCase digital bookshelf",
  },
  {
    label: "Spines",
    heading: "Every book deserves a cozy spine",
    body: "Upload a photo of your real book or let AI generate a unique spine design in seconds. Every book deserves its place on your shelf — even the rare ones.",
    bullets: [
      "Upload your own real book spine photos, automatically cropped and optimized",
      "We have over 40 thousand spine images and counting",
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

const PHOTO_INTERVAL_MS = 3000;

export default function BookshelfShowcase() {
  // photoIndex — drives the phone screenshot, runs on a 3s independent timer
  const [photoIndex, setPhotoIndex] = useState(0);
  // scrollIndex — drives the orange border highlight, updated by scroll position
  const [scrollIndex, setScrollIndex] = useState(0);

  const photoTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const blockRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Independent photo rotation timer — 3s
  const restartPhotoTimer = () => {
    if (photoTimerRef.current) clearInterval(photoTimerRef.current);
    photoTimerRef.current = setInterval(() => {
      setPhotoIndex((i) => (i + 1) % FEATURES.length);
    }, PHOTO_INTERVAL_MS);
  };

  useEffect(() => {
    restartPhotoTimer();
    return () => {
      if (photoTimerRef.current) clearInterval(photoTimerRef.current);
    };
  }, []);

  // Scroll-driven border highlight — whichever block center is closest to viewport center
  useEffect(() => {
    const handleScroll = () => {
      const viewportCenter = window.innerHeight / 2;
      let closestIndex = 0;
      let closestDist = Infinity;
      blockRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const dist = Math.abs(rect.top + rect.height / 2 - viewportCenter);
        if (dist < closestDist) {
          closestDist = dist;
          closestIndex = i;
        }
      });
      setScrollIndex(closestIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // set initial value without waiting for a scroll event
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Clicking a block or dot jumps the phone to that screenshot
  const handleBlockClick = (index: number) => {
    setPhotoIndex(index);
    restartPhotoTimer();
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
            <em className="not-italic text-[rgb(231_129_40)]">actually fun!</em>
          </h2>
        </div>

        {/* items-center vertically centers the phone against the left column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — feature blocks, border follows scroll position */}
          <div className="flex flex-col gap-1">
            {FEATURES.map((f, i) => {
              const active = i === scrollIndex;
              return (
                <button
                  key={f.label}
                  ref={(el) => {
                    blockRefs.current[i] = el;
                  }}
                  onClick={() => handleBlockClick(i)}
                  className={`text-left rounded-2xl px-6 py-5 transition-colors duration-300 border-l-4 cursor-pointer ${
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
                    className="text-xl font-bold mb-3 text-[rgb(23_23_23)]"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {f.heading}
                  </h3>
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
                </button>
              );
            })}
          </div>

          {/* Right — phone mockup, vertically centered by parent items-center */}
          <div className="flex justify-center lg:justify-end">
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
                        i === photoIndex ? "opacity-100" : "opacity-0"
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

              {/* Progress dot indicators — follow photoIndex */}
              <div className="flex justify-center gap-2 mt-6">
                {FEATURES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handleBlockClick(i)}
                    aria-label={`View ${FEATURES[i].label}`}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      i === photoIndex
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
    </section>
  );
}
