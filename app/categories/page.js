import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Footer from '../components/Footer'
import Topbar from '../components/Topbar'
import Navbar from '../components/Navbar'

const Categories = () => {
    return (
        <>
            <Topbar />
            <Navbar />
            <div className='my-8 mb-[100px] text-center w-full px-3'>
                <div className='mb-[70px] w-full mx-auto max-w-[1250px]'>
                    <div className='flex items-center gap-1'>
                        <Link href='/' className='underline text-[#1E1E1E] font-poppins font-normal text-[13px] leading-[20px] tracking-[0.25px]'>Home</Link>
                        <span className='text-[#1E1E1E] font-poppins font-normal text-[13px] leading-[20px] tracking-[0.25px]'>/</span>
                        <p className='text-[#1E1E1E] font-poppins font-normal text-[13px] leading-[20px] tracking-[0.25px]'>Categories</p>
                    </div>
                    <div className='mt-3 flex items-center gap-3.5'>
                        <h2 className='text-[#7E5728] text-[28px] sm:text-[37px] leading-[43.33px] font-robotoSerif font-light text-nowrap'>Categories</h2>
                        <div className='w-full h-[1px] bg-[#CBA77C]'></div>
                    </div>
                </div>

                <div className='w-full max-w-[1250px] mx-auto'>
                    <div className='flex items-center lg:flex-nowrap justify-center flex-wrap gap-[42px]'>

                        <div className='w-[577px] flex flex-col gap-[50px]'>
                            <div className='bg-[#FFDFB9] flex items-center justify-between w-full'>
                                <div className='mx-[20px] sm:ml-[48px] text-left'>
                                    <h3 className='text-[#2F5177] text-[16px] leading-[27px] tracking-[0.07em] font-light'>MOST WANTED</h3>
                                    <p className='text-[#405563] text-[28px] leading-[37px] tracking-[0.07em] max-w-[193px] font-bold'>The Allure Of Gold</p>
                                </div>
                                <Image src='/assets/categories1.svg' alt='categories' width={315} height={275} className='h-[275px] object-cover overflow-hidden' />
                            </div>

                            <div className='bg-[#EFD0C1] flex justify-between items-center w-full'>
                                <Image src='/assets/categories2.svg' alt='categories' width={262} height={275} className='h-[275px] object-cover overflow-hidden' />
                                <div className='max-w-[201px] text-left mx-[20px] sm:mr-[48px]'>
                                    <h3 className='text-[#C08E82] text-[16px] tracking-[0.07em] font-light'>BRAND NEW</h3>
                                    <p className='text-[#C08E82] text-[32px] tracking-[0.07em] font-bold'>Cozy Winter</p>
                                </div>
                            </div>
                        </div>

                        <div className='relative'>
                            <Image src='/assets/categories3.svg' alt='categories' width={629} height={600} className='relative object-cover h-[600px]' />
                            <div className='absolute inset-0 flex flex-col items-center justify-end mb-[100px]'>
                                <h3 className='text-[32px] tracking-[0.07em] font-bold text-white'>Ecofriendly</h3>
                                <p className='text-white text-[16px] font-light tracking-[0.07em] '>Shop Now</p>
                            </div>
                        </div>
                    </div>


                    <div className='mt-[38px] flex lg:justify-between justify-center lg:flex-nowrap flex-wrap items-center gap-5 xl:gap-10 w-full'>
                        <div className='bg-[#F3F5F8] w-full sm:max-w-[259px] h-[340px] flex items-center flex-col justify-between'>
                            <p className='text-[#6F4C37] text-[24px] leading-[41px] tracking-[0.04em] font-semibold max-w-[180px] mt-10'>Will+Bear Andy cream hat</p>
                            <Image src='/assets/categories4.svg' alt='categories' width={259} height={340} />
                        </div>

                        <div className='sm:max-w-[259px] w-full h-[340px] lg:hidden flex items-center flex-col justify-between relative'>
                            <Image src='/assets/categories6.svg' alt='categories' width={259} height={340} className='relative' />
                            <p className='text-[#847E7E] text-[16px] leading-[27px] tracking-[0.07em] font-light top-12 absolute inset-0'>TRANSPARENT GLASSES</p>
                        </div>

                        <div className='bg-[#C1E4DEB5] flex items-center justify-between w-full max-w-[634px]'>
                            <div className='mx-[20px] sm:mx-[48px] w-full text-left'>
                                <h3 className='text-[#867A75] text-[32px] leading-[39px] font-semibold'>Colorful <br /> Twist</h3>
                                <p className='text-[#A94711BA] text-[16px] leading-[19px] font-light mt-4'>JUST 39.99$</p>
                            </div>
                            <Image src='/assets/categories5.svg' alt='categories' width={315} height={340} className='max-w-[315px] w-full h-[340px] object-cover overflow-hidden' />
                        </div>

                        <div className='max-w-[259px] w-full h-[340px] lg:flex hidden items-center flex-col justify-between relative'>
                            <Image src='/assets/categories6.svg' alt='categories' width={259} height={340} className='relative' />
                            <p className='text-[#847E7E] text-[16px] leading-[27px] tracking-[0.07em] font-light top-12 absolute inset-0'>TRANSPARENT GLASSES</p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Categories