"use client"

import Image from "next/image"
import { useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"

export default function KategoriMenu() {
  const [disablePrevButton, setDisablePrevButton] = useState(true)
  const [disableNextButton, setDisableNextButton] = useState(false)
  const swiperRef = useRef()

  const categoryItems = [
    { scr: "/icons/semua.png", alt: "semua" },
    { scr: "/icons/properti.png", alt: "properti" },
    { scr: "/icons/mobil.png", alt: "mobil" },
    { scr: "/icons/motor.png", alt: "motor" },
    { scr: "/icons/gadget.png", alt: "gadget" },
    { scr: "/icons/elektronik.png", alt: "gadget" },
    { scr: "/icons/olahraga.png", alt: "olahraga" },
    { scr: "/icons/olahraga.png", alt: "olahraga" },
    { scr: "/icons/olahraga.png", alt: "olahraga" },
    { scr: "/icons/olahraga.png", alt: "olahraga" },
    { scr: "/icons/olahraga.png", alt: "olahraga" },
    { scr: "/icons/olahraga.png", alt: "olahraga" },
    { scr: "/icons/pawprint.png", alt: "pawprint" }
  ]
  return (
    <div className="hidden w-screen bg-[#333333] py-[10px] max-lg:px-[20px] md:block">
      <div className="relative mx-auto flex max-w-[1280px] items-center justify-between">
        {/* Categories Button*/}
        <Swiper
          className="relative flex w-full gap-2 overflow-x-hidden"
          spaceBetween={10}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper
          }}
          breakpoints={{
            // when window width is >= 480px
            768: {
              slidesPerView: 6.5,
              spaceBetween: 10
            },
            // when window width is >= 640px
            1024: {
              slidesPerView: 9.5,
              spaceBetween: 10
            }
          }}
          onSlideChange={(swiper) => {
            setDisablePrevButton(swiper.isBeginning)
            setDisableNextButton(swiper.isEnd)
          }}
        >
          {categoryItems.map((item, index) => (
            <SwiperSlide
              key={index}
              className="lg:min-w-32 flex h-9 min-w-[103px] items-center justify-center gap-2 rounded-lg bg-[#282828] px-4 py-2 text-[14px] text-white lg:h-11"
            >
              <Image src={item.scr} alt={item.alt} width={20} height={20} />
              <h5 className="text-xs capitalize lg:text-sm">{item.alt}</h5>
            </SwiperSlide>
          ))}
          {/* Arrow Button */}
        </Swiper>
        <div className="flex items-center gap-[6px] px-2 max-lg:hidden">
          <button
            className={disablePrevButton ? "" : "active:scale-95"}
            onClick={() => swiperRef.current?.slidePrev()}
            disabled={disablePrevButton}
          >
            {disablePrevButton ? (
              <Image
                width={40}
                height={40}
                alt="arrow-kiri"
                src="/svgs/arrow-kiri.svg"
                className="rounded-full object-contain"
              />
            ) : (
              <Image
                width={40}
                height={40}
                alt="arrow-kiri"
                src="/svgs/arrow-kanan.svg"
                className="rotate-180 rounded-full object-contain"
              />
            )}
          </button>
          <button
            className={disableNextButton ? "" : "active:scale-95"}
            onClick={() => swiperRef.current?.slideNext()}
            disabled={disableNextButton}
          >
            {disableNextButton ? (
              <Image
                width={40}
                height={40}
                alt="arrow-kanan"
                src="/svgs/arrow-kiri.svg"
                className="rotate-180 object-contain"
              />
            ) : (
              <Image
                width={40}
                height={40}
                alt="arrow-kanan"
                src="/svgs/arrow-kanan.svg"
                className="object-contain"
              />
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
