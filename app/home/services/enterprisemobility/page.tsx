import React from 'react';
import enterprisemobilitydata from "../../../config/enterprisemobilitydata.json";
import serviceweprovidedata from "../../../config/serviceweprovidedata.json"
import Card from '@/components/ui/Card';
const EnterpriseMobility = () => {
  return (
    <div className='w-[100vw] h-max justify-center'>


      <section className="dark:bg-gray-800 dark:text-gray-100 pt-36">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leadi sm:text-5xl text-blue-500">
              Our<span className="text-black"> Enterprise Mobility Solutions</span>
            </h1>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img src="https://dosvl4r8ie87v.cloudfront.net/assets/images/workflow-left-img.svg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
          </div>
        </div>
      </section>
      <div className='md:p-10 p-5 grid grid-cols-1 gap-2 md:gap-6 w-[100vw] h-max xl:p-20 lg:grid-cols-2 xl:grid-cols-3 sm:grid-cols-2'>
        {
          enterprisemobilitydata.map((wdata,i)=>{
            return(<>
              <Card key={i} title={wdata.title} description={wdata.description} image={wdata.image}/>
              </>
            )
          })
        }
     </div>   

      <div className='flex flex-col md:flex-row gap-4 w-[100%] h-max md:p-[3rem] py-3rem'>
  <div className='md:w-[400px] w-[100%] flex items-start text-3xl pt-4 md:text-5xl text-black font-medium px-4'>
   <span className='text-blue-600'>Mobility Excellence</span>  
  </div>
  <div className='w-[100%] xl:h-[600px] lg:h-[600px] sm:h-[600px] h-max flex justify-start flex-col items-center gap-4 px-4 pb-5 overflow-y-scroll '>
    {serviceweprovidedata.map((wdata2, i) => (
      <div key={i} className='w-[100%] h-max p-4 bg-white rounded flex items-center transition duration-300 ease-in-out hover:scale-110'>
        <img
          src={wdata2.image}
          alt={wdata2.title}
          style={{ maxWidth: '20%', height: 'auto', objectFit: 'cover' }}
          className='max-w-full mb-4 mr-4 '
        />
        <div className='flex flex-col'>
          <div className='text-xl md:text-2xl font-medium'>{wdata2.title}</div>
          <div className='text-justify'>{wdata2.description}</div>
        </div>
      </div>
    ))}
  </div>
</div>
</div>

  );
}

export default EnterpriseMobility;
