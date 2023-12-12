import Image from "next/image";
import React from "react";

const HeroSection = () => {
  const isLoggedIn = true;

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

      {isLoggedIn && (
        <div className="mt-[24px] w-full">
          <div className=" border border-zinc-800" />

          <h3 className="my-[24px] text-xl font-semibold text-white">
            Iklan Saya
          </h3>

          <div className="flex h-[124px] w-full items-center justify-between md:h-[178px]">
            {/* Isi Iklan */}
            <div className="flex  h-full w-full md:w-[49%] ">
              <Image
                className="h-full w-1/2 rounded-bl-xl rounded-tl-xl object-cover"
                width={280}
                height={180}
                alt="product"
                src="/images/tesla-rodster.png"
              />
              <div className="h-full w-1/2 rounded-br-xl rounded-tr-xl bg-[#282828] p-2.5 px-3">
                <div className="flex w-full justify-between">
                  <p className=" sm:text-md text-[10px] font-medium text-neutral-400 ">
                    Jual | Baru
                  </p>

                  <div className="flex items-center gap-[5px]">
                    <Image
                      width={12}
                      height={12}
                      alt="mata"
                      src="/svgs/mata.svg"
                      className="aspect-square w-[16px] object-contain"
                    />
                    <p className="text-[10px] font-medium text-neutral-400 md:text-xs">
                      120
                    </p>
                  </div>
                </div>

                <div className="inline-flex h-5 w-[84px] items-center justify-center gap-2.5 rounded-md bg-[#333333] px-1.5 py-1 md:my-[10px] md:h-[27px] md:w-[105px]">
                  <div className=" text-[10px] font-bold text-yellow-400 md:text-xs">
                    2022 - 1500 cc
                  </div>
                </div>

                <h3 className="mt-2 text-xs font-medium text-white md:text-sm">
                  Tesla Rodster
                </h3>
                <h3 className="text-[13px] font-bold text-white md:text-lg">
                  Rp 3.518.990.000
                </h3>
                <p className="text-[9px] font-medium text-neutral-400 md:mt-[15px] md:text-xs ">
                  Jakarta Barat, Kalideres
                </p>
              </div>
            </div>

            {/* Kosong */}
            <div className=" h-full w-[49%] rounded-xl bg-[#282828] px-4 pb-4 max-md:hidden  ">
              <dir className=" flex h-[90%] w-full items-center justify-center rounded-xl border-2 border-dashed border-amber-400 border-opacity-25">
                <button>
                  <Image width={48} height={48} alt=".." src="/svgs/plus.svg" />
                </button>
              </dir>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
