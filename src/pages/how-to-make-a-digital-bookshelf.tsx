import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PromoBanner from "@/components/PromoBanner";
import shelfPhoto from "../../public/screenshots/step-1.webp";
import scanResults from "../../public/screenshots/step-2.webp";
import finishedShelf from "../../public/screenshots/step-3.webp";
import trackReading from "../../public/screenshots/step-4.webp";
import shareShelf from "../../public/screenshots/step-5.webp";

const SITE_URL = "https://cosycases.com";
const CANONICAL_URL = `${SITE_URL}/how-to-make-a-digital-bookshelf/`;
const HEADING = "How to Make a Digital Bookshelf for the Books You Own";
const TITLE = "How to Make a Digital Bookshelf | CosyCase";
const AUTHOR = "Griffin Ciluffo";
const DESCRIPTION =
  "Turn a photo of your books into a digital bookshelf with CosyCase, or add books by title. Then pick your spines, organize your reads, and share your shelf.";
const appScreenClass = "mx-auto block h-auto w-full max-w-72";
const photoClass = "mx-auto block h-auto w-full max-w-72 rounded-xl";

export default function DigitalBookshelfGuide() {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="author" content={AUTHOR} />
        <link rel="canonical" href={CANONICAL_URL} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="CosyCase" />
        <meta property="og:title" content={TITLE} key="og:title" />
        <meta
          property="og:description"
          content={DESCRIPTION}
          key="og:description"
        />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta
          property="og:image"
          content={`${SITE_URL}/og-image.png`}
          key="og:image"
        />
      </Head>
      <div
        className="bg-surface-0 text-text-primary"
        style={{ fontFamily: "var(--font-body)" }}
      >
        <Navbar />
        <main className="pt-16">
          <GuideArticle />
          <PromoBanner heading="Build your own shelf." />
        </main>
        <Footer />
      </div>
    </>
  );
}

function GuideArticle() {
  return (
    <article className="pb-12 sm:pb-20">
      <header className="mx-auto max-w-6xl px-5 pt-12 pb-10 sm:px-8 sm:pt-16">
        <h1
          className="max-w-[22ch] text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {HEADING}
        </h1>
        <p className="mt-5 max-w-[65ch] text-lg leading-relaxed text-charcoal">
          If you are like me you have a lot of ebooks and scattered physical
          books around your home and you want to visualize all your books in one
          place. Start with a photo of one shelf or search for your books by
          title. CosyCase turns that list into a shelf you can arrange by the
          spine, just like a real bookshelf. You can put paperbacks, ebooks, and
          even the library books you want to remember on the same shelf.
        </p>
        <p className="mt-5 text-sm font-medium text-charcoal">By {AUTHOR}</p>
        <nav aria-label="Choose how to start" className="mt-6 text-charcoal">
          <p className="text-sm font-medium">Choose how to start:</p>
          <ul className="mt-2 flex flex-wrap gap-x-6 gap-y-3 font-semibold [&_a]:underline [&_a]:decoration-orange [&_a]:decoration-2 [&_a]:underline-offset-4 [&_a]:transition-colors">
            <li>
              <a
                href="#scan-a-physical-shelf"
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "rgb(231 129 40)";
                  e.currentTarget.style.cursor = "pointer";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "";
                }}
              >
                Scan a physical shelf
              </a>
            </li>
            <li>
              <a
                href="#build-an-ebook-shelf"
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "rgb(231 129 40)";
                  e.currentTarget.style.cursor = "pointer";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "";
                }}
              >
                Build an ebook shelf without scanning
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <GuideStep
        shaded
        media={
          <figure>
            <Image
              src={shelfPhoto}
              alt="A stack of books on a shelf at home"
              className={photoClass}
            />
            <figcaption className="mt-2 text-sm text-charcoal">
              In my apartment I currently do not have a bookshelf so I have this
              sad corner of books stacked up instead.
            </figcaption>
          </figure>
        }
      >
        <h2>1. Pick a shelf to start with</h2>
        <p>
          Start with one row, a favourite series, or the stack by your bed. If
          you want a record of what you own, start there. If you mostly want to
          choose your next read, make a TBR shelf instead. You can make more
          shelves later without having to decide where every book belongs today.
        </p>
      </GuideStep>
      <GuideStep
        media={
          <figure>
            <Image
              src={scanResults}
              alt="CosyCase showing books detected in a bookshelf scan"
              className={appScreenClass}
            />
            <figcaption className="mx-auto mt-3 max-w-72 text-sm leading-relaxed text-charcoal">
              Review the matches. The app automatically detects the books on
              your shelf and crops the spine images for display on your digital
              shelf.
            </figcaption>
          </figure>
        }
      >
        <h2>2. Add books to your shelf</h2>
        <h3
          id="scan-a-physical-shelf"
          className="mb-2 scroll-mt-20 text-xl font-semibold text-text-primary"
        >
          Scan a physical shelf
        </h3>
        <p>
          In CosyCase, open <strong>Add Books</strong> and choose Bulk Scan.
          Take a photo or select one from your camera roll. For better matches,
          shoot straight on with the spines well lit and their titles visible.
          If a bookcase is crowded or the print is hard to read, try one row at
          a time.
        </p>
        <p>
          Review the suggested matches, select the books you want, and choose
          the shelf to add them to. If the scan misses a book or suggests the
          wrong one, leave it out and search for it by title or author. Shelf
          scans have usage limits.
        </p>
        <h3
          id="build-an-ebook-shelf"
          className="mt-6 mb-2 scroll-mt-20 text-xl font-semibold text-text-primary"
        >
          Build an ebook shelf without scanning
        </h3>
        <p>
          Search for a book in <strong>Add Books</strong>, select the right
          match, and add it to your shelf. This works for ebooks and audiobooks,
          too. CosyCase tracks the titles; it doesn&rsquo;t import the ebook or
          audio files themselves.
        </p>
        <p>
          Already tracking your reading in Goodreads or StoryGraph? Export your
          list as a CSV and use the file import option in{" "}
          <strong>Add Books</strong>. Once the books are in your library, add
          the ones you want to a shelf.
        </p>
      </GuideStep>
      <GuideStep
        shaded
        media={
          <figure>
            <Image
              src={finishedShelf}
              alt="A finished digital bookshelf displaying book spines in CosyCase"
              className={appScreenClass}
            />
            <figcaption className="mx-auto mt-3 max-w-72 text-sm leading-relaxed text-charcoal">
              Once your books are in the app you can add them to a shelf.
              Arrange them by spine, series, or any order you like to create
              your personal digital bookshelf.
            </figcaption>
          </figure>
        }
      >
        <h2>3. Make the shelf look like yours</h2>
        <p>
          A digital shelf can look like the bookcase in your living room, right
          down to your favourite edition. Choose an available spine image, or
          upload a straight, well-lit photo of your copy&rsquo;s spine and let
          CosyCase crop it. If you don&rsquo;t have a physical copy or
          can&rsquo;t find a matching spine, you can generate custom spine art
          instead.
        </p>
        <p>
          Double-tap a bookshelf on the main screen to edit it. Pick a shelf
          style and background, arrange books in the order you like, and leave a
          little room for decorations if that&rsquo;s your thing. Try keeping a
          series together or giving favourite editions a row of their own.
        </p>
      </GuideStep>
      <GuideStep
        media={
          <figure>
            <Image
              src={trackReading}
              alt="CosyCase reading tracker showing books marked as reading and finished"
              className={appScreenClass}
            />
            <figcaption className="mx-auto mt-3 max-w-72 text-sm leading-relaxed text-charcoal">
              Keep track of your progress.
            </figcaption>
          </figure>
        }
      >
        <h2>4. Keep track as you read</h2>
        <p>
          Mark books as want to read, currently reading, or finished. Your
          reading history lets you look back on what you&rsquo;ve read, and you
          can add notes or a review while a book is still fresh.
        </p>
      </GuideStep>
      <GuideStep
        shaded
        media={
          <figure>
            <Image
              src={shareShelf}
              alt="CosyCase share button on a digital bookshelf"
              className={appScreenClass}
            />
            <figcaption className="mx-auto mt-3 max-w-72 text-sm leading-relaxed text-charcoal">
              Keep up to date with your friends' shelves.
            </figcaption>
          </figure>
        }
      >
        <h2>5. Share your shelf</h2>
        <p>
          Open the shelf and use the share button in the top right to send a
          link. Friends can follow the shelf to see what you add next. If
          you&rsquo;re still deciding how to arrange yours,{" "}
          <Link
            href="/featured-bookshelves/"
            className="font-semibold underline decoration-orange decoration-2 underline-offset-4"
          >
            see real digital bookshelf examples
          </Link>{" "}
          from CosyCase readers.
        </p>
      </GuideStep>
      <div className="mx-auto max-w-6xl px-5  sm:px-8 text-center mt-10">
        <Link
          href="/featured-bookshelves/"
          className="inline-flex items-center gap-1.5 font-semibold text-charcoal transition-colors"
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "rgb(231 129 40)";
            e.currentTarget.style.cursor = "pointer";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "";
          }}
        >
          See inspiration for your shelf
          <svg
            width="15"
            height="15"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
            style={{ cursor: "pointer", pointerEvents: "none" }}
          >
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </Link>
      </div>
    </article>
  );
}

function GuideStep({
  children,
  media,
  shaded = false,
}: {
  children: ReactNode;
  media: ReactNode;
  shaded?: boolean;
}) {
  return (
    <section className={shaded ? "bg-surface-50" : undefined}>
      <div className="mx-auto grid max-w-6xl items-start gap-6 px-5 py-9 sm:px-8 sm:py-12 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:gap-10 lg:gap-14">
        <div className="max-w-[62ch] text-base leading-[1.75] text-charcoal sm:text-lg [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:leading-tight [&_h2]:font-bold [&_h2]:text-text-primary [&_h2]:[font-family:var(--font-heading)] sm:[&_h2]:text-3xl [&_p+p]:mt-4">
          {children}
        </div>
        <div className="mx-auto w-full max-w-sm">{media}</div>
      </div>
    </section>
  );
}
