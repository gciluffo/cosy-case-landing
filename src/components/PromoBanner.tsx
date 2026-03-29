import Image from "next/image";

export default function PromoBanner() {
  return (
    <section
      className="relative overflow-hidden py-14 sm:py-20"
      style={{
        backgroundImage: "url('/pattern-background.png')",
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
            Try it out!
          </h2>

          {/* Right: store badges */}
          <div className="flex flex-row sm:flex-col gap-4 items-center sm:items-end">
            <a
              href="https://apps.apple.com/app/apple-store/id6747253733"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download on the App Store"
              className="transition-opacity hover:opacity-80"
            >
              <Image
                src="/app-store-badge.svg"
                alt="Download on the App Store"
                width={140}
                height={47}
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.gciluffo.cosycase"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get it on Google Play"
              className="transition-opacity hover:opacity-80"
            >
              <Image
                src="/google-play-badge.svg"
                alt="Get it on Google Play"
                width={158}
                height={47}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
