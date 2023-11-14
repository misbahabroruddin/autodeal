import React from 'react'

const HeroSection = () => {
  return (
    <div className=' container bg-black w-3/4 mx-auto my-8 rounded-lg'>
        <div className='px-8 py-8'>
            <h1 className='text-white text-2xl font-semibold'>Halo</h1>
            <p className='text-white mt-2'>Ayo temukan yang kamu butuhkan di sini</p>
            <div className='flex gap-3 mt-2'>
                <div className='bg-sky-950 rounded-sm px-3 py-2 text-white text-[16px]'>Semua</div>
                <div className='bg-sky-950 rounded-sm px-3 py-2 text-white text-[16px]'>Properti</div>
                <div className='bg-sky-950 rounded-sm px-3 py-2 text-white text-[16px]'>Mobil</div>
                <div className='bg-sky-950 rounded-sm px-3 py-2 text-white text-[16px]'>Motor</div>
                <div className='bg-sky-950 rounded-sm px-3 py-2 text-white text-[16px]'>Gdget</div>
                <div className='bg-sky-950 rounded-sm px-3 py-2 text-white text-[16px]'>Elektronik</div>
                <div className='bg-sky-950 rounded-sm px-3 py-2 text-white text-[16px]'>Olahraga</div>
                <div className='bg-sky-950 rounded-sm px-3 py-2 text-white text-[16px]'>Peliharaan</div>
            </div>
        </div>
        

    </div>
  )
}

export default HeroSection