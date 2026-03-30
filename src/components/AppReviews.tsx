const REVIEWS = [
  {
    author: "ellebooklover",
    platform: "App Store",
    rating: 5,
    title: "Love it",
    body: "My favorite bookshelf app it's so cute and fun to use.",
  },
  {
    author: "Kristars",
    platform: "App Store",
    rating: 5,
    title: "My Fav Book Tracking App",
    body: "I have finally found it! This app is the one app I use for all my book tracking lists, TBR, Read and Wishlist. It's easy to use. Super cute and no hidden charges or in App purchases. I can personalize it to my liking. Love it.",
  },
  {
    author: "LC!16",
    platform: "App Store",
    rating: 5,
    title: "It's like having your bookcase in your pocket!",
    body: "This app allows you to keep track of what you've read with reviews. It quickly shows you what genres you are reading and encourages you to expand your reading by earning different badges. You can also create a to be read case so you always have your next read ready. It is a fun and creative way to see all your books with great aesthetic and details.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={i < rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth={1.5}
          className="text-brand"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: (typeof REVIEWS)[number] }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-surface-100 flex flex-col gap-3 w-full lg:w-[calc(33.333%-14px)]">
      <StarRating rating={review.rating} />
      <p
        className="text-base font-semibold text-text-primary leading-snug"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {review.title}
      </p>
      <p className="text-sm text-text-secondary leading-relaxed flex-1">
        {review.body}
      </p>
      <div className="flex items-center justify-between pt-2 border-t border-surface-100">
        <span className="text-xs font-medium text-text-muted">
          {review.author}
        </span>
        <span className="text-xs text-text-light">{review.platform}</span>
      </div>
    </div>
  );
}

export default function AppReviews() {
  return (
    <section className="py-16 sm:py-24 bg-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <StarRating rating={5} />
            <span className="text-sm font-semibold text-text-secondary">
              4.8 on the App Store
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            What readers are saying
          </h2>
        </div>

        {/* Review cards — flex-wrap so the last row is centered */}
        <div className="flex flex-wrap justify-center gap-5">
          {REVIEWS.map((review) => (
            <ReviewCard key={review.author} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
