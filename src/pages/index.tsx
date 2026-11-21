import Head from "next/head";
import { join } from "node:path";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BookshelfShowcase from "@/components/BookshelfShowcase";
import FeaturedShelvesRail from "@/components/FeaturedShelvesRail";
import Features from "@/components/Features";
import AppReviews from "@/components/AppReviews";
import PromoBanner from "@/components/PromoBanner";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import {
  listFeaturedShelves,
  type FeaturedShelf,
} from "@/utils/featuredShelves";
import { faqSchema } from "@/utils/faq";
import type { GetStaticProps, InferGetStaticPropsType } from "next";

const SITE_URL = "https://cosycases.com";
const APP_STORE_URL = "https://apps.apple.com/app/apple-store/id6747253733";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.gciluffo.cosycase";

const SEO_TITLE = "CosyCase – Digital Bookshelf & Book Tracker App";
const SEO_DESCRIPTION =
  "Build a digital bookshelf with real book spines. Scan your shelves, track what you read, and share your collection with CosyCase for iOS and Android.";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

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

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "CosyCase",
  url: SITE_URL,
};

export const getStaticProps = (async () => {
  const shelves = await listFeaturedShelves(
    join(process.cwd(), "public", "featured-bookshelves"),
  );
  return {
    props: { shelves },
  };
}) satisfies GetStaticProps<{ shelves: FeaturedShelf[] }>;

export default function Home({
  shelves,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{SEO_TITLE}</title>
        <meta name="description" content={SEO_DESCRIPTION} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={`${SITE_URL}/`} />

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
        <meta property="og:image:type" content="image/png" />
        <meta
          property="og:image:alt"
          content="CosyCase digital bookshelf and book tracker app"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SEO_TITLE} />
        <meta name="twitter:description" content={SEO_DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta
          name="twitter:image:alt"
          content="CosyCase digital bookshelf and book tracker app"
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
      <div className="bg-surface-0" style={{ fontFamily: "var(--font-body)" }}>
        <Navbar />
        <main>
          <Hero />
          <BookshelfShowcase />
          <FeaturedShelvesRail shelves={shelves} />
          {/* <Features /> */}
          <AppReviews />
          <PromoBanner />
          <FAQ />
        </main>
        <Footer />
      </div>
    </>
  );
}
