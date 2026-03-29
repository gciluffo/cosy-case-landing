const features = [
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
    title: "Track Any Book",
    description:
      "Search millions of titles, mark them as reading, read, or want-to-read, and build your personal library. Full reading history at a glance.",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <path d="M7 7h.01M7 11h.01M11 7h.01M11 11h.01M15 7h.01M15 11h.01" />
      </svg>
    ),
    title: "Digital Bookshelf",
    description:
      "Your books come alive as a beautifully rendered bookshelf with real spine images. See your collection grow — exactly like a real shelf.",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "AI Spine Art",
    description:
      "No cover? No problem. Generate custom book spine artwork with AI in seconds. Make every book on your shelf look stunning.",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93l-1.41 1.41M4.93 4.93l1.41 1.41M12 2v2M12 20v2M20 12h2M2 12h2M19.07 19.07l-1.41-1.41M4.93 19.07l1.41-1.41" />
      </svg>
    ),
    title: "Bulk Import",
    description:
      "Photograph your real bookshelf and let CosyCase automatically identify and import all your books at once. Set up your library in minutes.",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: "Deep Customization",
    description:
      "Choose from multiple shelf styles, backgrounds, and widgets to make your bookshelf uniquely yours. Dark wood, floating shelves, and more.",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    ),
    title: "Share Your Shelf",
    description:
      "Show off your reading life. Share a snapshot of your beautifully curated bookshelf with friends or on social media.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28 bg-[rgb(246_246_246)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest text-[rgb(231_129_40)] uppercase mb-3">
            Everything you need
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[rgb(23_23_23)]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            More than just a reading log
          </h2>
          <p className="mt-4 text-[rgb(115_115_115)] max-w-xl mx-auto">
            CosyCase blends powerful book tracking with a visual, creative
            bookshelf experience you won&apos;t find anywhere else.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-white rounded-2xl p-6 border border-[rgb(242_241_241)] hover:border-[rgb(253_180_116)] hover:shadow-lg transition-all duration-200"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[rgb(255_250_245)] text-[rgb(231_129_40)] mb-4 group-hover:bg-[rgb(255_242_229)] transition-colors">
                {feature.icon}
              </div>
              <h3
                className="text-lg font-bold text-[rgb(23_23_23)] mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {feature.title}
              </h3>
              <p className="text-sm text-[rgb(115_115_115)] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
