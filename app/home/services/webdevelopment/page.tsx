import { url } from 'inspector';
import React from 'react';
import webdevelopmentdata from "../../../config/webdevelopmentdata.json"
import whatweoffer from "../../../config/whatweoffer.json"
  ;
import Card from '@/components/ui/Card';


const WebDevelopment = () => {
  return (
    <div className='w-[100vw] h-max   justify-center'>
      <div style={{
        backgroundImage: 'url("https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }} className='w-screen h-screen  flex items-center  justify-end text-6xl text-white text-center'  >
        <p className='w-max text-center'>Personifying Digital Engagement <br /> with Intutive Web Solution</p>
      </div>

      <div>
      <h2 className="text-6xl font-bold mb-6 text-center pt-12">Our Front-end Development Services</h2>

      <div className='grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3 pt-10'>
        {webdevelopmentdata.map((wdata, i) => (
          <Card key={i} title={wdata.title} description={wdata.decscription} image={wdata.image} />
        ))}
      </div>
  
        </div>
      <div className=' flex flex-col md:flex-row gap-4 w-[100%] h-max md:p-[3rem] py-3rem'>
        <div className='md:w-[400px] w-[100%] flex items-start text-3xl  pt-4 md:text-5xl text-black font-medium px-4 '>
          UI/UX Solutions
        </div>
        <div className='w-[100%] xl:h-[600px] lg:h-[600px] sm:h-[600px] h-max flex justify-start flex-col items-center gap-4 px-4 pb-5 overflow-y-scroll'>
          {
            whatweoffer.map((wdata2, i) => {

              return (
                <div key={i} className='w-full h-max p-4 bg-white rounded flex flex-col md:flex-row items-center transition duration-300 ease-in-out hover:scale-110'>
                  <img
                    src={wdata2.image}
                    alt={wdata2.title}
                    style={{ width: '20%', height: 'auto', objectFit: 'cover' }}
                    className='max-w-full mb-4 md:mb-0 md:mr-10'
                  />
                  <div className='flex flex-col'>
                    <div className='text-xl md:text-2xl font-medium'>{wdata2.title}</div>
                    <div className='text-justify pt-2'>{wdata2.decscription}</div>
                  </div>
                </div>

              )
            })
          }
        </div>

      </div>
    </div>
  );
}

export default WebDevelopment;
