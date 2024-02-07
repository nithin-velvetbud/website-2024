import React, { CSSProperties } from 'react';
import Link from 'next/link';

interface HomeIconProps {
  style?: CSSProperties;
}

const HomeIcon: React.FC<HomeIconProps> = ({ style }) => (
  <svg width="32" height="32" viewBox="0 0 24 24" style={{ fill: 'currentColor', ...style }}>
    <path d="M12 2L2 12h3v8h4v-6h4v6h4v-8h3L12 2zm0 14h-4v-6h8v6z" />
  </svg>
);

const ContactForm: React.FC = () => {
    return (
        <section id="contact"className="py-8 dark:bg-gray-800 dark:text-gray-50 pt-32">
            <h1 className="text-4xl font-bold pt-22 text-center pb-10">
                <span style={{ color: 'red' }}>Get</span> in touch
            </h1>

            <div className="grid max-w-7xl grid-cols-1 px-8 mx-auto lg:px-10 md:grid-cols-2 md:divide-x">
                <div className="py-8 md:py-0 md:px-8">

                    <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
                    <div className="space-y-4">
                        <p className="flex items-center mb-8">
                            <svg xmlns="https://loading.io/s/icon/elf94z.svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                            </svg>
                            <span>ARVAT Resturant

                                Covent Garden, London,
                                WC2H 9JQ, UNITED KINGDOM</span>
                        </p>
                        <p className="flex items-center mb-10">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5-V3z"></path>
                            </svg>
                            <span>123456789</span>
                        </p>
                        <p className="flex items-center mb-10">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2-V8.118z"></path>
                            </svg>
                            <span>contact@arvatresturant.com</span>
                        </p>
                    </div>
                </div>
                <form noValidate className="flex flex-col py-8 space-y-8 md:py-0 md:px-8">
                    <label className="block">
                        <span className="mb-2">Full name</span>
                        <input type="text" placeholder="Name" className="w-full pl-3 h-12 rounded-md shadow-md focus:ring focus:outline-none dark:bg-gray-800" />
                    </label>
                    <label className="block">
                        <span className="mb-2">Email address</span>
                        <input type="email" placeholder="name@email.com" className="w-full pl-3 h-12 rounded-md focus:ring shadow-md focus:outline-none dark:bg-gray-800"/>
                    </label>
                    <label className="block">
                        <span className="mb-2">Business Type</span>
                        <input type="text" placeholder="Your business type" className="w-full pl-3 h-12 rounded-md focus:ring shadow-md focus:outline-none dark:bg-gray-800" />
                    </label>
                    <label className="block">
                        <span className="mb-2">Message</span>
                        <textarea rows={5} className="w-full pl-3 h-28 rounded-md focus:ring focus:outline-none  dark:bg-gray-800 shadow-md "></textarea>
                    </label>
                    <button
                        type="button"
                        className="self-center px-10 py-4 text-lg rounded focus:ring hover:ring  dark:bg-violet-400 dark:text-gray-900"
                        style={{ color: 'red' }}
                    >
                        Submit
                    </button>
                    

                </form>
                
                
            </div>
            <Link href="/restaurant" passHref>
        <div className="flex items-center justify-center p-4">
         <span style={{ marginRight: '8px' }}>Go to Home</span>
          <HomeIcon style={{ width: '32px', height: '32px' }} />
        </div>
      </Link>
        </section>
    );
};


export default ContactForm;
