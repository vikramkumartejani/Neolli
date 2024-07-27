'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { BiMenuAltLeft } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import Footer from '../components/Footer';
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';


const products = [
    {
        id: 1,
        imageSrc: '/assets/best-sellers-product.svg',
        altText: 'Product',
        title: 'Lorem ipsum dolor sit amet',
        mode: 'Hand Made',
        rating: 5.0,
        stock: 'In Stock',
        price: '$200',
        reviews: 10,
    },
    {
        id: 2,
        imageSrc: '/assets/best-sellers-product.svg',
        altText: 'Product',
        title: 'Lorem ipsum dolor sit amet',
        mode: 'Hand Made',
        rating: 5.0,
        outstock: 'Out of Stock',
        price: '$200',
        reviews: 10,
    },
    {
        id: 3,
        imageSrc: '/assets/best-sellers-product.svg',
        altText: 'Product',
        title: 'Lorem ipsum dolor sit amet',
        mode: 'Hand Made',
        rating: 5.0,
        stock: 'In Stock',
        price: '$200',
        reviews: 10,
    },
    {
        id: 4,
        imageSrc: '/assets/best-sellers-product.svg',
        altText: 'Product',
        title: 'Lorem ipsum dolor sit amet',
        mode: 'Hand Made',
        rating: 5.0,
        stock: 'In Stock',
        price: '$200',
        reviews: 10,
    },
    {
        id: 5,
        imageSrc: '/assets/best-sellers-product.svg',
        altText: 'Product',
        title: 'Lorem ipsum dolor sit amet',
        mode: 'Hand Made',
        rating: 5.0,
        stock: 'In Stock',
        price: '$200',
        reviews: 10,
    },
    {
        id: 6,
        imageSrc: '/assets/best-sellers-product.svg',
        altText: 'Product',
        title: 'Lorem ipsum dolor sit amet',
        mode: 'Hand Made',
        rating: 5.0,
        stock: 'In Stock',
        price: '$200',
        reviews: 10,
    },
    {
        id: 7,
        imageSrc: '/assets/best-sellers-product.svg',
        altText: 'Product',
        title: 'Lorem ipsum dolor sit amet',
        mode: 'Hand Made',
        rating: 5.0,
        stock: 'In Stock',
        price: '$200',
        reviews: 10,
    },
    {
        id: 8,
        imageSrc: '/assets/best-sellers-product.svg',
        altText: 'Product',
        title: 'Lorem ipsum dolor sit amet',
        mode: 'Hand Made',
        rating: 5.0,
        stock: 'In Stock',
        price: '$200',
        reviews: 10,
    },
    {
        id: 9,
        imageSrc: '/assets/best-sellers-product.svg',
        altText: 'Product',
        title: 'Lorem ipsum dolor sit amet',
        mode: 'Hand Made',
        rating: 5.0,
        stock: 'In Stock',
        price: '$200',
        reviews: 10,
    },
];

const ProductList = () => {
    return (
        <div className='mt-8 grid grid-cols-1 xsm:grid-cols-2 lg:grid-cols-3 gap-5'>
            {products.map((product) => (
                <div key={product.id} className='w-full h-full'>
                    <Image src={product.imageSrc} alt={product.altText} width={272} height={272} className=' w-full object-cover h-[272px]' />
                    <div className='px-2 py-3 w-full'>
                        <h2 className='text-[#1E1E1E] text-[15px] leading-[24px] font-poppins font-medium'>{product.title}</h2>
                        <h2 className='text-[#1E1E1E] text-[15px] leading-[24px] font-poppins font-light italic mt-0.5'>{product.mode}</h2>
                        <div className='flex items-center justify-between w-full'>
                            <h2 className='flex items-center gap-2.5 my-2 text-[#1E1E1E] text-[12px] leading-[16px] font-light font-poppins'>
                                <FaStar className='text-[#FFC831] text-[16px]' /> {product.rating} ({product.reviews} Reviews)
                            </h2>
                            {product.outstock ? (
                                <span className='text-[#D33C2C] text-[12px] leading-[16px] font-poppins font-medium'>{product.outstock}</span>
                            ) : (
                                <span className='text-[#1A9452] text-[12px] leading-[16px] font-poppins font-medium'>{product.stock}</span>
                            )}
                        </div>
                        <h2 className='text-[#1E1E1E] text-[24px] leading-[24px] font-montserrat font-semibold mt-1'>{product.price}</h2>
                        <div className='flex items-center justify-between mt-4'>
                            <button className='bg-[#7E5728] h-[40px] flex items-center justify-center gap-2 rounded text-white text-[16px] leading-[16px] font-poppins font-medium w-[200px]'>
                                <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 6.75H6.25V10.5C6.25 10.9125 5.9125 11.25 5.5 11.25C5.0875 11.25 4.75 10.9125 4.75 10.5V6.75H1C0.5875 6.75 0.25 6.4125 0.25 6C0.25 5.5875 0.5875 5.25 1 5.25H4.75V1.5C4.75 1.0875 5.0875 0.75 5.5 0.75C5.9125 0.75 6.25 1.0875 6.25 1.5V5.25H10C10.4125 5.25 10.75 5.5875 10.75 6C10.75 6.4125 10.4125 6.75 10 6.75Z" fill="white" />
                                </svg>Add to Cart
                            </button>
                            <button className='bg-[#ECEFF1] w-[40px] h-[40px] flex items-center justify-center'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_81_509)">
                                        <path d="M19.6602 3.99001C17.0202 2.19001 13.7602 3.03001 12.0002 5.09001C10.2402 3.03001 6.98021 2.18001 4.34021 3.99001C2.94021 4.95001 2.06021 6.57001 2.00021 8.28001C1.86021 12.16 5.30021 15.27 10.5502 20.04L10.6502 20.13C11.4102 20.82 12.5802 20.82 13.3402 20.12L13.4502 20.02C18.7002 15.26 22.1302 12.15 22.0002 8.27001C21.9402 6.57001 21.0602 4.95001 19.6602 3.99001ZM12.1002 18.55L12.0002 18.65L11.9002 18.55C7.14021 14.24 4.00021 11.39 4.00021 8.50001C4.00021 6.50001 5.50021 5.00001 7.50021 5.00001C9.04021 5.00001 10.5402 5.99001 11.0702 7.36001H12.9402C13.4602 5.99001 14.9602 5.00001 16.5002 5.00001C18.5002 5.00001 20.0002 6.50001 20.0002 8.50001C20.0002 11.39 16.8602 14.24 12.1002 18.55Z" fill="#1E1E1E" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_81_509">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

const BestSellers = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <>
        <Topbar/>
        <Navbar/>
        <div className='max-w-[1150px] w-full mx-auto mt-8 mb-[200px] px-3'>
            <div className='md:flex items-start md:gap-5'>

                <div className="relative w-[50px] md:w-[250px] lg:w-[250px]">
                    {/* Sidebar */}
                    <div className={`fixed inset-0 bg-white z-50 py-6 transform ${showSidebar ? ' px-4 py-5 border-r border-black translate-x-0' : 'translate-x-full'} transition-transform md:relative md:translate-x-0 w-full md:w-[250px] lg:w-[250px]`}>
                        <div className="flex items-center justify-between mb-6 md:hidden">
                            <h2 className="text-lg font-poppins font-bold">Filters</h2>
                            <button onClick={toggleSidebar} className="text-sm font-poppins font-bold text-[#CBA77C]">Close</button>
                        </div>

                        <div className="md:block hidden">
                            <div className="flex items-center gap-2">
                                <Image src='/assets/filter.svg' alt='Filters' width={24} height={24} />
                                <h2>Filters</h2>
                            </div>
                        </div>

                        {/* Voir */}
                        <div className="mt-[24px] pt-1 border-t border-[#CBA77C]">
                            <div className="flex items-center gap-2 justify-between mb-2.5">
                                <h3 className="text-[#1E1E1E] text-[16px] leading-[24px] font-normal font-montserrat">Voir</h3>
                                <button><Image src='/assets/dropdown-arrow.svg' alt='Arrow' width={12} height={7} /></button>
                            </div>
                            <div className="flex items-center gap-2">
                                <label className="container-checkbox"><input type="checkbox" /><div className="checkmark"></div></label>
                                <h3 className="text-[#1E1E1E] text-[15px] leading-[24px] font-normal font-poppins">Products</h3>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                                <label className="container-checkbox"><input type="checkbox" /><div className="checkmark"></div></label>
                                <h3 className="text-[#1E1E1E] text-[15px] leading-[24px] font-normal font-poppins">Artisan</h3>
                            </div>
                        </div>

                        {/* Applied Filters */}
                        <div className="mt-3 pt-3 border-t border-[#CBA77C]">
                            <div className="flex items-center gap-2 justify-between mb-2.5">
                                <h3 className="text-[#1E1E1E] text-[16px] leading-[24px] font-normal font-montserrat">Applied Filters</h3>
                                <button className="text-[#1E1E1E] text-[12px] leading-[16px] font-medium font-poppins underline">clear all</button>
                            </div>
                            <button className="bg-[#ECEFF1] py-1 px-1 flex items-center gap-1.5 text-[13px] leading-[20px] font-poppins font-normal rounded-[2px]">All
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.15035 0.999177C6.95535 0.801585 6.64035 0.801585 6.44535 0.999177L4.00035 3.4716L1.55535 0.99411C1.36035 0.796519 1.04535 0.796519 0.850352 0.99411C0.655352 1.1917 0.655352 1.51089 0.850352 1.70848L3.29535 4.18597L0.850352 6.66346C0.655352 6.86105 0.655352 7.18024 0.850352 7.37783C1.04535 7.57542 1.36035 7.57542 1.55535 7.37783L4.00035 4.90034L6.44535 7.37783C6.64035 7.57542 6.95535 7.57542 7.15035 7.37783C7.34535 7.18024 7.34535 6.86105 7.15035 6.66346L4.70535 4.18597L7.15035 1.70848C7.34035 1.51595 7.34035 1.1917 7.15035 0.999177Z" fill="#1E1E1E" />
                                </svg>
                            </button>
                        </div>

                        {/* Category */}
                        <div className="mt-3 pt-3 border-t border-[#CBA77C]">
                            <div className="flex items-center gap-2 justify-between mb-2.5">
                                <h3 className="text-[#1E1E1E] text-[16px] leading-[24px] font-normal font-montserrat">Category</h3>
                                <button><Image src='/assets/dropdown-arrow.svg' alt='Arrow' width={12} height={7} /></button>
                            </div>
                            <div className="flex items-center gap-2">
                                <label className="container-checkbox"><input type="checkbox" /><div className="checkmark"></div></label>
                                <h3 className="text-[#1E1E1E] text-[15px] leading-[24px] font-normal font-poppins">All</h3>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                                <label className="container-checkbox"><input type="checkbox" /><div className="checkmark"></div></label>
                                <h3 className="text-[#1E1E1E] text-[15px] leading-[24px] font-normal font-poppins">Hand Made</h3>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                                <label className="container-checkbox"><input type="checkbox" /><div className="checkmark"></div></label>
                                <h3 className="text-[#1E1E1E] text-[15px] leading-[24px] font-normal font-poppins">Category 3</h3>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                                <label className="container-checkbox"><input type="checkbox" /><div className="checkmark"></div></label>
                                <h3 className="text-[#1E1E1E] text-[15px] leading-[24px] font-normal font-poppins">Category 4</h3>
                            </div>
                        </div>

                        {/* Stock Status */}
                        <div className="mt-3 pt-3 border-t border-[#CBA77C]">
                            <div className="flex items-center gap-2 justify-between mb-2.5">
                                <h3 className="text-[#1E1E1E] text-[16px] leading-[24px] font-normal font-montserrat">Stock Status</h3>
                                <button><Image src='/assets/dropdown-arrow.svg' alt='Arrow' width={12} height={7} /></button>
                            </div>
                            <div className="flex items-center gap-2">
                                <label className="container-checkbox"><input type="checkbox" /><div className="checkmark"></div></label>
                                <h3 className="text-[#1E1E1E] text-[15px] leading-[24px] font-normal font-poppins">In Stock</h3>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                                <label className="container-checkbox"><input type="checkbox" /><div className="checkmark"></div></label>
                                <h3 className="text-[#1E1E1E] text-[15px] leading-[24px] font-normal font-poppins">Out of Stock</h3>
                            </div>
                        </div>

                        {/* Size */}
                        <div className="mt-3 pt-3 border-t border-[#CBA77C]">
                            <div className="flex items-center gap-2 justify-between mb-2.5">
                                <h3 className="text-[#1E1E1E] text-[16px] leading-[24px] font-normal font-montserrat">Size</h3>
                                <button><Image src='/assets/dropdown-arrow.svg' alt='Arrow' width={12} height={7} /></button>
                            </div>
                            <div className="flex items-center gap-2">
                                <label className="container-checkbox"><input type="checkbox" /><div className="checkmark"></div></label>
                                <h3 className="text-[#1E1E1E] text-[15px] leading-[24px] font-normal font-poppins">Small</h3>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                                <label className="container-checkbox"><input type="checkbox" /><div className="checkmark"></div></label>
                                <h3 className="text-[#1E1E1E] text-[15px] leading-[24px] font-normal font-poppins">Medium</h3>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                                <label className="container-checkbox"><input type="checkbox" /><div className="checkmark"></div></label>
                                <h3 className="text-[#1E1E1E] text-[15px] leading-[24px] font-normal font-poppins">Large</h3>
                            </div>
                        </div>

                        {/* Colors */}
                        <div className="mt-3 pt-3 border-t border-[#CBA77C]">
                            <div className="flex items-center gap-2 justify-between mb-2.5">
                                <h3 className="text-[#1E1E1E] text-[16px] leading-[24px] font-normal font-montserrat">Color</h3>
                                <button><Image src='/assets/dropdown-arrow.svg' alt='Arrow' width={12} height={7} /></button>
                            </div>
                            <div className="mt-2 grid grid-cols-6 gap-4">
                                <button className="w-[24px] h-[24px] bg-[#FF0000] border border-[#7C7C7C] rounded-full"></button>
                                <button className="w-[24px] h-[24px] bg-[#FFA800] border border-[#7C7C7C] rounded-full"></button>
                                <button className="w-[24px] h-[24px] bg-[#80FF00] border border-[#7C7C7C] rounded-full"></button>
                                <button className="w-[24px] h-[24px] bg-[#00FFB2] border border-[#7C7C7C] rounded-full"></button>
                                <button className="w-[24px] h-[24px] bg-[#0029FF] border border-[#7C7C7C] rounded-full"></button>
                                <button className="w-[24px] h-[24px] bg-[#FF00C7] border border-[#7C7C7C] rounded-full"></button>
                                <button className="w-[24px] h-[24px] bg-[#FF97DC] border border-[#7C7C7C] rounded-full"></button>
                                <button className="w-[24px] h-[24px] bg-[#85F9C8] border border-[#7C7C7C] rounded-full"></button>
                                <button className="w-[24px] h-[24px] bg-[#FF007A] border border-[#7C7C7C] rounded-full"></button>
                                <button className="w-[24px] h-[24px] bg-[#272727] border border-[#7C7C7C] rounded-full"></button>
                                <button className="w-[24px] h-[24px] bg-[#FFFFFF] border border-[#7C7C7C] rounded-full"></button>
                            </div>
                        </div>
                    </div>

                    {/* Overlay to close the sidebar on mobile screens */}
                    {showSidebar && (
                        <div
                            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                            onClick={toggleSidebar}
                        ></div>
                    )}
                </div>

                <div className='w-full max-w-[862px] md:border-l border-[#CBA77C] md:pl-4'>
                    <div className='w-full'>
                        <div className='flex items-center gap-1'>
                            <Link href='/' className='underline text-[#1E1E1E] font-poppins font-normal text-[13px] leading-[20px] tracking-[0.25px]'>Home</Link>
                            <span className='text-[#1E1E1E] font-poppins font-normal text-[13px] leading-[20px] tracking-[0.25px]'>/</span>
                            <p className='text-[#1E1E1E] font-poppins font-normal text-[13px] leading-[20px] tracking-[0.25px]'>Best Sellers</p>
                        </div>

                        <div className='mt-2 flex items-end gap-2 justify-between w-full'>
                            <div className='flex items-center gap-2'>
                                <div className='w-[56px] h-[1px] bg-[#1E1E1E] mt-2'></div>
                                <p className='text-[#1E1E1E] text-[15px] leading-[24px] font-normal font-poppins'>288 Results</p>
                            </div>
                            <button className='border-2 border-[#7E5728] w-[141px] h-[48px] rounded font-poppins font-normal text-[#7E5728] text-[20px] leading-[24px] flex items-center gap-2 justify-center'><BiMenuAltLeft className='text-[24px]' />Sort by</button>
                        </div>

                        {/* Filters */}
                        <div className="mt-5 md:hidden block">
                            <button onClick={toggleSidebar} className="text-sm font-poppins font-bold text-[#CBA77C]">Filters</button>
                        </div>

                        {/* Products */}
                        <ProductList />

                        {/* Pagination */}
                        <div className='mt-[26px] flex items-center justify-between gap-1'>
                            <div className='lg:block hidden'></div>
                            <div className='lg:block hidden'></div>
                            <div className='lg:block hidden'></div>
                            <button className='border-2 border-[#7E5728] w-[120px] sm:w-[174px] h-[48px] rounded flex items-center justify-center gap-1 sm:gap-3 text-[#7E5728] text-[15px] sm:text-[20px] leading-[24px] font-poppins font-normal'>Next Page
                                <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.01 2.99996H1C0.45 2.99996 0 3.44996 0 3.99996C0 4.54996 0.45 4.99996 1 4.99996H12.01V6.78996C12.01 7.23996 12.55 7.45996 12.86 7.13996L15.64 4.34996C15.83 4.14996 15.83 3.83996 15.64 3.63996L12.86 0.849956C12.55 0.529956 12.01 0.759956 12.01 1.19996V2.99996Z" fill="#7E5728" />
                                </svg>
                            </button>

                            <div className='flex items-center gap-2 sm:gap-3.5'>
                                <div className='bg-[#ECEFF1] w-[48px] h-[48px] rounded flex items-center justify-center text-[#7E5728] text-[20px] leading-[24px] font-normal font-poppins'>01</div>
                                <h3 className='text-[#7E5728] text-[14px] leading-[20px] font-poppins font-normal'>of 55</h3>
                                <button className='bg-[#ECEFF1] w-[48px] h-[48px] rounded flex items-center justify-center text-[#7E5728] text-[20px] leading-[24px] font-normal font-poppins'>
                                    <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.6201 0.990059C10.1301 0.500059 9.34006 0.500059 8.85006 0.990059L0.540059 9.30006C0.150059 9.69006 0.150059 10.3201 0.540059 10.7101L8.85006 19.0201C9.34006 19.5101 10.1301 19.5101 10.6201 19.0201C11.1101 18.5301 11.1101 17.7401 10.6201 17.2501L3.38006 10.0001L10.6301 2.75006C11.1101 2.27006 11.1101 1.47006 10.6201 0.990059Z" fill="#7E5728" />
                                    </svg>
                                </button>
                                <button className='bg-[#ECEFF1] w-[48px] h-[48px] rounded flex items-center justify-center text-[#7E5728] text-[20px] leading-[24px] font-normal font-poppins'>
                                    <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.379941 0.990059C0.869941 0.500059 1.65994 0.500059 2.14994 0.990059L10.4599 9.30006C10.8499 9.69006 10.8499 10.3201 10.4599 10.7101L2.14994 19.0201C1.65994 19.5101 0.869941 19.5101 0.379941 19.0201C-0.110059 18.5301 -0.110059 17.7401 0.379941 17.2501L7.61994 10.0001L0.369943 2.75006C-0.110057 2.27006 -0.110059 1.47006 0.379941 0.990059Z" fill="#7E5728" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}


export default BestSellers