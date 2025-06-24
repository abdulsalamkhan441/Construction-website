import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <nav className="w-full max-w-[1513px] mx-auto px-4 sm:px-6 lg:px-8 relative z-50">
      <div className="flex items-center justify-between h-24">
        <div className="flex-shrink-0">
          <Link
            to="/"
            className="text-5xl text-white"
            style={{ fontFamily: "Great Vibes" }}
          >
            Logo
          </Link>
        </div>

        <div
          className="hidden lg:flex items-center space-x-8"
          style={{ fontFamily: "Montserrat" }}
        >
          <NavLink text="About Us" to="/about" />
          <NavLink text="Projects" to="/projects" />
          <NavLink text="Services" to="/services" />
          <NavLink text="Testimonial" to="/testimonial" />
          <IconLinks />
        </div>

        <div className="lg:hidden flex items-center space-x-4">
          <div className="flex space-x-4">
            <IconLinks />
          </div>
          <button
            onClick={() => setIsMenuOpen(true)}
            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 focus:outline-none"
            aria-label="Open menu"
          >
            <svg
              className="h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-fit z-40 bg-black/60 backdrop-blur-md">
          <div className="flex justify-end px-6 pt-6">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-white text-3xl hover:text-gray-300 focus:outline-none"
              aria-label="Close menu"
            >
              &times;
            </button>
          </div>

          <div
            className="pt-12 px-6 pb-4 space-y-4"
            style={{ fontFamily: "Montserrat" }}
          >
            <MobileNavLink text="About Us" to="/about" />
            <MobileNavLink text="Projects" to="/projects" />
            <MobileNavLink text="Services" to="/services" />
            <MobileNavLink text="Testimonial" to="/testimonial" />
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ text, to }) => (
  <Link
    to={to}
    className="text-white px-3 py-2 text-[20px] font-normal hover:underline decoration-2 underline-offset-4"
    style={{ fontFamily: "Montserrat" }}
  >
    {text}
  </Link>
);

const MobileNavLink = ({ text, to }) => (
  <Link
    to={to}
    className="block px-3 py-3 text-xl font-normal text-white hover:underline decoration-2 underline-offset-4"
    style={{ fontFamily: "Montserrat" }}
  >
    {text}
  </Link>
);

const IconLinks = () => (
  <>
    <Link to="/contectUs">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-[30px] h-[30px] text-white hover:text-gray-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    </Link>
    <a href="https://www.google.com/maps?q=1485+Portage+Avenue,+Winnipeg,+MB+R3G+0W4,+Canada">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-[30px] h-[30px] text-white hover:text-gray-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    </a>
  </>
);

export default Navbar;
