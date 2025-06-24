import React from "react";
import Page3Dback from "../assets/page3Dback.png";
import AnimatedWrapper from "../components/common/animatedWrapper";
import Navbar from "../components/layout/navbar";
import PageLayout from "../components/layout/page-layout";
import Footer from "../components/section/footer";
import element4 from "../assets/element4.png";
import element5 from "../assets/element5.png";
import element6 from "../assets/element6.png";
import element7 from "../assets/element7.png";
import element8 from "../assets/element8.png";
import element9 from "../assets/element9.png";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="bg-gradient-to-r from-[#000000] to-[#3A3A3A]">
      <section className="shadow-[inset_0_0_50px_100px_rgba(0,0,0,0.25)]">
        <div className="h-screen m-0 p-0">
          <div
            style={{
              backgroundImage: `url(${Page3Dback})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="h-full w-full"
          >
            <AnimatedWrapper>
              <Navbar />
            </AnimatedWrapper>
            <PageLayout
              title="What We Do"
              description="Providing Reliable and Trusted Construction Solutions for Residential, Commercial, and Industrial Projects — Delivering Quality, Safety, and Efficiency Every Step of the Way."
              button1Text="Contact Us"
              button2Text="Request a Free Quote"
            />
          </div>
        </div>
      </section>
      <AnimatedWrapper>
        <section className="flex flex-col justify-center items-center py-16">
          <div className="w-11/12">
            <div className="flex  justify-between items-center mb-12 gap-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-white">
                Our Core Services
              </h2>
              <Link to="/projects">
                <a
                  href="#"
                  className="bg-gradient-to-r from-[#A79E97] via-[#A79E97] to-[#D3C3B9] text-white px-5 py-2 sm:px-8 sm:py-3 rounded-2xl text-base sm:text-lg font-light shadow-md hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
                  style={{ fontFamily: "Roboto" }}
                >
                  Projects
                </a>
              </Link>
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-stretch gap-8 mb-8">
              <div
                className="w-full lg:w-[45%] h-full relative rounded-xl shadow-[10px_-10px_13px_0_rgba(61,77,85,0.7),_-10px_10px_13px_0_rgba(255,255,255,0.35)] 
       transition-transform hover:scale-[1.02] duration-300 flex flex-col"
              >
                <div className="m-6 sm:m-8 md:m-10">
                  <div className="gap-6 flex items-center mb-4">
                    <img
                      className="w-[70px] h-[70px]"
                      src={element8}
                      alt=""
                      loading="lazy"
                    />
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-white w-fit">
                      Residential Construction
                    </h3>
                  </div>
                  <p className="text-base sm:text-lg md:text-xl text-white font-light leading-relaxed w-[90%]">
                    Specializing in Custom Homes, Renovations, and Extensions —
                    Tailored Solutions Designed to Reflect Your Vision, Enhance
                    Functionality, and Add Lasting Value to Your Property.
                  </p>
                </div>
              </div>

              <div className="w-full lg:w-[45%] h-auto aspect-[2/1] relative transition-all duration-300 hover:scale-[1.02] flex">
                <div className="w-1/2 h-full flex items-center overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={element4}
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="w-1/2 h-full flex items-center overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={element5}
                    alt=""
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-stretch gap-8">
              <div className="w-full lg:w-[45%] h-auto aspect-[2/1] relative transition-all duration-300 hover:scale-[1.02] flex flex-col">
                <div className="w-full h-1/2 flex items-center overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={element6}
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="w-full h-1/2 flex items-center overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={element7}
                    loading="lazy"
                    alt=""
                  />
                </div>
              </div>

              <div
                className="w-full lg:w-[45%] h-full relative rounded-xl shadow-[10px_-10px_13px_0_rgba(61,77,85,0.7),_-10px_10px_13px_0_rgba(255,255,255,0.35)] 
       transition-transform hover:scale-[1.02] duration-300 flex flex-col"
              >
                <div className="m-6 sm:m-8 md:m-10">
                  <div className="gap-6 flex items-center mb-4">
                    <img
                      className="w-[70px] h-[70px]"
                      src={element9}
                      alt=""
                      loading="lazy"
                    />
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-white w-fit">
                      Commercial Projects
                    </h3>
                  </div>
                  <p className="text-base sm:text-lg md:text-xl text-white font-light leading-relaxed w-[90%]">
                    Expertise in Office Buildings, Retail Fit-Outs, and
                    Warehouses — Delivering Functional, Aesthetic, and Efficient
                    Commercial Spaces That Meet the Unique Needs of Your
                    Business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedWrapper>
      <Footer />
    </div>
  );
};

export default Services;
