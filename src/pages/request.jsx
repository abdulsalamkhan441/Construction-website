import React from "react";
import PageLayout from "../components/layout/page-layout.jsx";
import Navbar from "../components/layout/navbar.jsx";
import Page6Dback from "../assets/Page6Dback.png";
import AnimatedWrapper from "../components/common/animatedWrapper.jsx";
import Footer from "../components/section/footer.jsx";
import RequestQuote from "../components/section/requestquote.jsx";

const Request = () => {
  return (
    <div className="bg-gradient-to-r from-[#000000] to-[#3A3A3A]">
      <section className="shadow-[inset_0_0_50px_100px_rgba(0,0,0,0.25)]">
        <div className="h-screen m-0 p-0">
          <div
            style={{
              backgroundImage: `url(${Page6Dback})`,
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
              title="Let’s Make It Happen"
              description="Tell us about your project, and we’ll deliver a custom quote tailored to your needs.Fast, reliable, and built with your vision in mind."
              button1Text="Contect Us"
            />
          </div>
        </div>
      </section>
      <section>
        <RequestQuote/>
      </section>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default Request;