import Image from 'next/image'
import React from 'react'

const OurArtisans = () => {
  return (
    <div className='w-full max-w-[1440px] mx-auto text-center py-24 px-3 sm:px-7'>
      <h2 className='text-[#AA7639] text-[35px] sm:text-[51px] leading-[59.72px] font-bold'>Our Artisans</h2>
      <div className='mt-[50px] sm:mt-[100px] flex items-center justify-center flex-wrap gap-5 sm:gap-8 md:gap-[54px]'>
        <div className='bg-[#FFEDD8] rounded-[18px]  w-[160px] sm:w-[204px] h-fit sm:h-[318px]'>
          <Image src='/assets/our-artisans1.svg' alt='Our Artisans' width={204} height={248} />
           <h2 className='text-[#7E5728] text-[19px] leading-[22.25px] font-medium my-[18px] sm:mt-[18px] text-center'>Lorem ipsum</h2>
        </div>
        <div className='bg-[#FFEDD8] rounded-[18px] w-[160px] sm:w-[204px] h-fit sm:h-[318px]'>
          <Image src='/assets/our-artisans2.svg' alt='Our Artisans' width={204} height={248} />
           <h2 className='text-[#7E5728] text-[19px] leading-[22.25px] font-medium my-[18px] sm:mt-[18px] text-center'>Lorem ipsum</h2>
        </div>
        <div className='bg-[#FFEDD8] rounded-[18px]  w-[160px] sm:w-[204px] h-fit sm:h-[318px]'>
          <Image src='/assets/our-artisans3.svg' alt='Our Artisans' width={204} height={248} />
           <h2 className='text-[#7E5728] text-[19px] leading-[22.25px] font-medium my-[18px] sm:mt-[18px] text-center'>Lorem ipsum</h2>
        </div>
        <div className='bg-[#FFEDD8] rounded-[18px]  w-[160px] sm:w-[204px] h-fit sm:h-[318px]'>
          <Image src='/assets/our-artisans4.svg' alt='Our Artisans' width={204} height={248} />
           <h2 className='text-[#7E5728] text-[19px] leading-[22.25px] font-medium my-[18px] sm:mt-[18px] text-center'>Lorem ipsum</h2>
        </div>
        <div className='bg-[#FFEDD8] rounded-[18px]  w-[160px] sm:w-[204px] h-fit sm:h-[318px]'>
          <Image src='/assets/our-artisans5.svg' alt='Our Artisans' width={204} height={248} />
           <h2 className='text-[#7E5728] text-[19px] leading-[22.25px] font-medium my-[18px] sm:mt-[18px] text-center'>Lorem ipsum</h2>
        </div>
      </div>
    </div>
  )
}

export default OurArtisans