import React from 'react';
import AboutSectionTwo from "@/components/Resturant/About/AboutSectionTwo";
import Contact from '@/components/Resturant/Contact'
import Hero from '@/components/Resturant/Hero/Hero';
import AboutSectionOne from '@/components/Resturant/About/AboutSectionOne';
//import Video from '@/components/Resturant/Video';
import Payment from '@/components/Resturant/Payment';

import Footer from "@/components/Resturant/Footer";
import WhyUs from "@/components/Resturant/WhyUs";
import { Metadata } from "next";

const page = () => {
  return (
    <div>
    <Hero />
    <AboutSectionTwo /> 
    <Payment/>       
    <WhyUs/>
    <AboutSectionOne/>
    <Contact/> 
    <Footer/>  
</div>
  );
}

export default page;
