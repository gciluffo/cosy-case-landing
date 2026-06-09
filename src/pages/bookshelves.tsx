import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { getStoreUrl } from "@/utils/getStoreUrl";

const SITE_URL = "https://cosycases.com";

export default function FeaturedShelves() {
  return (
    <>
      <Head>
        <title>Featured Shelves – CosyCase</title>
        <meta
          name="description"
          content="Explore beautiful bookshelves from the CosyCase community. Coming soon."
        />
        <link rel="canonical" href={`${SITE_URL}/bookshelves`} />
        <meta name="robots" content="noindex" />
      </Head>
      <Navbar />
      <main
        className="min-h-screen bg-surface-0 flex items-center justify-center pt-16"
        style={{ fontFamily: "var(--font-body)" }}
      >
        <div className="max-w-md mx-auto px-6 text-center">
          {/* Shelf icon */}
          <div className="mb-8 flex justify-center">
            <div className="w-16 h-16 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(231 129 40)"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M2 20h20" />
                <path d="M4 20V8l8-5 8 5v12" />
                <path d="M9 20v-7h6v7" />
              </svg>
            </div>
          </div>

          <span className="inline-block text-xs font-semibold tracking-widest text-orange uppercase mb-4">
            Coming soon
          </span>

          <h1
            className="text-3xl sm:text-4xl font-bold text-text-primary mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Featured Shelves
          </h1>

          <p className="text-base text-text-secondary leading-relaxed mb-10">
            A curated gallery of bookshelves from the CosyCase community.
            Beautiful collections, real spines, and the stories behind them.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={getStoreUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-orange text-white text-sm font-semibold hover:bg-[rgb(190_100_30)] transition-colors"
            >
              Build your shelf
            </a>
            <Link
              href="/"
              className="inline-flex items-center px-5 py-2.5 rounded-full border border-surface-100 text-sm font-medium text-text-secondary hover:text-text-primary hover:border-surface-100 transition-colors"
            >
              Back to home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
