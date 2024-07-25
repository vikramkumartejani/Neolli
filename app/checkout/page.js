'use client'
import Image from 'next/image';
import React, { useState } from 'react'
import { CgRadioChecked } from "react-icons/cg";
import { ImRadioChecked } from "react-icons/im";
import { RiCheckboxBlankCircleFill, RiCheckboxCircleFill } from 'react-icons/ri';




const CheckOut = () => {
    const [selectedOption, setSelectedOption] = useState('Bitcoin');

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };
    return (
        <div className='w-full my-8'>
            <div className='max-w-[1276px] w-full mx-auto flex items-center gap-5 sm:gap-10 px-3'>
                <h2 className='text-[#7E5728] text-[37px] leading-[43.33px] font-light font-robotoSerif text-nowrap'>Checkout</h2>
                <div className='w-full h-[1px] bg-[#7E5728]'></div>
            </div>
            <div className='bg-[#FFEDD8] w-full py-[100px] px-2 sm:px-3 mt-[34px]'>
                <div className='max-w-[1276px] w-full mx-auto bg-white rounded-xl sm:rounded-[19px] py-14 px-3 sm:px-5 xl:px-[102px]'>
                    {/* Shipping Address & Place Order */}
                    <div className='flex xlg:items-start xlg:flex-row flex-col items-center justify-center gap-5'>
                        {/* Shipping Address */}
                        <div className='w-full xlg:max-w-[588px]'>
                            <h2 className='text-[#000000] text-[20.14px] leading-[30.21px] font-normal font-poppins mb-5'>Shipping Address</h2>
                            <div className='border-2 border-[#7E5728] rounded-[6.44px] px-3.5 sm:px-[36px] py-[26px]'>
                                <div className='flex items-center gap-3.5'>
                                    <CgRadioChecked className='text-[32px] text-[#AA7639]' />
                                    <h3 className='text-[#000000] text-[20.14px] leading-[30px] font-light font-poppins'> Add New Address</h3>
                                </div>

                                {/* Form */}
                                <form className='flex flex-col gap-5'>
                                    {/* First & Last Name */}
                                    <div className='mt-5 flex sm:flex-row flex-col items-center gap-[28px]'>
                                        <div className='flex flex-col gap-0.5 w-full'>
                                            <label className='text-[#000000] text-[14.5px] leading-[21.27px] font-light font-poppins'>First Name</label>
                                            <input type='text' className='border border-[#C8C8C8] rounded-md h-[50px] xlg:max-w-[244px] max-w-full w-full outline-none text-[18px] font-poppins font-light px-4' />
                                        </div>
                                        <div className='flex flex-col gap-0.5 w-full'>
                                            <label className='text-[#000000] text-[14.5px] leading-[21.27px] font-light font-poppins'>First Name</label>
                                            <input type='text' className='border border-[#C8C8C8] rounded-md h-[50px] xlg:max-w-[244px] max-w-full w-full outline-none text-[18px] font-poppins font-light px-4' />
                                        </div>
                                    </div>

                                    {/* Street Address */}
                                    <div className='flex flex-col gap-0.5'>
                                        <label className='text-[#000000] text-[14.5px] leading-[21.27px] font-light font-poppins'>Street Address</label>
                                        <input type='text' className='border border-[#C8C8C8] rounded-md h-[50px] max-w-full w-full outline-none text-[18px] font-poppins font-light px-4' />
                                    </div>

                                    {/* Apt Number & State & Zip */}
                                    <div className='flex items-center sm:flex-row flex-col gap-3 w-full'>
                                        <div className='flex flex-col gap-0.5 w-full'>
                                            <label className='text-[#000000] text-[14.5px] leading-[21.27px] font-light font-poppins'>Apt Number</label>
                                            <input type='text' className='border border-[#C8C8C8] rounded-md h-[50px] xlg:max-w-[163px] w-full outline-none text-[18px] font-poppins font-light px-4' />
                                        </div>
                                        <div className='flex flex-col gap-0.5 w-full'>
                                            <label className='text-[#000000] text-[14.5px] leading-[21.27px] font-light font-poppins'>State</label>
                                            <input type='text' className='border border-[#C8C8C8] rounded-md h-[50px] xlg:max-w-[163px] w-full outline-none text-[18px] font-poppins font-light px-4' />
                                        </div>
                                        <div className='flex flex-col gap-0.5 w-full'>
                                            <label className='text-[#000000] text-[14.5px] leading-[21.27px] font-light font-poppins'>Zip</label>
                                            <input type='text' className='border border-[#C8C8C8] rounded-md h-[50px] xlg:max-w-[163px] w-full outline-none text-[18px] font-poppins font-light px-4' />
                                        </div>
                                    </div>

                                    {/* Cancel & Save This Address Buttons */}
                                    <div className='flex items-center gap-3 justify-between mb-[40px]'>
                                        <button className='w-[163px] h-[50px] rounded-md border-[0.4px] border-black text-[#000000] text-[15px] sm:text-[17.73px] leading-[26.58px] font-normal font-poppins'>cancel</button>
                                        <button className='bg-[#7E5728] w-[340px] h-[50px] rounded-md border-[0.4px] border-black text-white text-[15px] sm:text-[17.73px] leading-[26.58px] font-normal font-poppins'>Save this Address</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Place Order */}
                        <div className='bg-[#F0F0F0] shadow-custom-shadow rounded-xl px-3 sm:px-7 py-12 xlg:max-w-[460px] w-full'>
                            <button className='bg-[#7E5728] xlg:w-[400px] w-full h-[50px] rounded-md text-white text-[17px] leading-[26px] font-poppins font-normal'>Place Order</button>
                            <p className='text-[#575757] text-[14.5px] leading-[21px] font-poppins font-light xlg:max-w-[385px] w-full my-4'>By placing your order, you agree to our company <span className='text-black'>Privacy policy</span> and <span className='text-black'>Conditions of use.</span></p>
                            <h3 className='text-[#000000] text-[20px] leading-[30px] font-poppins font-light py-7'>Order Summary</h3>
                            <div className='w-full flex flex-col gap-2.5 mb-14'>
                                <div className='flex items-center justify-between'>
                                    <h4 className='text-[#575757] text-[14.5px] leading-[21.75px] font-light font-poppins'>Items (3)</h4>
                                    <p className='text-[#575757] text-[14.5px] leading-[21.75px] font-light font-poppins'>56.73</p>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <h4 className='text-[#575757] text-[14.5px] leading-[21.75px] font-light font-poppins'>Shipping and handling:</h4>
                                    <p className='text-[#575757] text-[14.5px] leading-[21.75px] font-light font-poppins'>5.50</p>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <h4 className='text-[#575757] text-[14.5px] leading-[21.75px] font-light font-poppins'>Before tax:</h4>
                                    <p className='text-[#575757] text-[14.5px] leading-[21.75px] font-light font-poppins'>62.23</p>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <h4 className='text-[#575757] text-[14.5px] leading-[21.75px] font-light font-poppins'>Tax Collected:</h4>
                                    <p className='text-[#575757] text-[14.5px] leading-[21.75px] font-light font-poppins'>8.21</p>
                                </div>
                            </div>
                            <div className='w-full h-[1px] bg-[#B0B0B0]'></div>
                            <div className='flex items-center justify-between gap-3 mt-4'>
                                <h3 className='text-[#000000] text-[20.14px] leading-[30.21px] font-light font-poppins'>Order Total:</h3>
                                <p className='text-[#000000] text-[20.14px] leading-[30.21px] font-light font-poppins'>70.44</p>
                            </div>
                        </div>
                    </div>

                    {/* Payment Method */}
                    <div className='mt-12 flex lg:items-start items-center lg:flex-row flex-col justify-center gap-5'>
                        {/* Payment Method */}
                        <div className='w-full max-w-full lg:max-w-[588px]'>
                            <h2 className='text-[#000000] text-[20.14px] leading-[30.21px] font-normal font-poppins mb-5'>Payment Method</h2>
                            <div className='border-2 border-[#7E5728] rounded-[6.44px] px-3 sm:px-[36px] py-[26px]'>
                                <div className='flex items-center gap-3.5'>
                                    <CgRadioChecked className='text-[32px] text-[#AA7639]' />
                                    <h3 className='text-[#000000] text-[20.14px] leading-[30px] font-light font-poppins'>Credit or Debit card</h3>
                                </div>

                                {/* Form */}
                                <form className='mt-10 flex flex-col gap-5'>

                                    <div className='flex items-center justify-between gap-2 border border-[#C8C8C8] rounded-md h-[50px] px-2.5'>
                                        <input type='text' placeholder="•••• •••• •••• 3458" className='text-[#000000] w-[70%] text-[14.5px] placeholder:text-black placeholder:text-[18px] outline-none leading-[21px] font-poppins font-light h-[40px]' />
                                        <Image src='/assets/visa-logo.svg' alt='Visa' width={49} height={33} className='sm:w-[49px] w-[35px]' />
                                    </div>

                                    <div className='flex flex-col gap-3.5'>
                                        <div className='flex  items-center gap-1.5 sm:gap-3'>
                                            <input type='text' placeholder='04 / 03' className='border border-[#C8C8C8] placeholder:text-[#000000] rounded-md h-[50px] lg:max-w-[163px] w-full outline-none text-[18px] font-poppins font-light px-2 sm:px-4' />
                                            <input type='text' placeholder='•••' className='border border-[#C8C8C8] placeholder:text-[#000000] rounded-md h-[50px] lg:max-w-[163px] w-full outline-none text-[18px] font-poppins font-light px-2 sm:px-4' />
                                            <input type='text' placeholder='58295' className='border border-[#C8C8C8] placeholder:text-[#000000] rounded-md h-[50px] lg:max-w-[163px] w-full outline-none text-[18px] font-poppins font-light px-2 sm:px-4' />
                                        </div>

                                        <div className='flex flex-col mb-3'>
                                            <div className='flex items-center gap-2'>
                                                <div class="content">
                                                    <label class="checkBoxWrapper">
                                                        <input id="ch1" type="checkbox" />
                                                        <span class="checkBox">
                                                            <div class="transition"></div>
                                                        </span>
                                                    </label>
                                                </div>
                                                <p className='text-[#000000] text-[14.5px] leading-[21.76px] font-light font-poppins'>Save this credit card for later use</p>
                                            </div>

                                            <div className='flex items-center gap-2'>
                                                <div class="content">
                                                    <label class="checkBoxWrapper">
                                                        <input id="ch1" type="checkbox" />
                                                        <span class="checkBox">
                                                            <div class="transition"></div>
                                                        </span>
                                                    </label>
                                                </div>
                                                <p className='text-[#000000] text-[14.5px] leading-[21.76px] font-light font-poppins'>Billing address same as shipping address</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Street Address */}
                                    <div className='flex flex-col gap-0.5'>
                                        <label className='text-[#000000] text-[14.5px] leading-[21.27px] font-light font-poppins'>Street Address</label>
                                        <input type='text' className='border border-[#C8C8C8] rounded-md h-[50px] max-w-full w-full outline-none text-[18px] font-poppins font-light px-4' />
                                    </div>

                                    {/* Apt Number & State & Zip */}
                                    <div className='flex items-center sm:flex-row flex-col gap-3 sm:gap-3 w-full'>
                                        <div className='flex flex-col gap-0.5 w-full'>
                                            <label className='text-[#000000] text-[14.5px] leading-[21.27px] font-light font-poppins'>Apt Number</label>
                                            <input type='text' className='border border-[#C8C8C8] rounded-md h-[50px] lg:max-w-[163px] w-full outline-none text-[18px] font-poppins font-light px-4' />
                                        </div>
                                        <div className='flex flex-col gap-0.5 w-full'>
                                            <label className='text-[#000000] text-[14.5px] leading-[21.27px] font-light font-poppins'>State</label>
                                            <input type='text' className='border border-[#C8C8C8] rounded-md h-[50px] lg:max-w-[163px] w-full outline-none text-[18px] font-poppins font-light px-4' />
                                        </div>
                                        <div className='flex flex-col gap-0.5 w-full'>
                                            <label className='text-[#000000] text-[14.5px] leading-[21.27px] font-light font-poppins'>Zip</label>
                                            <input type='text' className='border border-[#C8C8C8] rounded-md h-[50px] lg:max-w-[163px] w-full outline-none text-[18px] font-poppins font-light px-4' />
                                        </div>
                                    </div>

                                    {/* Cancel & Save This Address Buttons */}
                                    <div className='flex items-center gap-3 justify-between mb-[40px]'>
                                        <button className='w-[163px] h-[50px] rounded-md border-[0.4px] border-black text-[#000000] text-[17.73px] leading-[26.58px] font-normal font-poppins'>cancel</button>
                                        <button className='bg-[#7E5728] w-[340px] h-[50px] rounded-md border-[0.4px] border-black text-white text-[17.73px] leading-[26.58px] font-normal font-poppins'>Save this Address</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Bitcoin & Google & Paypal */}
                        <div className='w-full mt-12 flex flex-col gap-[25px]'>
                            <div onClick={() => handleOptionChange('Bitcoin')} className='shadow-custom-shadow1 bg-white rounded-lg h-[67px] w-full flex items-center justify-between px-3 sm:px-5 md:px-10'>
                                <div className='flex items-center gap-4'>
                                    <div className='flex items-center'>
                                        {selectedOption === 'Bitcoin' ? (
                                            <RiCheckboxCircleFill className='text-[27px] text-[#7E5728] shadow-custom-shadow2 rounded-full' />
                                        ) : (
                                            <RiCheckboxBlankCircleFill className='text-[27px] text-white shadow-custom-shadow2 rounded-full' />
                                        )}
                                    </div>
                                    <h2 className='text-[#000000] text-[15.44px] leading-[23px] font-poppins font-light'>Bitcoin</h2>
                                </div>
                                <Image src='/assets/bitcoin.svg' alt='Logo' width={43} height={28} />
                            </div>
                            <div onClick={() => handleOptionChange('GooglePay')} className='shadow-custom-shadow1 bg-white rounded-lg h-[67px] w-full flex items-center justify-between px-3 sm:px-5 md:px-10'>
                                <div className='flex items-center gap-4'>
                                    <div className='flex items-center'>
                                        {selectedOption === 'GooglePay' ? (
                                            <RiCheckboxCircleFill className='text-[27px] text-[#7E5728] shadow-custom-shadow2 rounded-full' />
                                        ) : (
                                            <RiCheckboxBlankCircleFill className='text-[27px] text-white shadow-custom-shadow2 rounded-full' />
                                        )}
                                    </div>
                                    <h2 className='text-[#000000] text-[15.44px] leading-[23px] font-poppins font-light'>Google Pay</h2>
                                </div>
                                <Image src='/assets/google-pay.svg' alt='Logo' width={43} height={28} />
                            </div>
                            <div onClick={() => handleOptionChange('Paypal')} className='shadow-custom-shadow1 bg-white rounded-lg h-[67px] w-full flex items-center justify-between px-3 sm:px-5 md:px-10'>
                                <div className='flex items-center gap-4'>
                                    <div className='flex items-center'>
                                        {selectedOption === 'Paypal' ? (
                                            <RiCheckboxCircleFill className='text-[27px] text-[#7E5728] shadow-custom-shadow2 rounded-full' />
                                        ) : (
                                            <RiCheckboxBlankCircleFill className='text-[27px] text-white shadow-custom-shadow2 rounded-full' />
                                        )}
                                    </div>
                                    <h2 className='text-[#000000] text-[15.44px] leading-[23px] font-poppins font-light'>Paypal</h2>
                                </div>
                                <Image src='/assets/paypal.svg' alt='Logo' width={43} height={28} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckOut