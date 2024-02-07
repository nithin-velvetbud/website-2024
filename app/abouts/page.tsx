import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "arvattech about page",
 
};

const AboutPage = () => {
  return (
    <>
      <AboutSectionTwo/>
      <AboutSectionOne />
    
    </>
  );
};

export default AboutPage;
