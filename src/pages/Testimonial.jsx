import React from "react";
import Footer from "../components/section/footer";
import PageLayout from "../components/layout/page-layout.jsx";
import Navbar from "../components/layout/navbar.jsx";
import Page5Dback from "../assets/Page5Dback.png";
import AnimatedWrapper from "../components/common/animatedWrapper.jsx";
import TestimonialCarousel from "../components/section/testcards.jsx";
import { Link } from "react-router-dom";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Henry Cole",
      title: "William Grant",
      rating: 5,
      content:
        "Excellent service and top-quality workmanship! The website was easy to navigate and most booking simple. Highly recommend this experienced, professional team for any residential or commercial construction project.",
      video: "https://www.w3schools.com/html/movie.mp4",
    },
    {
      name: "Oven James",
      title: "",
      rating: 5,
      content:
        "Another fantastic testimonial about the great service provided. The team was punctual and delivered beyond expectations.",
      video: "https://www.w3schools.com/html/movie.mp4",
    },
    {
      name: "George Mason",
      title: "Charles Bennett",
      rating: 4,
      content:
        "Good overall experience with some minor room for improvement. Would use their services again for future projects.",
      video: "https://www.w3schools.com/html/movie.mp4",
    },
    {
      name: "Tom Carry",
      title: "Charles Bennett",
      rating: 5,
      content:
        "Good overall experience with some minor room for improvement. Would use their services again for future projects.",
      video: "https://www.w3schools.com/html/movie.mp4",
    },
    {
      name: "Tom Carry",
      title: "Charles Bennett",
      rating: 5,
      content:
        "Good overall experience with some minor room for improvement. Would use their services again for future projects.",
      video: "https://www.w3schools.com/html/movie.mp4",
    },
  ];
  return (
    <div className="bg-gradient-to-r from-[#000000] to-[#3A3A3A]">
      <div>
        <section className="shadow-[inset_0_0_50px_100px_rgba(0,0,0,0.25)]">
          <div className="h-screen m-0 p-0">
            <div
              style={{
                backgroundImage: `url(${Page5Dback})`,
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
                title="Building Your Vision. Crafting With Precision."
                description="Reliable, experienced, and committed to quality — we bring your residential and commercial projects to life with unmatched craftsmanship and integrity."
                button1Text="Contect Us"
                button2Text="Request a Free Quote"
              ></PageLayout>
            </div>
          </div>
        </section>
      </div>
      <AnimatedWrapper>
        <section className="flex justify-center items-center">
          <div className="w-11/12 flex justify-between items-center my-12 gap-4">
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
        </section>
      </AnimatedWrapper>
      <section>
        <div className="mt-8">
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Testimonial;
