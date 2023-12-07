import CardProducts from "@/components/CardProducts";
import HeroSection from "@/components/Home/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <section className="min-h-screen w-screen">
      <Navbar />
      <main className="px-20 max-lg:px-[20px]">
        <HeroSection />
        <CardProducts />
      </main>
    </section>
  );
}
