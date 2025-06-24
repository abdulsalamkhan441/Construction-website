import React from "react";
import AnimatedWrapper from "../common/animatedWrapper";

const OurJourney = () => {
  const milestones = [
    {
      year: "1959",
      title: "Company Founded",
      description:
        "We launched operations in California in 1959, laying the foundation for a legacy rooted in craftsmanship, trust, and long-term client relationships built through quality construction.",
    },
    {
      year: "1975",
      title: "Expansion",
      description:
        "In 1975, we grew beyond residential projects and entered the commercial sector, delivering high-impact builds and establishing a strong reputation for efficiency and excellence.",
    },
    {
      year: "1990",
      title: "National Growth",
      description:
        "By 1990, we had expanded operations across the U.S., managing large-scale infrastructure and industrial projects while staying committed to quality and dependable service delivery.",
    },
    {
      year: "2010",
      title: "Sustainable Practices",
      description:
        "We adopted sustainable construction in 2010, implementing eco-conscious materials, green certifications, and energy-efficient technologies to reduce our environmental footprint responsibly.",
    },
    {
      year: "2020",
      title: "Global Presence",
      description:
        "In 2020, we expanded globally, integrating advanced digital tools and scalable project systems to meet international standards and deliver solutions with speed and precision worldwide.",
    },
  ];

  return (
    <div>
      <div className="w-[0%] hidden lg:block lg:w-full">
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <AnimatedWrapper>
            <div className="text-center mb-12 md:mb-16">
              <h1
                className="text-3xl sm:text-4xl md:text-5xl font-normal text-white mb-4"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                Our Journey
              </h1>
            </div>
          </AnimatedWrapper>

          <div className="relative h-[800px] md:h-[1000px]">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300"></div>

            {milestones
              .sort((a, b) => a.year - b.year)
              .map((milestone, index) => {
                const topPosition = `${index * 20 + 5}%`;
                const isLeft = index % 2 === 0;

                return (
                  <div
                    key={milestone.year}
                    className="absolute w-full"
                    style={{ top: topPosition }}
                  >
                    <div
                      className={`absolute h-0.5 w-16 bg-gray-500 top-1/2 transform -translate-y-1/2 ${
                        isLeft ? "left-1/2 -translate-x-full" : "left-1/2"
                      }`}
                    ></div>

                    <AnimatedWrapper>
                      <div
                        className={`absolute top-1/2 transform -translate-y-1/2 ${
                          isLeft
                            ? "right-1/2 pr-20 text-right"
                            : "left-1/2 pl-20 text-left"
                        } w-1/2`}
                      >
                        <div className="bg-transparent p-4 rounded-lg">
                          <div className="flex flex-col gap-2">
                            <div className="text-xl sm:text-2xl md:text-3xl font-normal text-white">
                              {milestone.year} -{" "}
                              <span className="font-roboto">
                                {milestone.title}
                              </span>
                            </div>
                            <p
                              className="text-white text-base sm:text-lg md:text-xl font-light leading-relaxed"
                              style={{ fontFamily: "'Roboto', sans-serif" }}
                            >
                              {milestone.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </AnimatedWrapper>
                  </div>
                );
              })}
          </div>
        </section>
      </div>
      <div className="w-[100%] block lg:hidden lg:w-[0%]">
        <section className="w-full max-w-full px-4 py-16 block lg:hidden lg:w-[0%]">
          <AnimatedWrapper>
            <div className="text-center mb-12">
              <h1
                className="text-3xl sm:text-4xl font-normal text-white mb-4"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                Our Journey
              </h1>
            </div>
          </AnimatedWrapper>

          <div className="relative h-[800px]">
            <div className="absolute left-0 transform -translate-x-1/2 h-full w-0.5 bg-gray-300"></div>

            {milestones
              .sort((a, b) => a.year - b.year)
              .map((milestone, index) => {
                const topPosition = `${index * 20 + 5}%`;
                return (
                  <div
                    key={milestone.year}
                    className="absolute w-full"
                    style={{ top: topPosition }}
                  >
                    <div className="absolute h-0.5 w-6 bg-gray-500 top-1/2 transform -translate-y-1/2 left-1/10"></div>

                    <AnimatedWrapper>
                      <div className="absolute top-1/2 transform -translate-y-1/2 left-0 pl-4 text-left w-full">
                        <div className="bg-transparent p-4 rounded-lg">
                          <div className="flex flex-col gap-2">
                            <div className="text-xl sm:text-2xl font-normal text-white">
                              {milestone.year} -{" "}
                              <span className="font-roboto">
                                {milestone.title}
                              </span>
                            </div>
                            <p
                              className="text-white text-base sm:text-lg font-light leading-relaxed"
                              style={{ fontFamily: "'Roboto', sans-serif" }}
                            >
                              {milestone.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </AnimatedWrapper>
                  </div>
                );
              })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default OurJourney;
