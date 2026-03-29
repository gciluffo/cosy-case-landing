import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BookshelfShowcase from "@/components/BookshelfShowcase";
import PromoBanner from "@/components/PromoBanner";
import Footer from "@/components/Footer";
import type { GetStaticProps } from "next";

const SITE_URL = "https://cosycase.app";
const APP_STORE_URL = "https://apps.apple.com/app/apple-store/id6747253733";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.gciluffo.cosycase";

const SEO_TITLE = "CosyCase – Digital Bookshelf & Book Tracker App";
const SEO_DESCRIPTION =
  "CosyCase is a digital bookshelf app for iOS & Android. Build a reading list, join reading challenges, write book reviews, share your shelf with friends, and track every book you read.";
const OG_IMAGE = `${SITE_URL}/screenshots/bookshelf.png`;

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "CosyCase",
  description: SEO_DESCRIPTION,
  applicationCategory: "LifestyleApplication",
  operatingSystem: "iOS, Android",
  url: SITE_URL,
  downloadUrl: [APP_STORE_URL, PLAY_STORE_URL],
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is CosyCase free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CosyCase is free to download with a generous free tier that lets you track books and build a basic bookshelf. A premium subscription unlocks unlimited shelves, AI spine art, all backgrounds and shelf styles, and exclusive widgets.",
      },
    },
    {
      "@type": "Question",
      name: "Which platforms is CosyCase available on?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CosyCase is available on both iOS (iPhone & iPad) and Android. Download it from the App Store or Google Play.",
      },
    },
    {
      "@type": "Question",
      name: "How does CosyCase find book information?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We search a database of millions of titles worldwide. Just type a title, author, or ISBN and we'll pull in the cover, description, page count, and more automatically.",
      },
    },
    {
      "@type": "Question",
      name: "How does the bulk import from a photo work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Snap a photo of your physical bookshelf and CosyCase's AI will scan and identify the books in the image. You'll see a list of detected titles and can select which ones to import — no manual searching needed.",
      },
    },
    {
      "@type": "Question",
      name: "What is AI spine art?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If a book doesn't have a spine image available, you can ask CosyCase to generate one using AI. The model creates artwork that matches the book's title, genre, and mood so it blends naturally with your real spines.",
      },
    },
    {
      "@type": "Question",
      name: "Can I share my bookshelf?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! You can export a screenshot of your shelf and share it anywhere — Instagram, Twitter, a book club group chat, wherever. More sharing options are coming soon.",
      },
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "CosyCase",
  url: SITE_URL,
};

export const getStaticProps = (async () => {
  return { props: {} };
}) satisfies GetStaticProps;

export default function Home() {
  return (
    <>
      <Head>
        <title>{SEO_TITLE}</title>
        <meta name="description" content={SEO_DESCRIPTION} />
        <meta
          name="keywords"
          content="bookshelf, book tracker, reading list, reading challenge, book club, book reviews, share shelf, digital bookshelf, book collection"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={SITE_URL} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="CosyCase" />
        <meta property="og:title" content={SEO_TITLE} key="og:title" />
        <meta
          property="og:description"
          content={SEO_DESCRIPTION}
          key="og:description"
        />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:image" content={OG_IMAGE} key="og:image" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="CosyCase digital bookshelf app screenshot"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SEO_TITLE} />
        <meta name="twitter:description" content={SEO_DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta
          name="twitter:image:alt"
          content="CosyCase digital bookshelf app screenshot"
        />

        {/* Apple Smart App Banner — prompts iOS Safari users to open/install the app */}
        <meta name="apple-itunes-app" content="app-id=6747253733" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareApplicationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </Head>
      <div className="bg-white" style={{ fontFamily: "var(--font-body)" }}>
        <Navbar />
        <main>
          <Hero />
          <BookshelfShowcase />
          <PromoBanner />
          {/* <FAQ /> */}
        </main>
        <Footer />
      </div>
    </>
  );
}
