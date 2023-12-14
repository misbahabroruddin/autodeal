import Image from 'next/image'

export default function DetailIklan() {
  const categoryItems = [
    { scr: '/icons/semua.png', alt: 'semua' },
    { scr: '/icons/properti.png', alt: 'properti' },
    { scr: '/icons/mobil.png', alt: 'mobil' },
    { scr: '/icons/motor.png', alt: 'motor' },
    { scr: '/icons/gadget.png', alt: 'gadget' },
    { scr: '/icons/elektronik.png', alt: 'gadget' },
    { scr: '/icons/olahraga.png', alt: 'olahraga' },
    { scr: '/icons/pawprint.png', alt: 'pawprint' }
  ]
  return (
    <div className="mt-36 py-4">
      {/* Breadcrumb */}
      <div className="flex gap-2 font-inter">
        <Image
          src="/svgs/home.svg"
          width={13}
          height={13}
          alt="Home"
          className="cursor-pointer"
        />
        <p className="cursor-pointer">
          <span className="text-[#AAAAAA]">/</span> Kategori Mobil
        </p>
        <p className="cursor-pointer">
          <span className="text-[#AAAAAA]">/</span> Mobil
        </p>
        <p className="cursor-pointer text-[#AAAAAA]">
          <span className="text-[#AAAAAA]">/</span> Mobil
        </p>
      </div>
    </div>
  )
}
