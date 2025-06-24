import React, { useRef } from "react";
import PageLayout from "../components/layout/page-layout.jsx";
import Navbar from "../components/layout/navbar.jsx";
import Page7Dback from "../assets/Page7Dback.png";
import emailjs from "@emailjs/browser";
import Footer from "../components/section/footer.jsx";
import AnimatedWrapper from "../components/common/animatedWrapper.jsx";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qs6a2ll",
        "template_seaifk4",
        form.current,
        "BnnaBp9YnRgdvSqtQ"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Try again later.");
          console.error(error);
        }
      );
  };

  return (
    <AnimatedWrapper>
      <div className="bg-gradient-to-r from-[#000000] to-[#3A3A3A]">
        <section className="shadow-[inset_0_0_50px_100px_rgba(0,0,0,0.25)]">
          <div className="h-screen m-0 p-0">
            <div
              style={{
                backgroundImage: `url(${Page7Dback})`,
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
                title="Reach Out Right Now"
                description="Our team is here to answer your questions and provide tailored construction solutions.Reach out today and let's build something great together."
                button1Text="Testimonial"
              />
            </div>
          </div>
        </section>
        <div className="flex justify-center items-center">
          <section className="w-[80%] min-h-screen flex flex-col md:flex-row justify-between items-center p-8">
            <div className="text-white text-center md:text-left md:mr-16 mb-10 md:mb-0">
              <h2 className="text-4xl font-bold mb-6">Contact</h2>
              <div className="mb-6">
                <h3 className="font-semibold text-lg">Address</h3>
                <p>Toronto, Canada</p>
              </div>
              <div className="mb-6">
                <h3 className="font-semibold text-lg">Phone</h3>
                <p>+1 431 788 2868</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="break-all">AbdulSalamwbd@gmail.com</p>
              </div>
            </div>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="bg-zinc-900 p-8 rounded shadow-lg w-full max-w-md shadow-[10px_-10px_13px_0_rgba(61,77,85,0.7),_-10px_10px_13px_0_rgba(255,255,255,0.35)] 
             transition-transform hover:scale-[1.02] duration-300"
            >
              <div className="mb-6">
                <label className="block text-white mb-2">Name</label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Enter Your name"
                  className="w-full px-3 py-2 bg-transparent border-b border-zinc-400 text-white placeholder-zinc-500 focus:outline-none"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Enter Your Email"
                  className="w-full px-3 py-2 bg-transparent border-b border-zinc-400 text-white placeholder-zinc-500 focus:outline-none"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-white mb-2">Message</label>
                <textarea
                  name="message"
                  placeholder="Enter Details"
                  className="w-full px-3 py-2 bg-transparent border-b border-zinc-400 text-white placeholder-zinc-500 focus:outline-none"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-yellow-600 to-yellow-800 text-white px-6 py-2 rounded hover:opacity-90 transition"
              >
                Send
              </button>
            </form> 
          </section>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </AnimatedWrapper>
  );
};

export default Contact;
