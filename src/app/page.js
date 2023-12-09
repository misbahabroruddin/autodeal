import Border from "@/components/Home/Border";
import ButtonSelanjutnya from "@/components/Home/ButtonSelanjutnya";
import HeroSection from "@/components/Home/HeroSection";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <section className="w-full px-20 max-lg:px-[20px]">
      <HeroSection />
      <ProductList
        srcImage="/svgs/new.svg"
        textIklan="Iklan Terbaru Disekitarmu"
      />
      <Border />
      <ProductList
        srcImage="/images/new.png"
        textIklan="Iklan Terbaru Lainnya"
      />
      <ButtonSelanjutnya />
    </section>
  );
}
