import React from "react";
import Footerback from "../../assets/Footerback.png";
import { Link } from "react-router-dom";
import AnimatedWrapper from "../common/animatedWrapper";

const Footer = () => {
  return (
    <AnimatedWrapper>
      <div
        className="relative w-full bg-black/80"
        style={{
          backgroundImage: `url(${Footerback})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <footer className="relative max-w-7xl mx-auto px-6 py-12 text-white flex flex-col md:flex-row md:justify-between md:items-start gap-10">
          <div className="flex flex-col space-y-6 md:w-1/4">
            <Link to="/">
              <div
                className="text-5xl text-white cursor-pointer"
                style={{ fontFamily: "Great Vibes" }}
              >
                Logo
              </div>
            </Link>
            <div className="flex space-x-4 text-lg">
              <a
                aria-label="Facebook"
                className="hover:text-gray-300 transition-colors"
                href="#"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                aria-label="Instagram"
                className="hover:text-gray-300 transition-colors"
                href="#"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                aria-label="Twitter"
                className="hover:text-gray-300 transition-colors"
                href="#"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                aria-label="Pinterest"
                className="hover:text-gray-300 transition-colors"
                href="#"
              >
                <i className="fab fa-pinterest-p"></i>
              </a>
              <a
                aria-label="LinkedIn"
                className="hover:text-gray-300 transition-colors"
                href="#"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div className="flex md:w-1/2 justify-between">
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-white text-[20px] font-normal hover:underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white text-[20px] font-normal hover:underline"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-white text-[20px] font-normal hover:underline"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonial"
                  className="text-white text-[20px] font-normal hover:underline"
                  href="#"
                >
                  Testimonial
                </Link>
              </li>
            </ul>
            <ul className="space-y-2">
              <li>
                <a
                  className="text-white text-[20px] font-normal hover:underline"
                  href="https://www.google.com/maps?q=1485+Portage+Avenue,+Winnipeg,+MB+R3G+0W4,+Canada"
                >
                  Location
                </a>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-white text-[20px] font-normal hover:underline"
                  href="#"
                >
                  Project
                </Link>
              </li>
              <li>
                <Link
                  to="/contectUs"
                  className="text-white text-[20px] font-normal hover:underline"
                  href="#"
                >
                  Contect Us
                </Link>
              </li>
              <li>
              <Link
                  to="/RequestQuote"
                  className="text-white text-[20px] font-normal hover:underline"
                  href="#"
                >
                  Request A Quote
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:w-1/3 text-white text-[18px] leading-relaxed lg:pb-20 md:pb-12 pb-8">
            We are a trusted construction company delivering high-quality
            residential, commercial, and industrial projects with precision,
            safety, and integrity.
          </div>
        </footer>

        <div className="border-t border-gray-400/50 text-gray-300 text-xs max-w-7xl mx-auto px-6 py-3 text-center">
          All rights reserved 2025 — ASK Group of Companies
        </div>
      </div>
    </AnimatedWrapper>
  );
};

export default Footer;
