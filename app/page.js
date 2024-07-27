import Image from "next/image";
import FAQ from "./components/FAQ";
import ImGoingForIt from "./components/ImGoingForIt";
import Academy from "./components/Academy";
import OurArtisans from "./components/OurArtisans";
import PopularCategories from "./components/PopularCategories";
import WhatIsNeolli from "./components/WhatIsNeolli";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <Topbar/>
    <Navbar/>
      {/* <div className=""> */}
      {/* <div className="w-full home-img bg-contain">
          </div> */}
      <div className="relative">
        <Image src='/assets/hero.svg' alt="fg" width={1440} height={750} className="w-full h-[750px] object-cover relative" />
        <div className="max-w-[1440px] mx-auto px-3 sm:ml-[50px] absolute top-[200px]">
          <h2 className="text-[40px] sm:text-[62px] sm:leading-[73px] font-normal text-white mb-2.5">Wholesale made</h2>
          <h2 className="text-[40px] sm:text-[62px] sm:leading-[73px] font-normal text-white">Sustainable</h2>
          <p className="text-white text-[19px] sm:text-[23px] leading-[28px] font-normal max-w-[467px] mt-[21px] mb-[28px]">Buy from 700+ makers from 70+ countries Sustainably made and verified by us</p>
          <button className="bg-[#AA7639] w-[122px] h-[62px] text-[18.42px] leading-[21.57px] font-normal text-white">Je m’inscris</button>
        </div>
      </div>
      <WhatIsNeolli />
      <PopularCategories />
      <OurArtisans />
      <Academy />
      <ImGoingForIt />
      <FAQ />
      <Footer/>
      {/* </div> */}
    </>
  );
}
