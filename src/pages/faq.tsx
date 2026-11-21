import Head from "next/head";
import Navbar from "@/components/Navbar";
import FAQ from "@/components/FAQ";
import { faqSchema } from "@/utils/faq";

const SITE_URL = "https://cosycases.com";

export default function Page() {
  return (
    <>
      <Head>
        <title>CosyCase FAQ – Book Tracker & Digital Bookshelf App Help</title>
        <meta
          name="description"
          content="Answers to common questions about CosyCase — how to customize your bookshelf, share your shelf, track reading lists, manage your TBR, and use AI spine art."
        />
        <link rel="canonical" href={`${SITE_URL}/faq/`} />
        <meta
          property="og:title"
          content="CosyCase FAQ – Book Tracker & Digital Bookshelf App Help"
        />
        <meta
          property="og:description"
          content="Answers to common questions about CosyCase — how to customize your bookshelf, share your shelf, track reading lists, manage your TBR, and use AI spine art."
        />
        <meta property="og:url" content={`${SITE_URL}/faq/`} />
        <meta property="og:image" content={`${SITE_URL}/og-image.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta
          property="og:image:alt"
          content="CosyCase digital bookshelf and book tracker app"
        />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>
      <Navbar />
      <main className="pt-16 bg-surface-0 min-h-screen">
        <header className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest text-orange uppercase mb-3">
            Help center
          </span>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            CosyCase FAQ
          </h1>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
            Everything you need to know about the CosyCase book tracker and
            digital bookshelf app.
          </p>
        </header>
        <FAQ />
      </main>
    </>
  );
}
