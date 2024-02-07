import React from 'react';
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Service";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Video from "@/components/Video";

const page = () => {
  return (
    <>
    <Hero />
      <Blog />
      <Features /> 
      <Video />
     <AboutSectionOne/>
     <AboutSectionTwo/>
      <Contact />
      <Footer/>
    </>
  );
}

export default page;
