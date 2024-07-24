import Image from 'next/image'
import React from 'react'

const WhatIsNeolli = () => {
  return (
    <div className='w-full max-w-[1440px] mx-auto py-[100px] px-3 sm:px-7'>
        <h2 className='text-[#7E5728] text-[34px] sm:text-[47px] leading-[55.04px] font-medium text-center'>What is Neolli ?</h2>

        <div className='grid lg:grid-cols-4 grid-cols-2 items-start gap-6 mt-14'>
            <div className='flex items-center justify-center flex-col gap-3 max-w-[318px] text-center'>
                <Image src='/assets/pottery.svg' alt='Pottery' width={70} height={70}/>
                <p className='text-[#AA7639] text-sm sm:text-[17px] leading-[19.91px] font-normal'>Quality control and repackaging of all products in our warehouses to ensure customer satisfaction</p>
            </div>
            <div className='flex items-center justify-center flex-col gap-3 max-w-[318px] text-center'>
                <Image src='/assets/vase.svg' alt='Vase' width={70} height={70}/>
                <p className='text-[#AA7639] text-sm sm:text-[17px] leading-[19.91px] font-normal'>Shipping solutions adapted to your needs and budgets</p>
            </div>
            <div className='flex items-center justify-center flex-col gap-3 max-w-[318px] text-center'>
                <Image src='/assets/shipped.svg' alt='Shipped' width={70} height={70}/>
                <p className='text-[#AA7639] text-sm sm:text-[17px] leading-[19.91px] font-normal'>customer advice and after-sales service</p>
            </div>
            <div className='flex items-center justify-center flex-col gap-3 max-w-[318px] text-center'>
                <Image src='/assets/support.svg' alt='Support' width={70} height={70}/>
                <p className='text-[#AA7639] text-sm sm:text-[17px] leading-[19.91px] font-normal'>verified community of artisans and cooperatives</p>
            </div>
        </div>
    </div>
  )
}

export default WhatIsNeolli