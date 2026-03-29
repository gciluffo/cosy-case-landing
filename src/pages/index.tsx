import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import BookshelfShowcase from "@/components/BookshelfShowcase";
import AIFeature from "@/components/AIFeature";
import Customization from "@/components/Customization";
import FAQ from "@/components/FAQ";
import PromoBanner from "@/components/PromoBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>CosyCase</title>
        <meta
          name="description"
          content="Build your dream digital bookshelf."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-white" style={{ fontFamily: "var(--font-body)" }}>
        <Navbar />
        <main>
          <Hero />
          {/* <Features /> */}
          <BookshelfShowcase />
          <PromoBanner />
          {/* <AIFeature /> */}
          {/* <Customization /> */}
          {/* <FAQ /> */}
        </main>
        <Footer />
      </div>
    </>
  );
}
