import React from "react";
import AnimatedWrapper from "../common/animatedWrapper";

const ProjectCards = ({ projectsData }) => {
  return (
    <>
      <AnimatedWrapper>
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-normal text-center text-white py-10"
          style={{ fontFamily: "Oswald" }}
        >
          Some Of Our Work
        </h2>
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
          {projectsData.map((item, index) => (
            <div className="flex justify-center items-center" key={index}>
              <div className="w-11/12 flex justify-center items-center">
                <div className="hidden lg:block">
                  <img
                    src={item.Mimage}
                    alt={item.title}
                    className="w-full h-fit object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="hidden md:block lg:hidden">
                  <img
                    src={item.Timage}
                    alt={item.title}
                    className="w-full h-fit object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="block md:hidden">
                  <img
                    src={item.Pimage}
                    alt={item.title}
                    className="w-full h-fit object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </section>
      </AnimatedWrapper>
    </>
  );
};

export default ProjectCards;
