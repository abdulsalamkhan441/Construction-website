import React from "react";
import Page4Dback from "../assets/Page4Dback.png";
import AnimatedWrapper from "../components/common/animatedWrapper";
import Navbar from "../components/layout/navbar";
import PageLayout from "../components/layout/page-layout";
import Footer from "../components/section/footer";
import Commercial from "../context/Commercial";
import International from "../context/international";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="bg-gradient-to-r from-[#000000] to-[#3A3A3A]">
      <section className="shadow-[inset_0_0_50px_100px_rgba(0,0,0,0.25)]">
        <div className="h-screen m-0 p-0">
          <div
            style={{
              backgroundImage: `url(${Page4Dback})`,
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
              title="See What We’ve Done"
              description="Expertise in Office Buildings, Retail Fit-Outs, and Warehouses — Delivering Functional, Aesthetic, Efficient Spaces That Meet the Needs of Your Business."
              button1Text="Contect Us"
              button2Text="Request a Free Quote"
            />
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center">
        <div className="w-11/12">
          <div className="flex  justify-between items-center my-12 gap-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-white">
              Commercial Porjects
            </h2>
            <Link to="/contectUs">
              <a
                href="#"
                className="bg-gradient-to-r from-[#A79E97] via-[#A79E97] to-[#D3C3B9] text-white px-5 py-2 sm:px-8 sm:py-3 rounded-2xl text-base sm:text-lg font-light shadow-md hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
                style={{ fontFamily: "Roboto" }}
              >
                Contect Us
              </a>
            </Link>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8 py-6 pb-4">
        {Commercial.map((item, index) => (
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
      <section className="flex justify-center items-center">
        <div className="w-11/12">
          <div className="flex  justify-between items-center my-12 gap-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-white">
              International Porjects
            </h2>
            <Link to="/contectUs">
              <a
                href="#"
                className="bg-gradient-to-r from-[#A79E97] via-[#A79E97] to-[#D3C3B9] text-white px-5 py-2 sm:px-8 sm:py-3 rounded-2xl text-base sm:text-lg font-light shadow-md hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
                style={{ fontFamily: "Roboto" }}
              >
                Contect Us
              </a>
            </Link>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8 py-6 pb-4">
        {International.map((item, index) => (
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
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Projects;
