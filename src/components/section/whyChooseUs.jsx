import React from "react";
import AnimatedWrapper from "../common/animatedWrapper";

const FeatureCard = ({ title, description }) => {
    return (
      <AnimatedWrapper>
        <div className="bg-gray-900 bg-opacity-20 rounded-lg p-6 sm:p-8 h-full 
             shadow-[10px_-10px_13px_0_rgba(61,77,85,0.7),_-10px_10px_13px_0_rgba(255,255,255,0.35)] 
             transition-transform hover:scale-[1.02] duration-300">
        <p className="text-xl sm:text-2xl md:text-3xl font-light text-white mb-4">
          {title}
        </p>
        <p className="text-base sm:text-lg md:text-xl text-white font-light">
          {description}
        </p>
      </div>
      </AnimatedWrapper>
    );
  };

const WhyChooseUs = ({ title = "Why Choose Us", features }) => {
  return (
    <section className="w-11/12 mx-auto px-2 sm:px-4">
      <h3 className="text-3xl sm:text-4xl md:text-5xl font-normal text-white text-center mt-20 mb-16">
        {title}
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-6 sm:gap-10 lg:gap-14 mb-20">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
