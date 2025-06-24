import React from "react";
import element1 from "../../assets/element1.png";
import AnimatedWrapper from "../common/animatedWrapper";
import { Link } from "react-router-dom";

const CompanyOverview = () => {
  return (
    <AnimatedWrapper>
      <section className="w-full max-w-[1513px] mx-auto  py-16 flex justify-center items-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 w-11/12 py-10">
          <div className="lg:w-1/2 sm:mt-10">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-normal text-white mb-4"
              style={{ fontFamily: "Oswald" }}
            >
              Company Overview
            </h2>
            <p
              className="text-base sm:text-lg md:text-xl text-white leading-relaxed mb-6 font-light"
              style={{ fontFamily: "Roboto" }}
            >
              With over 10 years of experience, we deliver high-quality
              residential and commercial construction solutions. We’re known for
              reliability, craftsmanship, and delivering on time and on budget.
              Our team is dedicated to turning your vision into reality with
              personalized service and attention to detail every step of the
              way.
            </p>
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
              <Link to="/about">
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
          <div className="rounded-lg flex items-center justify-center">
            <img src={element1} alt="Company Overview" loading="lazy" />
          </div>
        </div>
      </section>
    </AnimatedWrapper>
  );
};

export default CompanyOverview;
