import Navbar from "@/components/Navbar";
import FAQ from "@/components/FAQ";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <FAQ />
      </main>
    </>
  );
}
