import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PageLayout = ({ title, description, button1Text, button2Text }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="flex-grow flex items-center">
        <div className="max-w-2xl mx-4 sm:mx-6 px-4 sm:px-6 py-12">
          <div className="text-white mb-12">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-normal mb-6 w-full"
              variants={itemVariants}
              style={{ fontFamily: "Oswald" }}
            >
              {title}
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mb-10 font-light"
              variants={itemVariants}
              style={{ fontFamily: "Roboto" }}
            >
              {description}
            </motion.p>
          </div>

          <motion.div
            className="flex flex-wrap gap-4 sm:gap-6"
            variants={itemVariants}
          >
            <Link to="/contectUs">
              <button
                className="bg-gradient-to-r from-[#A79E97] via-[#A79E97] to-[#D3C3B9] text-white px-5 py-2 sm:px-8 sm:py-3 rounded-2xl text-base sm:text-lg font-light shadow-md hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
                style={{ fontFamily: "Roboto" }}
              >
                {button1Text}
              </button>
            </Link>
            <Link to="/RequestQuote">
              <button
                className="underline underline-offset-4 text-white px-5 py-2 sm:px-8 sm:py-3 text-base sm:text-lg font-light hover:scale-105 transition duration-300 ease-in-out"
                style={{ fontFamily: "Roboto" }}
              >
                {button2Text}
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default PageLayout;
