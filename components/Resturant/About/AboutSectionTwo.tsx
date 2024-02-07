"use client"
import { motion } from "framer-motion"
import Image from "next/image";

const AboutSectionTwo = () => {

  return (
    <section id="product" className="py-16 md:py-20 lg:py-28">
      <div className="py-20 text-5xl text-center font-bold">
        <span style={{ color: 'red' }}>Restaurant</span>  Management Software featuring
      </div>

      <div className="container">
        <motion.div className="-mx-4 flex flex-wrap items-center"

        >
          <div className="w-full px-4 lg:w-1/2 mb-8 ">

            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/brands/Bills.avif"
                alt="food image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/brands/Bills.avif"
                alt="food image"
                fill
                className="drop-shadow-three hidden dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 flex-col">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-3xl text-black dark:text-white sm:text-4xl lg:text-3xl xl:text-4xl">
                  <span style={{ color: 'red' }} className="font-bold">Billing</span> <span className="font-bold">software</span>
                </h3>


                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed text-justify">
                  {"Application that facilitates the creation and management of invoices or bills for goods and services provided by a business. It automates the process of generating bills, recording transactions, and managing financial information related to sales.Here are key aspects and features of billing software"}
                </p>
              </div>
              <div className="mb-1">
              </div>
            </div>
          </div>
        </motion.div>

        <div className="-mx-4 flex flex-wrap flex-row-reverse">
          <div className="w-full px-4 lg:w-1/2 mb-8">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/brands/order.avif"
                alt="food image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/brands/order.avif"
                alt="food image"
                fill
                className="drop-shadow-three hidden dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div id="product2" className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]">
              <div className="mb-9">
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl lg:text-3xl xl:text-4xl">
                  <span style={{ color: 'red' }}>{"Online"} </span>{"Ordering"}
                </h3>


                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed text-justify">
                  "User-friendly, customizable menus, real-time tracking, and seamless ordering. Integrated payments, responsive design, and marketing features for enhanced efficiency. Benefit from reliability, scalability, and ongoing support. Stay competitive and revolutionize your customer engagement."
                </p>

              </div>
              <div className="mb-1">
              </div>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2 mb-10">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/Graph2.jpg"
                alt="food image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none "
              />
              <Image
                src="/images/about/Graph.webp"
                alt="food image"
                fill
                className="drop-shadow-three hidden dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div id="product3" className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-4xl font-bold text-black dark:text-white sm:text-4xl lg:text-3xl xl:text-4xl">
                  <span style={{ color: 'red' }}>Real-time</span>  Reports
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed text-justify">
                  {" Access real-time restaurant reports effortlessly with our streamlined system. Stay informed with instant insights into sales, inventory, and customer data. Enhance decision-making and operational efficiency, ensuring your restaurant stays ahead in the dynamic industry landscape."}
                </p>
              </div>
              <div className="mb-1">
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default AboutSectionTwo;
