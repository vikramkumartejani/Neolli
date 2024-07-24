import Image from 'next/image'
import React from 'react'

const Academy = () => {
  return (
    <div className='pt-[150px] pb-[80px] w-full'>
      <div className='bg-[#FFEDD8] relative py-[80px] px-4 md:px-[66px] w-full flex justify-between xl:items-start items-center xl:flex-row flex-col'>
        <div className=' absolute top-[-95px]'>
          <h2 className='text-[#AA7639] text-[60px] sm:text-[78px] leading-[91px] font-normal font-robotoSerif'>NEOLLI</h2>
          <h2 className='text-[#AA7639] sm:text-[78px] text-[60px] leading-[91px] font-normal font-robotoSerif'>ACADEMY</h2>
          <div className='flex items-center xl:ml-52'>
            <h3 className='text-[#0B479E] text-[20px] sm:text-[30px] leading-[35px] font-medium font-robotoSerif'>Supported by </h3>
            <Image src='/assets/visa.svg' alt='Visa' width={120} height={35} />
          </div>
        </div>

        <div className='flex items-start flex-col gap-10 sm:gap-[80px] ml-[60px] mt-20'>
          <p className='max-w-[485px] w-full text-[20px] sm:text-[28px] leading-[32px] text-[#7E5728] font-normal'>A learning hub dedicated to the empowerment and continuous improvement of artisans. The objective is to participate in the restoration of the artisan to the rank of economic actor</p>
          <button className='text-[#7E5728] text-[28px] leading-[32px] font-medium xl:mt-[100px] mt-[30px]'>VISIT NOW</button>
        </div>
        <div className='xl:mt-[-160px] mt-[40px] flex items-start sm:flex-row flex-col gap-10'>
          <Image src='/assets/academy1.svg' alt='image' width={358} height={537} />
          <div className='flex flex-col gap-8'>
            <Image src='/assets/academy2.svg' alt='image' width={328} height={252} />
            <Image src='/assets/academy3.svg' alt='image' width={223} height={179} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Academy