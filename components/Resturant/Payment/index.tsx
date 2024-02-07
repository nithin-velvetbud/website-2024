import React, { CSSProperties } from 'react';
import Link from 'next/link';



const YourComponent: React.FC = () => {
  return (
    <section id="product4"className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-4xl font-bold leading-none sm:text-6xl">
            {"Take "}
            <span className="dark:text-red-500 text-red-500">payments </span> on your terms
          </h1>


          <p className="mt-6 mb-8 text-lg sm:mb-12">
            {" We  provides a safe and secure payment gateway which accepts UPI, credit & debit cards and all online payments."}

          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">

          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img src="/images/about/payment.png" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
        </div>
      </div>
    </section>
  );
};

export default YourComponent;
