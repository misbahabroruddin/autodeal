import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="  bg-[#333333] mt-[100px]  my-[30px] rounded-[20px] p-8">
      {/* Identity */}
      <h1 className="text-white text-4xl font-semibold">Halo</h1>
      <p className="text-white mt-[10px]">
        Ayoo temukan yang kamu butuhkan di autodeal.id
      </p>

      {/* Categories */}
      <div className="flex gap-3 mt-[32px]">
        <div className="flex items-center gap-2 bg-[#282828] rounded-xl px-3 py-2 text-white text-[14px]">
          <Image src="/icons/semua.png" alt="" width={16} height={16} />
          <h5>Semua</h5>
        </div>
        <div className="flex items-center gap-2 bg-[#282828] rounded-xl px-3 py-2 text-white text-[14px]">
          <Image src="/icons/Properti.png" alt="" width={16} height={16} />
          <h5>Properti</h5>
        </div>
        <div className="flex items-center gap-2 bg-[#282828] rounded-xl px-3 py-2 text-white text-[14px]">
          <Image src="/icons/mobil.png" alt="" width={16} height={16} />
          <h5>Mobil</h5>
        </div>
        <div className="flex items-center gap-2 bg-[#282828] rounded-xl px-3 py-2 text-white text-[14px]">
          <Image src="/icons/motor.png" alt="" width={16} height={16} />
          <h5>Motor</h5>
        </div>
        <div className="flex items-center gap-2 bg-[#282828] rounded-xl px-3 py-2 text-white text-[14px]">
          <Image src="/icons/gadget.png" alt="" width={16} height={16} />
          <h5>Gdget</h5>
        </div>
        <div className="flex items-center gap-2 bg-[#282828] rounded-xl px-3 py-2 text-white text-[14px]">
          <Image src="/icons/elektronik.png" alt="" width={16} height={16} />
          <h5>Elektronik</h5>
        </div>
        <div className="flex items-center gap-2 bg-[#282828] rounded-xl px-3 py-2 text-white text-[14px]">
          <Image src="/icons/olahraga.png" alt="" width={16} height={16} />
          <h5>Olahraga</h5>
        </div>
        <div className="flex items-center gap-2 bg-[#282828] rounded-xl px-3 py-2 text-white text-[14px]">
          <Image src="/icons/pawprint.png" alt="" width={16} height={16} />
          <h5>Peliharaan</h5>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
