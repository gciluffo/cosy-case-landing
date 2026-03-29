const customizations = [
  {
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    title: "Shelf Widgets",
    description:
      "Drop in reading stats, progress trackers, quote blocks, and more. Arrange them alongside your books to tell the full story of your reading life.",
    items: ["Reading stats", "Progress bar", "Quote cards", "Year-in-books"],
  },
  {
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        <path d="M2 12h20" />
      </svg>
    ),
    title: "Backgrounds",
    description:
      "Set the mood with a range of backgrounds — cosy wooden walls, minimalist white, moody dark, sun-drenched linen. New themes added regularly.",
    items: ["Dark wood", "Linen white", "Midnight", "Custom colour"],
  },
  {
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 17h18" />
        <path d="M3 12h18" />
        <path d="M3 7h18" />
        <path d="M5 19v2M19 19v2M5 5V3M19 5V3" />
      </svg>
    ),
    title: "Shelf Styles",
    description:
      "Go from classic oak brackets to sleek floating shelves or rustic planks. Mix and match styles per row to create a shelf that feels truly yours.",
    items: [
      "Classic bracket",
      "Floating shelf",
      "Rustic plank",
      "Industrial metal",
    ],
  },
];

export default function Customization() {
  return (
    <section id="customize" className="py-20 md:py-28 bg-[rgb(246_246_246)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest text-[rgb(231_129_40)] uppercase mb-3">
            Make it yours
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[rgb(23_23_23)]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Customize every inch of your shelf
          </h2>
          <p className="mt-4 text-[rgb(115_115_115)] max-w-xl mx-auto">
            No two readers are the same — and neither are their shelves. Tweak,
            rearrange, and style your space until it feels perfectly you.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {customizations.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-7 border border-[rgb(242_241_241)] hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[rgb(255_250_245)] border border-[rgb(254_209_170)] text-[rgb(231_129_40)] mb-5">
                {item.icon}
              </div>
              <h3
                className="text-xl font-bold text-[rgb(23_23_23)] mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {item.title}
              </h3>
              <p className="text-sm text-[rgb(115_115_115)] leading-relaxed mb-5">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.items.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-[rgb(255_250_245)] text-[rgb(180_98_26)] border border-[rgb(254_209_170)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
