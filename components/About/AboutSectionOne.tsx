import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

// Replace the check icon with a different vector image
const aboutIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" className="fill-current">
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {aboutIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="aboutone" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              {/* Change the section title and paragraph */}
              <SectionTitle
                title="About Us"
                paragraph="Where innovation meets excellence in the world of software solutions. We are a dynamic and forward-thinking software company committed to delivering cutting-edge technology that empowers businesses and individuals alike."
                mb="44px"
              />

              <div
                className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Customer-Centric Approach" />
                    <List text=" Innovation:" />
                    <List text="Quality Assurance" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Agile Methodology" />
                    <List text="Passionate team" />
                    <List text="Global impact" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">


              <div
                className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
                data-wow-delay=".15s"
              >
                {/* Example: Autoplay Giphy GIF */}
                <img
                  src="/images/about/Aboutus.svg" // Replace with your actual Giphy GIF URL
                  alt="Tech GIF"
                  className="w-full h-auto drop-shadow-three dark:hidden dark:drop-shadow-none"
                />
                <img
                  src="/images/about/Untitled-design-unscreen.gif" // Replace with your actual Giphy GIF URL
                  alt="Tech GIF"
                  className="w-full h-auto drop-shadow-three hidden dark:block dark:drop-shadow-none"
                />
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
