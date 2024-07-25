"use client"
import Image from 'next/image'
import Link from 'next/link'
import { RiMenuFill } from "react-icons/ri";
import React, { useState, useRef, useEffect } from 'react'
import { AiOutlineClose } from 'react-icons/ai';


const Navbar = () => {

    // Underline
     const [activeLink, setActiveLink] = useState('/');

     const handleLinkClick = (path) => {
         setActiveLink(path);
     };
 
     const getLinkClass = (path) => {
         return `text-[#AA7639] text-[20px] leading-[23.42px] font-light font-robotoSerif ${activeLink === path ? 'underline underline-offset-4' : ''}`;
     };



    //  Mobile Menu
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const registerModalRef = useRef(null);
    const loginModalRef = useRef(null);

    const openRegisterModal = () => setIsModalOpen(true);
    const openLoginModal = () => setIsLoginOpen(true);
    const closeRegisterModal = () => setIsModalOpen(false);
    const closeLoginModal = () => setIsLoginOpen(false);

    // Handle clicks outside of the modals
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (registerModalRef.current && !registerModalRef.current.contains(event.target)) {
                closeRegisterModal();
            }
            if (loginModalRef.current && !loginModalRef.current.contains(event.target)) {
                closeLoginModal();
            }
        };

        if (isModalOpen || isLoginOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isModalOpen, isLoginOpen]);

    return (
        <>
            <div className='w-full flex items-center justify-between flex-col pt-2 relative z-40'>
                <div className='flex items-center justify-between w-full max-w-[1440px] mx-auto px-3 sm:px-7'>
                    <div>
                        <Image src='/assets/nav-logo.png' alt='Logo' width={150} height={50} />
                    </div>
                    <div className='lg:flex hidden items-center gap-6'>
                        <div className='mr-[20px] flex items-center px-3 py-2 w-[300px] xl:w-[654px] justify-between border border-[#7E5728] bg-white rounded-[16px]'>
                            <div className='flex items-center gap-1.5'>
                                <Image src='/assets/search-icon.svg' alt='icon' width={19} height={19} />
                                <input type='text' placeholder='Search' className=' w-[200px] xl:w-[500px] bg-transparent outline-none text-[#7E5728] placeholder:text-[#7E5728] text-[13.31px] leading-[15.6px] font-extralight' />
                            </div>
                            <Image src='/assets/chevron-down.svg' alt='icon' width={19} height={19} />
                        </div>
                        <button onClick={openLoginModal} className='text-[#7E5728] text-[16.63px] font-normal underline underline-offset-4'>Log in</button>
                        <button onClick={openRegisterModal} className='border-[0.76px] border-[#BA8950] w-[113px] h-[30px] rounded-[37px] text-[16.63] text-[#BA8950] leading-[19.49px] font-normal'>Register</button>
                        <Link href='/apply-to-sell' className='text-white text-[16.63px] leading-[19.49px] font-normal w-[129px] h-[30px] rounded-[37px] bg-[#AA7639] flex items-center justify-center'>Apply To Sell</Link>
                    </div>
                    {/* Mobile menu */}
                    <button
                        className='text-[#7E5728] lg:hidden block'
                        onClick={toggleMobileMenu}
                        aria-label='Open mobile menu'
                    >
                        <RiMenuFill className='w-[30px] h-[30px]' />
                    </button>
                </div>



                {/* Border Line */}
                <div className='w-full h-[1px] bg-[#BA8950] mt-2'></div>

                <div className='lg:flex hidden items-center justify-center flex-wrap gap-4 md:gap-16 py-4 w-full max-w-[1440px] mx-auto px-7'>
                    <Link href='/' className={getLinkClass('/')} onClick={() => handleLinkClick('/')}>
                        Home
                    </Link>
                    <Link href='/artisan' className={getLinkClass('/artisan')} onClick={() => handleLinkClick('/artisan')}>
                        Artisan
                    </Link>
                    <Link href='/bestsellers' className={getLinkClass('/bestsellers')} onClick={() => handleLinkClick('/bestsellers')}>
                        Best Sellers
                    </Link>
                    <Link href='/categories' className={getLinkClass('/categories')} onClick={() => handleLinkClick('/categories')}>
                        Categories
                    </Link>
                    <Link href='/products' className={getLinkClass('/products')} onClick={() => handleLinkClick('/products')}>
                        Products
                    </Link>
                    <Link href='/aboutus' className={getLinkClass('/aboutus')} onClick={() => handleLinkClick('/aboutus')}>
                        About Us
                    </Link>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className='fixed top-0 right-5 bottom-0 left-0 bg-white shadow-lg z-[999] flex flex-col justify-center items-center py-4 px-3'>
                    {/* Close btn */}
                    <button className='self-end p-4 text-[#7E5728] absolute top-0 right-0' onClick={toggleMobileMenu} aria-label='Close mobile menu'><AiOutlineClose className='w-[30px] h-[30px]' /></button>

                    {/* Search */}
                    <div className='mr-[20px] flex items-center px-3 py-2 sm:w-[250px] w-full ml-3 justify-between border border-[#7E5728] bg-white rounded-[16px]'>
                        <div className='flex items-center gap-1.5 w-full'>
                            <Image src='/assets/search-icon.svg' alt='icon' width={19} height={19} />
                            <input type='text' placeholder='Search' className=' w-full xl:w-[500px] bg-transparent outline-none text-[#7E5728] placeholder:text-[#7E5728] text-[13.31px] leading-[15.6px] font-extralight' />
                        </div>
                        <Image src='/assets/chevron-down.svg' alt='icon' width={19} height={19} />
                    </div>

                    {/* Login & Register & Apply to Sell */}
                    <div className='flex flex-wrap items-center gap-6 my-10'>
                        <button onClick={openLoginModal} className='text-[#7E5728] text-[16.63px] font-normal underline underline-offset-4'>Log in</button>
                        <button onClick={openRegisterModal} className='border-[0.76px] border-[#BA8950] w-[113px] h-[30px] rounded-[37px] text-[16.63] text-[#BA8950] leading-[19.49px] font-normal'>Register</button>
                        <Link href='/apply-to-sell' className='text-white text-[16.63px] leading-[19.49px] font-normal w-[129px] h-[30px] rounded-[37px] bg-[#AA7639] flex items-center justify-center' onClick={toggleMobileMenu}>Apply To Sell</Link>
                    </div>

                    <nav className='flex flex-wrap my-5 items-center gap-4'>
                        <Link href='/' className='text-[#AA7639] text-[20px] leading-[23.42px] font-light font-robotoSerif' onClick={toggleMobileMenu}>Home</Link>
                        <Link href='/artisan' className='text-[#AA7639] text-[20px] leading-[23.42px] font-light font-robotoSerif' onClick={toggleMobileMenu}>Artisan</Link>
                        <Link href='/bestsellers' className='text-[#AA7639] text-[20px] leading-[23.42px] font-light font-robotoSerif' onClick={toggleMobileMenu}>Best Sellers</Link>
                        <Link href='/categories' className='text-[#AA7639] text-[20px] leading-[23.42px] font-light font-robotoSerif' onClick={toggleMobileMenu}>Categories</Link>
                        <Link href='/products' className='text-[#AA7639] text-[20px] leading-[23.42px] font-light font-robotoSerif' onClick={toggleMobileMenu}>Products</Link>
                        <Link href='/aboutus' className='text-[#AA7639] text-[20px] leading-[23.42px] font-light font-robotoSerif' onClick={toggleMobileMenu}>About Us</Link>
                    </nav>

                </div>
            )}

            {/* Modal Register */}
            {isModalOpen && (
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[1000] px-4 py-4'>
                    <div ref={registerModalRef} className='bg-white relative max-w-[1200px] m-auto'>
                        <div className='flex md:flex-row flex-col-reverse'>
                            <div className='max-w-[700px] w-full'>
                                <Image src='/assets/register-left.svg' alt='img' width={700} height={500} className='max-w-[700px] w-full ' />
                            </div>
                            <div className='flex items-start justify-center w-[300px] sm:w-[480px] flex-col p-[40px] lg:pl-[80px] relative overflow-hidden'>
                                <div>
                                    <h2 className='text-[#333333] text-[21.7px] leading-[32.54px] font-bold font-poppins'>Hello!</h2>
                                    <p className='text-[#333333] text-[15.02px] leading-[22.53px] font-normal font-poppins'>Sign Up to Get Started</p>
                                    <form className='mt-8 flex items-start gap-3 flex-col'>
                                        <div className='bg-white border-[0.83px] py-[15px] px-[21px] rounded-[25px] border-[#EEEEEE] w-[256px] flex items-center gap-2'>
                                            <Image src='/assets/user.svg' alt='User' width={20} height={20} />
                                            <input type='text' placeholder='Full Name' className='outline-none bg-transparent text-[#333333] text-[11.68px] leading-[17.52px] font-normal font-poppins' />
                                        </div>
                                        <div className='bg-white border-[0.83px] py-[15px] px-[21px] rounded-[25px] border-[#EEEEEE] w-[256px] flex items-center gap-2'>
                                            <Image src='/assets/email.svg' alt='User' width={20} height={20} />
                                            <input type='text' placeholder='Email Address' className='outline-none bg-transparent text-[#333333] text-[11.68px] leading-[17.52px] font-normal font-poppins' />
                                        </div>
                                        <div className='bg-white border-[0.83px] py-[15px] px-[21px] rounded-[25px] border-[#EEEEEE] w-[256px] flex items-center gap-2'>
                                            <Image src='/assets/password.svg' alt='User' width={20} height={20} />
                                            <input type='text' placeholder='Password' className='outline-none bg-transparent text-[#333333] text-[11.68px] leading-[17.52px] font-normal font-poppins' />
                                        </div>
                                        <button className='w-[256px] text-white text-[11.68px] leading-[17.52px] font-poppins font-normal rounded-[25px] bg-[#7E5728] py-[15px] px-[21px]'>Register</button>
                                    </form>
                                </div>
                                <Image src='/assets/lines.svg' alt='Lines' width={332} height={186} className='overflow-hidden hidden lg:block absolute top-[-100px] xl:top-0 right-[-100px]' />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal Login */}
            {isLoginOpen && (
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[1000] px-4 py-4'>
                    <div ref={loginModalRef} className='bg-white relative max-w-[1200px] m-auto'>
                        <div className='flex md:flex-row flex-col-reverse'>
                            <div className='max-w-[700px] w-full'>
                                <Image src='/assets/register-left.svg' alt='img' width={700} height={500} className='max-w-[700px] w-full ' />
                            </div>
                            <div className='flex items-start justify-center w-[300px] sm:w-[480px] flex-col p-[40px] lg:pl-[80px] relative overflow-hidden'>
                                <div>
                                    <h2 className='text-[#333333] text-[21.7px] leading-[32.54px] font-bold font-poppins'>Hello Again!</h2>
                                    <p className='text-[#333333] text-[15.02px] leading-[22.53px] font-normal font-poppins'>Welcome Back</p>
                                    <form className='mt-8 flex items-start gap-3 flex-col'>
                                        <div className='bg-white border-[0.83px] py-[15px] px-[21px] rounded-[25px] border-[#EEEEEE] w-[256px] flex items-center gap-2'>
                                            <Image src='/assets/email.svg' alt='User' width={20} height={20} />
                                            <input type='text' placeholder='Email Address' className='outline-none bg-transparent text-[#333333] text-[11.68px] leading-[17.52px] font-normal font-poppins' />
                                        </div>
                                        <div className='bg-white border-[0.83px] py-[15px] px-[21px] rounded-[25px] border-[#EEEEEE] w-[256px] flex items-center gap-2'>
                                            <Image src='/assets/password.svg' alt='User' width={20} height={20} />
                                            <input type='text' placeholder='Password' className='outline-none bg-transparent text-[#333333] text-[11.68px] leading-[17.52px] font-normal font-poppins' />
                                        </div>
                                        <button className='w-[256px] text-white text-[11.68px] leading-[17.52px] font-poppins font-normal rounded-[25px] bg-[#7E5728] py-[15px] px-[21px]'>Login</button>
                                    </form>
                                    <p className='text-center mt-3 text-[#333333] text-[11.68px] leading-[17.51px] font-normal font-poppins cursor-pointer'>Forgot Password</p>
                                </div>
                                <Image src='/assets/lines.svg' alt='Lines' width={332} height={186} className='overflow-hidden hidden lg:block absolute top-[-100px] xl:top-0 right-[-100px]' />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Navbar
