import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaCopyright } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";




const Footer = () => {
  return (
    <>
        <div className='bg-white pt-10 w-full px-3'>
            <h2 className='text-black text-[25px] md:text-[37px] leading-[35px] md:leading-[43.44px] font-medium text-center'>Plus de 300 000 commerçants nous font confiance</h2>
            <div className='flex items-center justify-center gap-5 lg:gap-24 -mt-2'>
                <Image src='/assets/trustpilot.svg' alt='Trustpilot' width={289} height={72} className='w-[150px] sm:w-[289px]' />
                <Image src='/assets/google.svg' alt='Trustpilot' width={280} height={210} className='w-[150px] sm:w-[280px]' />
            </div>
        </div>

        <div className='w-full bg-[#AA7639]'>
            <div className='max-w-[1440px] mx-auto'>
                <div className='py-12 px-3 xlg:px-12 flex lg:items-center justify-between lg:flex-row flex-col gap-10 lg:gap-0'>
                    <div className='relative max-w-[400px] xlg:max-w-[500px] w-full'>
                        <Image src='/assets/logo.svg' alt='Logo' width={277} height={277} className='mt-[-70px] ml-[-32px]'/>
                        <p className='text-[26px] leading-[30px] tracking-[-0.06em] font-medium text-white max-w-[400px] xlg:max-w-[500px] absolute top-28'>Lécosystème qui permet aux marques et aux commerçants indépendants de prospérer.</p>
                    </div>
                    <div className='flex items-start text-white sm:flex-nowrap flex-wrap gap-14 sm:gap-8 xlg:gap-12 xl:gap-[78px]'>
                        <ul className='flex items-start gap-6 flex-col'>
                            <h3 className='text-[20px] leading-[23.42px] font-semibold font-robotoSerif'>SOCIÉTÉ</h3>
                            <li><Link href='/' className='text-[20px] leading-[23.42px] font-medium font-robotoSerif'>À propos</Link></li>
                            <li><Link href='/' className='text-[20px] leading-[23.42px] font-medium font-robotoSerif'>Nous rejoindre</Link></li>
                            <li><Link href='/' className='text-[20px] leading-[23.42px] font-medium font-robotoSerif'>Blog</Link></li>
                        </ul>
                        <ul className='flex items-start gap-6 flex-col'>
                            <h3 className='text-[20px] leading-[23.42px] font-semibold font-robotoSerif'>Programme</h3>
                            <li><Link href='/' className='text-[20px] leading-[23.42px] font-medium font-robotoSerif'>Handcraftstart</Link></li>
                            <li><Link href='/' className='text-[20px] leading-[23.42px] font-medium font-robotoSerif'>Handlogitics</Link></li>
                            <li><Link href='/' className='text-[20px] leading-[23.42px] font-medium font-robotoSerif'>Handcrafts API</Link></li>
                        </ul>
                        <ul className='flex items-start gap-6 flex-col'>
                            <h3 className='text-[20px] leading-[23.42px] font-semibold font-robotoSerif'>Assistance</h3>
                            <li><Link href='/' className='text-[20px] leading-[23.42px] font-medium font-robotoSerif'>Contactez-nous</Link></li>
                        </ul>
                    </div>
                </div>

                <div className='px-3 xlg:px-12 flex items-center lg:flex-row flex-col justify-center gap-10 lg:gap-0 lg:justify-between pt-[26px] pb-[45px] border-t-[0.7px] border-white'>
                    <Image src='/assets/atm-cards.svg' alt='ATM' width={582} height={48}  />
                    <div>
                        <h2 className='text-[30px] sm:text-[42px] leading-[49.2px] tracking-[-0.06em] text-white'>Lets be the change</h2>
                        <div className='border-b border-[#FFFFFF] py-3 max-w-[390px] w-[300px] sm:w-[390px] flex items-center justify-between gap-5'>
                            <input type='text' placeholder='Join our newsletter' className='text-[13px] leading-[15.24px] font-normal tracking-[-0.06em] text-white placeholder:text-[#DCDCDC] bg-transparent outline-none w-full' />
                            <button><FaArrowRight className='text-white' /></button>
                        </div>
                    </div>
                </div>

                <div className='flex items-center justify-between sm:flex-row flex-col gap-5 sm:gap-2 px-4 xlg:px-7 pt-5 pb-4 border-t-[0.7px] border-[#ffffffcc] '>
                    <div className='flex items-center gap-1 text-white'>
                        <FaCopyright />
                        <h3 className='text-base tracking-[0.05em] font-normal font-jost'>2024 Neolli. All rights reserved.</h3>
                    </div>
                    <div className='flex items-center gap-5'>
                        <Link href='/' target='_blank'><Image src='/assets/facebook.svg' alt='Facebook' width={16} height={16} /></Link>
                        <Link href='/' target='_blank'><Image src='/assets/twitter.svg' alt='Twitter' width={16} height={16} /></Link>
                        <Link href='/' target='_blank'><Image src='/assets/tiktok.svg' alt='Tiktok' width={16} height={16} /></Link>
                        <Link href='/' target='_blank'><Image src='/assets/pinterest.svg' alt='Pinterest' width={16} height={16} /></Link>
                        <Link href='/' target='_blank'><Image src='/assets/skype.svg' alt='Skype' width={16} height={16} /></Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer