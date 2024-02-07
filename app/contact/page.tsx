import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Resturant/Contact/index";
import Footer from "@/components/Resturant/Footer";
import Header from "@/components/Resturant/Header";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "arvattech Contact Page",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Header/>
      <Contact />
      <Footer/>
    </>
  );
};

export default ContactPage;
