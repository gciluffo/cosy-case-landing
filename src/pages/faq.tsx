import Head from "next/head";
import Navbar from "@/components/Navbar";
import FAQ from "@/components/FAQ";

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
      </Head>
      <Navbar />
      <main className="pt-16">
        <FAQ />
      </main>
    </>
  );
}
