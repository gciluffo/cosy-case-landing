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
          content="Contact the CosyCase team — report a bug, request a feature, or just say hello. Use our contact form or email us directly at hello@cosycases.com."
        />
        <link rel="canonical" href={`${SITE_URL}/contact/`} />
        <meta
          property="og:title"
          content="CosyCase Contact – Get in Touch"
        />
        <meta
          property="og:description"
          content="Contact the CosyCase team — report a bug, request a feature, or just say hello. Use our contact form or email us directly at hello@cosycases.com."
        />
        <meta property="og:url" content={`${SITE_URL}/contact/`} />
      </Head>
      <Navbar />
      <main className="pt-16">
        <Contact />
      </main>
    </>
  );
}
