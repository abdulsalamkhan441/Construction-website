import React, { useRef, useEffect } from "react";
import company1 from "../../assets/company1.png";
import company2 from "../../assets/company2.png";
import company3 from "../../assets/company3.png";
import company4 from "../../assets/company4.png";
import company5 from "../../assets/company5.png";
import AnimatedWrapper from "../common/animatedWrapper";

const CompanyMarquee = () => {
  const marqueeRef = useRef(null);
  const companies = [company1, company2, company3, company4, company5];

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const logos = marquee.innerHTML;
    marquee.innerHTML = logos + logos + logos;

    let position = 0;
    const speed = 1;

    function animate() {
      position -= speed;
      if (position <= -marquee.scrollWidth / 3) {
        position = 0;
      }
      marquee.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    }

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="py-20 overflow-hidden ">
      <div className="relative h-24">
        <div
          ref={marqueeRef}
          className="absolute whitespace-nowrap flex items-center"
        >
          {companies.map((company, index) => (
            <div key={index} className="mx-8 inline-flex items-center">
              <img
                src={company} 
                alt={`Company ${index + 1}`}
                className="h-16 object-contain max-w-[200px] md:max-w-[300px]"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyMarquee;
