import React from "react";
import AnimatedWrapper from "../common/animatedWrapper";

const ServicesSection = () => {
  const ShadowBox = ({ title, description }) => {
    return (
      <div
        className="relative bg-[rgba(22,22,22,0.78)] rounded-lg transition-all duration-300 hover:scale-[1.02] w-full items-center flex"
        style={{
          padding: "clamp(2rem, 3.5vw, 4.5rem)",
          boxShadow: `
            20px 20px 13px 0px rgba(5, 22, 26, 0.8),
            20px -20px 13px 0px rgba(7, 46, 51, 0.8)
          `,
          filter: `
            drop-shadow(20px 20px 13px rgba(5, 22, 26, 0.5))
            drop-shadow(20px -20px 13px rgba(7, 46, 51, 0.5))
          `,
          maxWidth: "full",
          minHeight: "fit",
        }}
      >
        <div className="h-full flex flex-col p-3">
          <h3 className="text-base sm:text-lg md:text-xl font-light text-white mb-3">
            {title}
          </h3>
          <p className="text-sm sm:text-base font-light text-white leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    );
  };

  return (
    <AnimatedWrapper>
      <section className="w-full flex justify-center py-12 sm:py-16 px-4 sm:px-6">
      <div className="w-full max-w-7xl flex flex-col items-center gap-10">
        <div className="text-center mb-10 sm:mb-12 w-full">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-normal text-white mb-3"
            style={{ fontFamily: "Oswald" }}
          >
            Our Services
          </h2>
        </div>

        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            <div className="w-full md:[&:nth-child(3)]:col-span-2 md:[&:nth-child(3)]:mx-auto md:[&:nth-child(3)]:max-w-[calc(50%-1rem)]">
              <ShadowBox
                title="Residential Construction"
                description="We build high-quality homes tailored to your lifestyle, blending smart design, durability, and modern comfort."
              />
            </div>
            <div className="w-full">
              <ShadowBox
                title="Commercial Construction"
                description="We build high-quality homes tailored to your lifestyle, blending smart design, durability, and modern comfort."
              />
            </div>
            <div className="w-full md:pt-6 lg:pt-0 md:col-span-2 lg:col-span-1 md:mx-auto md:max-w-[calc(50%-1rem)] lg:max-w-full">
              <ShadowBox
                title="Renovations Remodeling"
                description="We build high-quality homes tailored to your lifestyle, blending smart design, durability, and modern comfort."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    </AnimatedWrapper>
  );
};

export default ServicesSection;