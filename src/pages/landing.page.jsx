import React from "react";
import PageLayout from "../components/layout/page-layout.jsx";
import Navbar from "../components/layout/navbar.jsx";
import Page1Dback from "../assets/Page1Dback.png";
import AnimatedWrapper from "../components/common/animatedWrapper.jsx";
import CompanyOverview from "../components/section/companyOver.jsx";
import ServicesSection from "../components/section/ourServices.jsx";
import WhyUs from "../components/section/whyus.jsx";
import ProjectCards from "../components/section/Projectcard.jsx";
import projectsData from "../context/projectData.jsx";
import CompanyMarquee from "../components/section/companies.jsx";
import Footer from "../components/section/footer.jsx";

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-r from-[#000000] to-[#3A3A3A]">
      <section className="shadow-[inset_0_0_50px_100px_rgba(0,0,0,0.25)]">
        <div className="h-screen m-0 p-0">
          <div
            style={{
              backgroundImage: `url(${Page1Dback})`,
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
            />
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-r from-[#0000000] to-[#3A3A3A]">
        <div>
          <CompanyOverview />
        </div>
        <div>
          <ServicesSection />
          <WhyUs />
          <main>
            <ProjectCards projectsData={projectsData} />
          </main>
          <CompanyMarquee />
          <Footer/>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
