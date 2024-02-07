import Link from "next/link";

const Hero = () => {
  const imageUrl = 'https://images.pexels.com/photos/8960464/pexels-photo-8960464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
  return (
    <>
      <section
        id="home"
        className="dark:bg-gray-dark relative z-10 overflow-hidden bg-white pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
        style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 text-3xl  font-bold leading-tight text-black dark:text-black sm:text-4xl sm:leading-tight md:text-5xl pt-56 md:leading-tight pb-24">
                {"Restaurant POS software made simple!"}
                </h1>
                <p className="dark:text-body-color-black mb-12 text-base !leading-relaxed text-black sm:text-lg md:text-xl pb-16">
               {" Manages all your restaurant operations efficiently so that you can focus on growing your brand, like a real boss!"}
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  
                 
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
        
        </div>
        <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
       
        </div>
      </section>
    </>
  );
};

export default Hero;