import React from 'react'
import FAQ from '../components/FAQ'
import ImGoingForIt from '../components/ImGoingForIt'
import Link from 'next/link'
import Image from 'next/image'

const AboutUs = () => {
    return (
        <div className='w-full my-8'>
            <div className='mb-[70px] px-3 sm:px-8 md:px-[50px] lg:px-[66px]'>
                <div className='flex items-center gap-1'>
                    <Link href='/' className='underline text-[#1E1E1E] font-poppins font-normal text-[13px] leading-[20px] tracking-[0.25px]'>Home</Link>
                    <span className='text-[#1E1E1E] font-poppins font-normal text-[13px] leading-[20px] tracking-[0.25px]'>/</span>
                    <p className='text-[#1E1E1E] font-poppins font-normal text-[13px] leading-[20px] tracking-[0.25px]'>About Us</p>
                </div>
                <div className='mt-3 flex items-center gap-3.5'>
                    <h2 className='text-[#7E5728] text-[28px] sm:text-[37px] leading-[43.33px] font-robotoSerif font-light text-nowrap'>About Us</h2>
                    <div className='w-full h-[1px] bg-[#CBA77C]'></div>
                </div>
            </div>

            <div className='bg-[#FFEDD8] w-full py-12 pb-24'>
                <div className='px-3 md:px-12 w-full'>
                    <p className='max-w-[1189px] mx-auto text-center text-[#7E5728] text-[20px] sm:text-[28px] leading-[32px] font-medium'>We are <span className='font-extrabold'>NEOLLI</span>. We believe the future of wholesale is small-batch and responsibly made. We enable independent, diverse makers and brands by providing access to markets, financing, and digital tools. We make it easy for buyers to source differently.</p>

                    <div className='mt-[60px] w-full flex items-center justify-center flex-col gap-[50px] sm:gap-[100px] max-w-[1290px] mx-auto'>
                        <div className='flex items-center xl:items-start xl:flex-row flex-col justify-center xl:justify-between sm:gap-12 w-full'>
                            <Image src='/assets/about1.svg' alt='About Image' width={598} height={613} />
                            <div className='max-w-[637px] mx-auto w-full text-center mt-8'>
                                <h2 className='text-[#7E5728] text-[28px] sm:text-[46px] leading-[30px] sm:leading-[53px] font-bold'>Small Batch. Big Impact.</h2>
                                <p className='text-[#7E5728] text-[20px] sm:text-[35px] leading-[28px] sm:leading-[40px] font-light mt-[36px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proiden</p>
                            </div>
                        </div>
                        <div className='flex xl:items-start items-center xl:flex-row flex-col-reverse justify-between sm:gap-12 w-full'>
                            <div className='max-w-[637px] mx-auto w-full text-center mt-8'>
                                <h2 className='text-[#7E5728] text-[28px] sm:text-[46px] leading-[30px] sm:leading-[53px] font-bold'>Small Batch. Big Impact.</h2>
                                <p className='text-[#7E5728] text-[20px] sm:text-[35px] leading-[28px] sm:leading-[40px] font-light mt-[36px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proiden</p>
                            </div>
                            <Image src='/assets/about2.svg' alt='About Image' width={598} height={613} />
                        </div>
                        <div className='flex items-center xl:items-start xl:flex-row flex-col justify-center xl:justify-between sm:gap-12 w-full'>
                            <Image src='/assets/about3.svg' alt='About Image' width={598} height={613} />
                            <div className='max-w-[637px] mx-auto w-full text-center mt-8'>
                                <h2 className='text-[#7E5728] text-[28px] sm:text-[46px] leading-[30px] sm:leading-[53px] font-bold'>Small Batch. Big Impact.</h2>
                                <p className='text-[#7E5728] text-[20px] sm:text-[35px] leading-[28px] sm:leading-[40px] font-light mt-[36px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proiden</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ImGoingForIt />
            <FAQ />
        </div>
    )
}

export default AboutUs