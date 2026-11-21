import Head from "next/head";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";

const SITE_URL = "https://cosycases.com";

export default function Page() {
  return (
    <>
      <Head>
        <title>CosyCase Contact – Get in Touch</title>
        <meta
          name="description"
          content="Contact the CosyCase team — report a bug, request a feature, or just say hello. Use our contact form or email us directly at griffin@ciluffo.com."
        />
        <link rel="canonical" href={`${SITE_URL}/contact/`} />
        <meta property="og:title" content="CosyCase Contact – Get in Touch" />
        <meta
          property="og:description"
          content="Contact the CosyCase team — report a bug, request a feature, or just say hello. Use our contact form or email us directly at griffin@ciluffo.com."
        />
        <meta property="og:url" content={`${SITE_URL}/contact/`} />
        <meta property="og:image" content={`${SITE_URL}/og-image.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta
          property="og:image:alt"
          content="CosyCase digital bookshelf and book tracker app"
        />
      </Head>
      <Navbar />
      <main className="pt-16 bg-surface-0 min-h-screen">
        <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-2 text-center">
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Contact CosyCase
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-text-secondary leading-relaxed">
            Questions, bug reports, or feature ideas for the CosyCase bookshelf
            app? We read every message.
          </p>
        </header>
        <Contact />
      </main>
    </>
  );
}
