import React from 'react'
import ImGoingForIt from '../components/ImGoingForIt'
import Link from 'next/link'
import { FaQ } from 'react-icons/fa6'
import FAQ from '../components/FAQ'

const ApplyToSell = () => {
  return (
    <div className='my-8 text-center w-full'>
        <div className='mb-[70px] px-3 sm:px-8 md:px-[50px] lg:px-[66px] '>
            <div className='flex items-center gap-1'>
                <Link href='/' className='underline text-[#1E1E1E] font-poppins font-normal text-[13px] leading-[20px] tracking-[0.25px]'>Home</Link>
                <span className='text-[#1E1E1E] font-poppins font-normal text-[13px] leading-[20px] tracking-[0.25px]'>/</span>
                <p className='text-[#1E1E1E] font-poppins font-normal text-[13px] leading-[20px] tracking-[0.25px]'>Apply To Sell</p>
            </div>
            <div className='mt-3 flex items-center gap-3.5'>
                <h2 className='text-[#7E5728] text-[28px] sm:text-[37px] leading-[43.33px] font-robotoSerif font-light text-nowrap'>Apply To Sell</h2>
                <div className='w-full h-[1px] bg-[#CBA77C]'></div>
            </div>
        </div>

        <div className='bg-[#FFEDD8] w-full py-12 text-center px-3'>
            <h2 className='text-black text-[35px] sm:text-[51px] leading-[40px] sm:leading-[59px] font-bold max-w-[724px] mx-auto'>The success you’ve been  dreaming of is at <span className='text-[#7E5728]'>Neolli</span></h2>
            <p className='text-black text-[20px] sm:text-[27px] leading-[31.62px] font-normal mt-3.5'>We’re excited to help your business flourish!</p>

            <div className='mt-[35px] bg-white rounded-[19px] max-w-[1164px] mx-auto w-full p-12 px-3'>
                <h2 className='text-black text-[30px] sm:text-[43px] leading-[50.36px] font-semibold'>Apply to sell on Neolli</h2>
                <p className='text-[18px] sm:text-[23px] leading-[26px] font-normal mt-3'>Tell us about your brand in 2 minutes. We use this info to review your application.</p>

                <form className='mt-[35px] max-w-[914px] w-full mx-auto flex flex-col gap-6 sm:gap-12'>
                    {/* First & Last Name */}
                    <div className='flex items-center lg:flex-row flex-col justify-between w-full gap-6 sm:gap-12'>
                        <div className='flex items-start flex-col gap-4 w-full'>
                            <label className='text-[18px] leading-[21px] font-medium'>First name</label>
                            <input type='text' placeholder='First name' className='w-full lg:w-[400px] outline-none py-[18px] px-[26px] border border-[#EEEEEE] rounded-[30px] text-[#333333] leading-[21px] text-[14px] font-normal font-poppins'/>
                        </div>
                        <div className='flex items-start flex-col gap-4 w-full'>
                            <label className='text-[18px] leading-[21px] font-medium'>Last name</label>
                            <input type='text' placeholder='Last name' className='w-full lg:w-[400px] outline-none py-[18px] px-[26px] border border-[#EEEEEE] rounded-[30px] text-[#333333] leading-[21px] text-[14px] font-normal font-poppins'/>
                        </div>
                    </div>

                    {/* Email & Phone number */}
                    <div className='flex items-center lg:flex-row flex-col justify-between w-full gap-6 sm:gap-12'>
                        <div className='flex items-start flex-col gap-4 w-full'>
                            <label className='text-[18px] leading-[21px] font-medium'>E-mail</label>
                            <input type='text' placeholder='E-mail' className='w-full lg:w-[400px] outline-none py-[18px] px-[26px] border border-[#EEEEEE] rounded-[30px] text-[#333333] leading-[21px] text-[14px] font-normal font-poppins'/>
                        </div>
                        <div className='flex items-start flex-col gap-4 w-full'>
                            <label className='text-[18px] leading-[21px] font-medium'>Phone number</label>
                            <input type='text' placeholder='0121  234  5678' className='w-full lg:w-[400px] outline-none py-[18px] px-[26px] border border-[#EEEEEE] rounded-[30px] text-[#333333] leading-[21px] text-[14px] font-normal font-poppins'/>
                        </div>
                    </div>

                    {/* Address */}
                    <div className='flex items-start flex-col gap-4'>
                        <label className='text-[18px] leading-[21px] font-medium'>Address</label>
                        <input type='text' placeholder='Please select an address from the list' className='w-full outline-none py-[18px] px-[26px] border border-[#EEEEEE] rounded-[30px] text-[#333333] leading-[21px] text-[14px] font-normal font-poppins'/>
                    </div>
                    
                    {/* Line */}
                    <div className='w-full h-[0.2px] bg-[#3333332f]'></div>

                    {/* Brand Name & Website */}
                    <div className='flex items-center lg:flex-row flex-col w-full justify-between gap-6 sm:gap-12'>
                        <div className='flex items-start flex-col gap-4 w-full'>
                            <label className='text-[18px] leading-[21px] font-medium'>Brand name</label>
                            <input type='text' placeholder='Brand name' className='w-full lg:w-[400px] outline-none py-[18px] px-[26px] border border-[#EEEEEE] rounded-[30px] text-[#333333] leading-[21px] text-[14px] font-normal font-poppins'/>
                        </div>
                        <div className='flex items-start flex-col gap-4 w-full'>
                            <label className='text-[18px] leading-[21px] font-medium'>Website</label>
                            <input type='text' placeholder='URL' className='w-full lg:w-[400px] outline-none py-[18px] px-[26px] border border-[#EEEEEE] rounded-[30px] text-[#333333] leading-[21px] text-[14px] font-normal font-poppins'/>
                        </div>
                    </div>

                    {/* Currency & What is your primary category */}
                    <div className='flex items-center lg:flex-row flex-col justify-between w-full gap-6 sm:gap-12'>
                        <div className='flex items-start flex-col gap-4 w-full'>
                            <label className='text-[18px] leading-[21px] font-medium'>Currency</label>
                            <input type='text' placeholder='Select an option' className='w-full lg:w-[400px] outline-none py-[18px] px-[26px] border border-[#EEEEEE] rounded-[30px] text-[#333333] leading-[21px] text-[14px] font-normal font-poppins'/>
                        </div>

                        <div className='flex items-start flex-col gap-4 w-full'>
                            <label className='text-[18px] leading-[21px] font-medium'>What is your primary category?</label>
                            <input type='text' placeholder='Select an option' className='w-full lg:w-[400px] outline-none py-[18px] px-[26px] border border-[#EEEEEE] rounded-[30px] text-[#333333] leading-[21px] text-[14px] font-normal font-poppins'/>
                        </div>
                    </div>

                    {/* Apply */}
                    <div className='w-full flex items-center justify-center'>
                        <button className='text-[23px] leading-[34.5px] text-[#FFFFFF] font-poppins font-semibold bg-[#7E5728] w-[185px] py-[15px] px-[21.68px] rounded-[25px]'>Apply</button>
                    </div>
                </form>
            </div>
        </div>
        <ImGoingForIt/>
        <FAQ/>
    </div>
  )
}

export default ApplyToSell