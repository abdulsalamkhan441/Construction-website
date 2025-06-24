import React from "react";
import WhyChooseUs from "./whyChooseUs";
import { whyChooseUsData } from "../../context/features";
import AnimatedWrapper from "../common/animatedWrapper";

const History = () => {
  return (
    <section className="py-0 flex justify-center items-center flex-col">
      <div className="mt-20 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-11/12 mx-auto text-center">
        <div className="flex justify-center items-center gap-6">
          <AnimatedWrapper>
            <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
              5k
            </p>
          </AnimatedWrapper>
          <AnimatedWrapper>
            <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
              Projects <br /> Done
            </p>
          </AnimatedWrapper>
        </div>
        <div className="flex justify-center items-center gap-6">
          <AnimatedWrapper>
            <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
              300
            </p>
          </AnimatedWrapper>
          <AnimatedWrapper>
            <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
              Projects <br /> On-Going
            </p>
          </AnimatedWrapper>
        </div>
        <div className="flex justify-center items-center gap-6">
          <AnimatedWrapper>
            <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
              23
            </p>
          </AnimatedWrapper>
          <AnimatedWrapper>
            <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
              Over <br /> Countries
            </p>
          </AnimatedWrapper>
        </div>
        <div className="flex justify-center items-center gap-6">
          <AnimatedWrapper>
            <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
              10B
            </p>
          </AnimatedWrapper>
          <AnimatedWrapper>
            <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
              Annual <br /> Revenue
            </p>
          </AnimatedWrapper>
        </div>
      </div>
      <WhyChooseUs features={whyChooseUsData} />;
    </section>
  );
};

export default History;
