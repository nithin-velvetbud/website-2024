import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100 mt-10">
    <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between w-full h-screen">
      <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"> 
          <span className="dark:text-violet-400">FinanceForge</span>
        </h1>
        <p className="mt-4 sm:mt-6 lg:mt-8 mb-4 sm:mb-6 lg:mb-8 text-base sm:text-lg lg:text-xl text-gray-700 dark:text-gray-300">
  At <span className="font-bold text-violet-500">Arvat-Finance</span>, we redefine the future of financial management with innovative software solutions. Our commitment is to deliver seamless, efficient, and secure tools that empower businesses to thrive in the dynamic world of finance. Explore our offerings and unlock a new era of financial excellence.
</p>

        <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-6 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
          <a rel="noopener noreferrer" href="#" className="px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Suspendisse</a>
          <a rel="noopener noreferrer" href="#" className="px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-semibold border rounded dark:border-gray-100">Malesuada</a>
        </div>
      </div>
      <div className="flex items-center justify-center p-6 mt-4 sm:mt-8 lg:mt-0 h-52 sm:h-72 lg:h-96 xl:h-112 2xl:h-128 pt-12">
        <img src="https://media.razorpay.com/file/X/Acquisition/FINAL%20ILLUSTRATION.png?w=xxl&project=website-media" alt="" className="object-contain h-52 sm:h-72 lg:h-96 xl:h-112 2xl:h-128" />
      </div>
    </div>
  </section>
  );
};

export default Hero;
