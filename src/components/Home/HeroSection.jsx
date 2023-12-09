import Image from "next/image";
import React from "react";

const HeroSection = () => {
  const categoryItems = [
    { scr: "/icons/semua.png", alt: "semua" },
    { scr: "/icons/properti.png", alt: "properti" },
    { scr: "/icons/mobil.png", alt: "mobil" },
    { scr: "/icons/motor.png", alt: "motor" },
    { scr: "/icons/gadget.png", alt: "gadget" },
    { scr: "/icons/elektronik.png", alt: "gadget" },
    { scr: "/icons/olahraga.png", alt: "olahraga" },
    { scr: "/icons/pawprint.png", alt: "pawprint" },
  ];

  return (
    <div className="relative my-[30px] mt-[120px] flex  flex-col overflow-hidden rounded-xl bg-[#333333]  p-[20px] font-quicksand  max-md:mt-[140px] lg:p-[25px]">
      {/* Decoration */}
      <div className="z-1 absolute right-[5%]   h-[124.08px] origin-top-left rotate-[8.21deg]  rounded-2xl border-[20px] border-[#2D2D2D] bg-[#282828] max-md:hidden md:top-[-85%]  md:w-[733.01px] lg:top-[-70%] lg:w-[800px] xl:top-[-80%] xl:h-[150px] xl:w-[950px]" />

      {/* Identity */}
      <h1 className="z-0 text-2xl font-semibold text-white lg:text-4xl">
        Halo Duran Clayton 👋🏼
      </h1>
      <p className="mt-[6px] text-sm text-white lg:text-base">
        Ayoo temukan yang kamu butuhkan di autodeal.id
      </p>

      <div className="mt-[20px] flex items-center justify-between">
        {/* Categories Button*/}
        <div className="  relative flex w-[80%]  gap-[8px] overflow-x-hidden">
          {categoryItems.map((item, index) => (
            <div
              key={index}
              className="lg:min-w-32 flex h-9 min-w-[103px] items-center justify-center gap-2 rounded-lg bg-[#282828] px-4 py-2 text-[14px] text-white lg:h-11"
            >
              <Image src={item.scr} alt={item.alt} width={20} height={20} />
              <h5 className="text-xs capitalize lg:text-sm">{item.alt}</h5>
            </div>
          ))}

          {/* <div className="r absolute right-0 h-full w-10 bg-[#282828]/80 " /> */}
        </div>
        {/* Arrow Button */}
        <div className="z-0 flex items-center gap-[6px] max-lg:hidden">
          <button className="active:scale-95">
            <Image
              width={40}
              height={40}
              alt="arrow-kiri"
              src="/svgs/arrow-kiri.svg"
              className="rounded-full object-contain"
            />
          </button>

          <button className="active:scale-95">
            <Image
              width={40}
              height={40}
              alt="arrow-kanan"
              src="/svgs/arrow-kanan.svg"
              className="object-contain"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
