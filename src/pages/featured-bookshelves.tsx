import Head from "next/head";
import Image from "next/image";
import { join } from "node:path";
import Navbar from "@/components/Navbar";
import {
  listFeaturedShelves,
  type FeaturedShelf,
} from "@/utils/featuredShelves";
import type { GetStaticProps, InferGetStaticPropsType } from "next";

const SITE_URL = "https://cosycases.com";

export const getStaticProps = (async () => {
  const shelves = await listFeaturedShelves(
    join(process.cwd(), "public", "featured-bookshelves"),
  );
  return { props: { shelves } };
}) satisfies GetStaticProps<{ shelves: FeaturedShelf[] }>;

function EmptyState() {
  return (
    <div className="max-w-md mx-auto text-center bg-surface-50 border border-surface-100 rounded-3xl px-8 py-14">
      <div className="mb-6 flex justify-center">
        <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center">
          <svg
            width="26"
            height="26"
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
      <h2
        className="text-xl font-bold text-text-primary mb-3"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        No bookshelves yet
      </h2>
      <p className="text-sm text-text-secondary leading-relaxed">
        We&rsquo;re still gathering shelves to feature. Check back soon to see
        what the CosyCase community has been reading.
      </p>
    </div>
  );
}

export default function FeaturedBookshelves({
  shelves,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Featured Bookshelves – CosyCase</title>
        <meta
          name="description"
          content="Browse real digital bookshelves built by CosyCase readers — full shelf layouts, real spines, and cosy reading corners."
        />
        <link rel="canonical" href={`${SITE_URL}/featured-bookshelves/`} />
        <meta name="robots" content="noindex" />
      </Head>
      <div
        className="bg-surface-0 min-h-screen"
        style={{ fontFamily: "var(--font-body)" }}
      >
        <Navbar />
        <main className="pt-16">
          <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8 sm:pb-12 text-center">
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Featured Bookshelves
            </h1>
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-text-secondary leading-relaxed">
              Real shelves built by CosyCase readers. Browse the spines, styles,
              and arrangements for a little inspiration for your own.
            </p>
          </header>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
            {shelves.length === 0 ? (
              <EmptyState />
            ) : (
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6">
                {shelves.map((shelf) => (
                  <div
                    key={shelf.file}
                    className="mb-4 sm:mb-6 break-inside-avoid"
                  >
                    <Image
                      src={`/featured-bookshelves/${shelf.file}`}
                      alt="A featured bookshelf built in CosyCase"
                      width={shelf.width}
                      height={shelf.height}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                      className="w-full h-auto rounded-xl sm:rounded-2xl border border-surface-100"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
}
