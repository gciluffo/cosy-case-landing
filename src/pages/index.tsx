import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BookshelfShowcase from "@/components/BookshelfShowcase";
import AppReviews from "@/components/AppReviews";
import PromoBanner from "@/components/PromoBanner";
import Footer from "@/components/Footer";
import type { GetStaticProps } from "next";

const SITE_URL = "https://cosycases.com";
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
      name: "How can I customize my bookshelf?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To customize your bookshelf go to the main page and double tap the bookshelf you want to edit. From there you can add or remove books, change the shelf style, and more!",
      },
    },
    {
      "@type": "Question",
      name: "How can I share a bookshelf with a friend?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To share a bookshelf go to the main page and double tap the bookshelf you want to share. Then in the top right select the share button and send the link to a friend. That's it!",
      },
    },
    {
      "@type": "Question",
      name: "How can I follow a bookshelf?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To follow a bookshelf request a share link from a friend. Then open the link and tap the heart icon to follow. You'll see the bookshelf on your following tab. Any updates your friend makes to the shelf will automatically show up for you too.",
      },
    },
    {
      "@type": "Question",
      name: "How can I see what changes were made to a bookshelf?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When looking at a bookshelf sometimes its hard to see whats changed. Thats why we maintane a change log for each activity that happened. To see the change log of a bookshelf you are following, go to the bookshelf and tap on the clock icon on the bottom.",
      },
    },
    {
      "@type": "Question",
      name: "How does auto-cropping spines work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cosy Case strives to have a consistent and extensive database of book spine images to pick from. The app uses a computer vision model to recognize spines in a picture and automatically crops and rotates them. To get the best results make sure the book spine is properly lit.",
      },
    },
    {
      "@type": "Question",
      name: "How can I add a spine image if I don't have a physical book on hand?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There are a couple options. You can use our AI spine art feature to generate a custom spine based on the book's title and genre. Or as a pro tip you can tap on the Search Online button which will open a Google search for spine images for this book. You can then take a screenshot of a spine, then switch back to the app and upload the picture. The app will autocrop the picture.",
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
          <AppReviews />
          <PromoBanner />
          {/* <FAQ /> */}
        </main>
        <Footer />
      </div>
    </>
  );
}
