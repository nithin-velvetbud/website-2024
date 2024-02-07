
"use client"
import {motion} from "framer-motion"
import React, { CSSProperties } from 'react';
import Link from 'next/link';



const YourComponent: React.FC = () => {
  return (
    <section id="whyus"className="dark:bg-gray-800 dark:text-gray-100">
    
      <div className="container mx-auto flex flex-col p-6">
        <h2 className="py-4 text-4xl font-bold text-center">
          <span style={{ color: 'red' }}>Ecosystem</span> Components
        </h2>

        <div className="divide-y dark:divide-gray-700">

        <motion.div className="grid justify-center grid-cols-1 p-8 mx-auto space-y-8 lg:space-y-0 lg:grid-cols-4 overflow-y-auto"
        whileHover={{
          scale:1.1,
          textShadow:"0px 0px 8px rgb(255,255,255)",
          boxShadow:"0px 0px 8px rgb(255,0,0)"
  
        }}  
        >
            <div className="flex items-center justify-center lg:col-span-1 col-span-full overflow-auto touch-auto">
              <img
                src="https://icons.veryicon.com/png/o/business/sunshine/billing-2.png"
                alt="Step 1"
                className="w-20 h-20 animate-bounce"
              />
            </div>
            <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
              <span className="text-xs tracking-wide uppercase dark:text-violet-400"></span>
              <span className="text-xl font-bold md:text-2xl">{"Uninterrupted billing operations"}</span>
              <span className="mt-4 dark:text-gray-300 text-justify">
                {"Smooth billing operations ensure efficient financial processes. From invoicing to payment tracking, our system guarantees uninterrupted transactions. Experience hassle-free financial managemen with our streamlined billing solutions, optimizing your business for success"}
              </span>
            </div>
            </motion.div>
          <motion.div  id="Inventory"className="grid justify-center grid-cols-1 p-8 mx-auto space-y-8 lg:space-y-0 lg:grid-cols-4 overflow-y-auto"
           whileHover={{
            scale:1.1,
            textShadow:"0px 0px 8px rgb(255,255,255)",
            boxShadow:"0px 0px 8px rgb(255,0,0)"
    
          }}  
          
          >
            <div className="flex items-center justify-center lg:col-span-1 col-span-full">
              <img
                src="https://static.thenounproject.com/png/4673306-200.png"
                alt="Step 2"
                className="w-20 h-20 animate-bounce"
              />
            </div>
            <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
              <span className="text-xl font-bold md:text-2xl ">{"Inventory Management"}</span>
              <span className="mt-4 dark:text-gray-300 text-justify">
                "Inventory management is the process of overseeing a company's stock of goods. It involves maintaining the right amount of inventory to meet customer demand, minimizing holding costs, and ensuring efficient operations. Effective inventory management prevents stockouts, overstocking, and contributes to overall business efficiency."
              </span>
            </div>
            </motion.div>

            <motion.div   id="Prepare" className="grid justify-center grid-cols-1 p-8 mx-auto space-y-8 lg:space-y-0 lg:grid-cols-4"
            whileHover={{
              scale:1.1,
              textShadow:"0px 0px 8px rgb(255,255,255)",
              boxShadow:"0px 0px 8px rgb(255,0,0)"
      
            }}  
            >
            <div className="flex items-center justify-center lg:col-span-1 col-span-full">
              <img
                src="data:image/png;base64,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" // Replace with your actual image URL
                alt="Step 3"
                className="w-20 h-20 animate-bounce"
              />
            </div>
            <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">

              <span className="text-xl font-bold md:text-2xl">{"Prepare plan & Provide"}</span>
              <span className="mt-4 dark:bg-gray-800 dark:text-gray-300 text-justify">
                {"Establish a comprehensive production plan, manage Bill of materials, calculate accurate production costs, and prepare every dish with the perfect blend of ingredients."}
              </span>
            </div>
            </motion.div>

            <motion.div  id="CRM"className="grid justify-center grid-cols-1 p-8 mx-auto space-y-8 lg:space-y-0 lg:grid-cols-4 "
              whileHover={{
                scale:1.1,
                textShadow:"0px 0px 8px rgb(255,255,255)",
                boxShadow:"0px 0px 8px rgb(255,0,0)"
        
              }}  
            >
            <div className="flex items-center justify-center lg:col-span-1 col-span-full">
              <img
                src="https://cdn4.iconfinder.com/data/icons/reputation-management-1/66/56-1024.png"
                alt="Step 3"
                className="w-20 h-20 animate-bounce"
              />
            </div>
            <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">

              <span className="text-xl font-bold md:text-2xl">{"CRM & Loyalty"}</span>
              <span className="mt-4 dark:bg-gray-800 dark:text-gray-300 text-justify">
                {"Be extra cheesy to your customers by sending personalized marketing campaigns via SMS, email, and WhatsApp on special offers and discounts"}
              </span>
            </div>
            </motion.div>


            <motion.div  id="GST"className="grid justify-center grid-cols-1 p-8 mx-auto space-y-8 lg:space-y-0 lg:grid-cols-4 "
              whileHover={{
                scale:1.1,
                textShadow:"0px 0px 8px rgb(255,255,255)",
                boxShadow:"0px 0px 8px rgb(255,0,0)"
        
              }}  
            >
            <div className="flex items-center justify-center lg:col-span-1 col-span-full">
              <img
                src="https://cdn2.iconfinder.com/data/icons/miscellaneous-565-solid/128/gst_card_calculate_financial_document_money_service-tax_taxation_government_taxpayer-1024.png"
                alt="Step 3"
                className="w-20 h-20 animate-bounce"
              />
            </div>
            <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">

              <span className="text-xl font-bold md:text-2xl">{"Accounting & GST"}</span>
              <span className="mt-4 dark:bg-gray-800 dark:text-gray-300 text-justify">
                {"Stay compliant with tax regulations through integrated accounting software that does automated GST calculations, guiding your decision-making from purchase to sale"}
              </span>
            </div>
            </motion.div>

            <motion.div  id="food"className="grid justify-center grid-cols-1 p-8 mx-auto space-y-8 lg:space-y-0 lg:grid-cols-4 "
              whileHover={{
                scale:1.1,
                textShadow:"0px 0px 8px rgb(255,255,255)",
                boxShadow:"0px 0px 8px rgb(255,0,0)"
        
              }}  
            >
            <div className="flex items-center justify-center lg:col-span-1 col-span-full">
              <img
                src="https://cdn-icons-png.flaticon.com/512/7217/7217494.png"
                alt="Step 3"
                className="w-20 h-20 animate-bounce"
              />
            </div>
            <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">

              <span className="text-xl font-bold md:text-2xl">{"Effortless food aggregator integration"}</span>
              <span className="mt-4 dark:bg-gray-800 dark:text-gray-300 text-justify">
                {"Manage all your online orders from various food aggregators, like Swiggy and Zomato, on a single screen and simplify your online presence"}
              </span>
            </div>
            </motion.div>

            <motion.div id="Data"className="grid justify-center grid-cols-1 p-8 mx-auto space-y-8 lg:space-y-0 lg:grid-cols-4 "
              whileHover={{
                scale:1.1,
                textShadow:"0px 0px 8px rgb(255,255,255)",
                boxShadow:"0px 0px 8px rgb(255,0,0)"
        
              }}  
            >
            <div className="flex items-center justify-center lg:col-span-1 col-span-full">
              <img
                src="https://cdn4.iconfinder.com/data/icons/data-science-17/48/29-512.png"
                alt="Step 3"
                className="w-20 h-20 animate-bounce"
              />
            </div>
            <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">

              <span className="text-xl font-bold md:text-2xl">{"Data Backup & Security"}</span>
              <span className="mt-4 dark:bg-gray-800 dark:text-gray-300 text-justify">
                {"Protect your business data with a restaurant management system that provides a strong security management system"}
              </span>
            </div>
            </motion.div>

          
        </div>
      </div>
      
    </section>
  );
};

export default YourComponent;
