import React from "react";
import element2 from "../../assets/element2.png";
import AnimatedWrapper from "../common/animatedWrapper";
import { Link } from "react-router-dom";

const WhyUs = () => {
  return (
    <AnimatedWrapper>
      <section className="w-full flex justify-center py-16">
      <div className="w-11/12 max-w-[1513px] flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="rounded-lg flex items-center justify-center lg:order-none order-2">
          <img src={element2} alt="Why Us" loading="lazy" />
        </div>

        <div className="xl:w-fit sm:mt-10 lg:order-none order-1 w-full">
          <div className="flex xl:justify-start flex-col [&>*]:w-fit">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-normal text-white mb-4"
              style={{ fontFamily: "Oswald" }}
            >
              Why Us
            </h2>
            <p
              className="text-base sm:text-lg md:text-xl text-white leading-relaxed mb-6 font-light"
              style={{ fontFamily: "Roboto" }}
            >
              We ensure our customers receive the best of all services.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <span className="text-white font-light">
                  • Licensed and Insured
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-white font-light">
                  • Transparent Pricing
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-white font-light">
                  • On-Time Project Delivery
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-white font-light">
                  • Certified Professionals
                </span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/projects">
                <a
                href="#"
                className="bg-gradient-to-r from-[#A79E97] via-[#A79E97] to-[#D3C3B9] text-white px-5 py-2 sm:px-8 sm:py-3 rounded-2xl text-base sm:text-lg font-light shadow-md hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
                style={{ fontFamily: "Roboto" }}
              >
                Projects
              </a>
              </Link>
              <Link to="/testimonial">
                <a
                href="#"
                className="underline underline-offset-4 text-white px-5 py-2 sm:px-8 sm:py-3 text-base sm:text-lg font-light hover:scale-105 transition duration-300 ease-in-out"
                style={{ fontFamily: "Roboto" }}
              >
                Learn more
              </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    </AnimatedWrapper>
  );
};

export default WhyUs;