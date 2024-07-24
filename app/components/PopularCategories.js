import Image from 'next/image'
import React from 'react'

const PopularCategories = () => {
  return (
    <div className='bg-[#FFEDD8] w-full text-center pt-[33px] pb-[80px]'>
      <h2 className='text-[#AA7639] text-[35px] md:text-[51px] leading-[59px] font-bold mb-2'>Popular Categories</h2>
      <p className='text-[#AA7639] text-[18px] sm:text-[22px] leading-[25px] font-normal px-2'>A large selection of univers and styles with a Moroccan signature</p>

      <div className='mt-[50px] flex items-center lg:flex-row flex-col justify-center gap-10 px-3 md:px-12'>

        <div className='relative'>
          <Image src='/assets/popular-categories1.svg' alt='popular-categories' width={554} height={341} className='sm:w-[554px] w-full relative' />
          <div className='absolute inset-0 flex flex-col items-center justify-center z-50'>
            <h2 className='text-[30px] sm:text-[43px] font-bold leading-[51px] text-white mb-3'>The Allure of Gold</h2>
            <button className='text-[18.77px] leading-[22px] font-medium w-[117px] h-[41px] border-4 border-white text-white'>Shop Now</button>
          </div>
        </div>

        <div className='relative'>
          <Image src='/assets/popular-categories2.svg' alt='popular-categories' width={318} height={341} className='max-w-[318px] w-full relative' />
          <div className='absolute inset-0 flex flex-col items-center justify-center z-50'>
            <h2 className='text-[25px] sm:text-[34px] font-bold leading-[39px] text-white mb-3'>Calorful Twist</h2>
            <button className='text-[18.77px] leading-[22px] font-medium w-[117px] h-[41px] border-4 border-white text-white'>Shop Now</button>
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <div className='relative'>
            <Image src='/assets/popular-categories3.svg' alt='popular-categories' width={367} height={157} className='max-w-[367px] min-h-[157] w-full relative' />
            <div className='absolute inset-0 flex flex-col items-center justify-center z-50'>
              <h2 className='sm:text-[31px] text-[25px] font-bold leading-[36px] text-white mb-3'>Cozy Winter</h2>
              <button className='text-[18.77px] leading-[22px] font-medium w-[117px] h-[41px] border-4 border-white text-white'>Shop Now</button>
            </div>
          </div>
          <div className='relative'>
            <Image src='/assets/popular-categories4.svg' alt='popular-categories' width={367} height={157} className='max-w-[367px] min-h-[157px] w-full relative' />
            <div className='absolute inset-0 flex flex-col items-center justify-center z-50'>
              <h2 className='sm:text-[31px] text-[25px] font-bold leading-[36px] text-white mb-3'>Ecofriendly</h2>
              <button className='text-[18.77px] leading-[22px] font-medium w-[117px] h-[41px] border-4 border-white text-white'>Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopularCategories