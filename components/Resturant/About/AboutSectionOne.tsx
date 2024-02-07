
import React from 'react';



const AboutSectionOne: React.FC = () => {
  return (
    <div id="about"className="dark:bg-black dark:text-gray-50 pt-24">
      <div   className="container grid grid-cols-12 mx-auto">
      <div
  className="flex flex-col justify-center col-span-12 align-middle bg-no-repeat bg-cover dark:bg-white lg:col-span-6 lg:h-auto"
  style={{
    backgroundImage: "url('https://devourin.com/wp-content/uploads/2023/07/res_banner.jpeg')",
    backgroundPosition: 'center center',
    backgroundBlendMode: 'multiply',
    backgroundSize: 'cover%',
  }}
>

        </div>
        <div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10">
          <div className="pt-6 pb-4 space-y-2">

            <h1 className="text-3xl font-bold">
              <span style={{ color: 'red' }}>About</span>  Us
            </h1>
            <p>Arvat-Restaurant is a complete omnichannel solution for Retail & Restaurants.We are a team passionately focused on driving small business success.</p>
            
          </div>
          <div className="pt-6 pb-4 space-y-2">

            <h1 className="text-3xl font-bold">Our Story</h1>
            <p> Our story began with a group of people who really know the restaurant world and technology. We love food, and we understand the challenges that restaurant owners face. So, we're on a mission to make managing a restaurant easier and better for everyone.</p>
            
          </div>
         
        </div>
      </div>
      <section className="py-6 dark:bg-black dark:text-gray-100">
        <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
        <h1 className="text-4xl font-bold leadi text-center sm:text-5xl">
  <span style={{ color: 'red' }}>We help</span> Your Business Grow
</h1>

          <p className="max-w-2xl text-center dark:text-gray-400">We believe in understanding your business before selling our product to you. So, the first and the most important step is to understand your business process and see how best can our product adapt to your needs.</p>
          <div className="flex flex-row flex-wrap-reverse justify-center">
            <div className="flex flex-col justify-center m-8 text-center">
              <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://re-pos.in/wp-content/uploads/2019/11/icon_abt_us_02.png" />
              <p className="text-xl font-semibold leadi ">Friendly Customer Support</p>

            </div>
            <div className="flex flex-col justify-center m-8 text-center">
              <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://cdn.dotpe.in/dotpe-website-live/images/restaurant-page/new-webp/support.webp" />
              <p className="text-xl font-semibold leadi">24/7 Support</p>

            </div>
            <div className="flex flex-col justify-center m-8 text-center">
              <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://re-pos.in/wp-content/uploads/2019/11/icon_abt_us_03.png" />
              <p className="text-xl font-semibold leadi">Easy To Use</p>

            </div>
            <div className="flex flex-col justify-center m-8 text-center">
              <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://re-pos.in/wp-content/uploads/2019/11/icon_abt_us_01.png" />
              <p className="text-xl font-semibold leadi">Constant System Upgrade</p>

            </div>
          </div>
        </div>
      </section>
     
    </div>

  );
};


export default AboutSectionOne;
