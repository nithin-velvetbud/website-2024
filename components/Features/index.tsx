import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div
          className="delay-[300ms] duration-[600ms] taos:translate-x-[-200px] taos:opacity-0"
          data-taos-offset="400"
        ></div>
        <div className="container">
          <SectionTitle title="Our Expertise" paragraph="" center />

          <div className="grid grid-cols-1 gap-x-11 gap-y-14 md:grid-cols-2 lg:grid-cols-4">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>

        </div>



      </section>
    </>
  );
};

export default Features;
