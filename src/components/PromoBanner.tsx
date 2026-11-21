import Image from "next/image";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/utils/getStoreUrl";

export function StoreBadges({ className }: { className: string }) {
  return (
    <div className={className}>
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-opacity hover:opacity-80"
      >
        <Image src="/app-store-badge.svg" alt="Download on the App Store" width={140} height={47} />
      </a>
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-opacity hover:opacity-80"
      >
        <Image src="/google-play-badge.svg" alt="Get it on Google Play" width={158} height={47} />
      </a>
    </div>
  );
}

export default function PromoBanner({
  heading = "Your shelf awaits.",
}: {
  heading?: string;
}) {
  return (
    <section
      className="relative overflow-hidden py-14 sm:py-20"
      style={{
        backgroundImage: "url('/pattern-background.webp')",
        backgroundSize: "auto 100%",
        backgroundRepeat: "repeat-x",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay to subdue the pattern */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
          {/* Left: headline */}
          <h2
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight text-center sm:text-left"
            style={{
              fontFamily: "var(--font-heading)",
              textShadow:
                "0 2px 12px rgba(0,0,0,0.8), 0 1px 3px rgba(0,0,0,0.9)",
            }}
          >
            {heading}
          </h2>

          {/* Right: store badges */}
          <StoreBadges className="flex flex-wrap justify-center gap-4 items-center sm:flex-col sm:flex-nowrap sm:items-end" />
        </div>
      </div>
    </section>
  );
}
