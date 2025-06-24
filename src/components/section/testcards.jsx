import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import AnimatedWrapper from "../common/animatedWrapper";

const TestimonialCarousel = ({ testimonials }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="flex md:flex-row flex-col justify-center items-center px-4 py-8">
      <div className="w-11/12 flex flex-col md:flex-row items-center justify-center gap-10 relative">
        <div className="hidden lg:flex flex items-center justify-center gap-10">
          {[2, 1].map((offset, i) => {
            const index =
              (activeIndex - offset + testimonials.length) %
              testimonials.length;
            const heightClass = i === 0 ? "h-[65vh]" : "h-[75vh]";

            return (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className="group"
              >
                <div
                  className={`bg-[rgba(22,22,22,0.78)] p-4 rounded-lg w-[75px] hover:scale-[1.02] ${heightClass} flex items-center justify-center`}
                >
                  <h3
                    className="text-white text-3xl font-medium tracking-wider whitespace-nowrap -rotate-90 transform origin-center ml-10 h-[75px]"
                    style={{ fontFamily: "'PT Sans', sans-serif" }}
                  >
                    {testimonials[index].name}
                  </h3>
                </div>
              </button>
            );
          })}
        </div>
        <div
          {...swipeHandlers}
          className="bg-[rgba(22,22,22,0.78)] rounded-lg shadow-lg p-6 min-h-[85vh] w-[90%] text-center md:text-left shadow-[10px_-10px_13px_0_rgba(61,77,85,0.7),_-10px_10px_13px_0_rgba(255,255,255,0.35)] 
             transition-transform hover:scale-[1.02] duration-300 flex items-center gap-10 md:flex-row flex-col"
        >
          <div className="w-[100%] md:w-[50%]">
            <AnimatedWrapper>
              <h3
                className="text-xl sm:text-2xl md:text-3xl font-regular text-white mb-3 text-center"
                style={{ fontFamily: "'PT Sans', sans-serif" }}
              >
                {testimonials[activeIndex].name}
              </h3>
            </AnimatedWrapper>
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <AnimatedWrapper>
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < testimonials[activeIndex].rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                      }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </AnimatedWrapper>
              ))}
            </div>
            <AnimatedWrapper>
              <p
                className="text-lg sm:text-xl md:text-2xl font-light text-white mb-3 text-center"
                style={{ fontFamily: "Roboto" }}
              >
                {testimonials[activeIndex].content}
              </p>
            </AnimatedWrapper>
          </div>
          <div className="relative w-full md:w-[50%] aspect-[345/714] max-w-[345px] mx-auto rounded-xl shadow-lg overflow-hidden flex items-center justify-center">
            <AnimatedWrapper>
              <iframe
                src="https://assets.pinterest.com/ext/embed.html?id=2885187256772618&autoplay=1"
                width="345"
                height="714"
                frameBorder="0"
                scrolling="no"
                allow="autoplay"
                allowFullScreen
                title="Pinterest Video"
                className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
              ></iframe>
            </AnimatedWrapper>
          </div>
        </div>

      <div className="hidden lg:flex w-full md:w-1/4 text-right flex items-center justify-end">
        {[1, 2].map((offset, i) => {
          const index = (activeIndex + offset) % testimonials.length;
          const heightClass = i === 0 ? "h-[75vh]" : "h-[65vh]";

          return (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className="group block w-full transition-all hover:scale-[1.02] duration-300"
            >
              <div
                className={`bg-[rgba(22,22,22,0.78)] p-4 rounded-lg w-[75px] ${heightClass} flex items-center justify-center`}
              >
                <h3
                  className="text-white text-3xl font-medium tracking-wider whitespace-nowrap rotate-90 transform origin-center mr-8 h-[75px]"
                  style={{ fontFamily: "'PT Sans', sans-serif" }}
                >
                  {testimonials[index].name}
                </h3>
              </div>
            </button>
          );
        })}
      </div>
    </div>

  <AnimatedWrapper>
    <div className="flex justify-center gap-2 mt-6 md:hidden">
      {testimonials.map((_, index) => (
        <button
          key={index}
          onClick={() => setActiveIndex(index)}
          className={`w-3 h-3 rounded-full ${index === activeIndex ? "bg-blue-600" : "bg-gray-300"
            }`}
          aria-label={`Go to testimonial ${index + 1}`}
        />
      ))}
    </div>
  </AnimatedWrapper>
    </div >
  );
};

export default TestimonialCarousel;
