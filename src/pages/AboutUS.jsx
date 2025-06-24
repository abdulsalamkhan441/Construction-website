import React from "react";
import PageLayout from "../components/layout/page-layout.jsx";
import Navbar from "../components/layout/navbar.jsx";
import Page2Dback from "../assets/Page2Dback.png";
import AnimatedWrapper from "../components/common/animatedWrapper.jsx";
import Footer from "../components/section/footer.jsx";
import History from "../components/section/History.jsx";
import OurJourney from "../components/section/ourJourney.jsx";

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-r from-[#000000] to-[#3A3A3A]">
      <section className="shadow-[inset_0_0_50px_100px_rgba(0,0,0,0.25)]">
        <div className="h-screen m-0 p-0">
          <div
            style={{
              backgroundImage: `url(${Page2Dback})`,
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
              title="Who We Are"
              description="We are a skilled construction company committed to building high-quality residential, commercial, and industrial projects. With a focus on craftsmanship, safety, and client satisfaction, we manage every stage of construction with care and precision."
              button1Text="Contect Us"
              button2Text="Request a Free Quote"
            />
          </div>
        </div>
      </section>
      <section>
        <OurJourney className='hidden w-[0%] lg:block lg:w-full' />
        <History/>
      </section>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default AboutUs;