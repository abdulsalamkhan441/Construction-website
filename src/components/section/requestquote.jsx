import React, { useState } from "react";
import emailjs from "emailjs-com";
import element10 from "../../assets/element10.png";
import AnimatedWrapper from "../common/animatedWrapper";

const RequestQuote = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    need: "",
    address: "",
    timeline: "",
    budget: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_qs6a2ll", 
        "template_seaifk4", 
        formData,
        "BnnaBp9YnRgdvSqtQ" 
      )
      .then(
        () => {
          alert("Message Sent Successfully");
          setFormData({
            name: "",
            phone: "",
            email: "",
            need: "",
            address: "",
            timeline: "",
            budget: "",
            description: "",
          });
          setLoading(false);
        },
        () => {
          alert("Message Failed. Try Again");
          setLoading(false);
        }
      );
  };

  return (
    <AnimatedWrapper>
      <section className="flex justify-center lg:justify-start items-center">
        <div className="w-11/12 min-h-screen flex items-center justify-center lg:justify-between py-10">
          <div className="hidden lg:block">
            <img src={element10} alt="" loading="lazy" />
          </div>
          <form
            onSubmit={sendEmail}
            className="bg-gradient-to-b from-[#1f1f1f] to-[#2e2e2e] text-white max-w-3xl w-full p-8 rounded-lg shadow-lg space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  placeholder="Enter Your name"
                  className="w-full px-3 py-2 bg-transparent border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  placeholder="Enter Your number"
                  className="w-full px-3 py-2 bg-transparent border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Enter Your Email"
                className="w-full px-3 py-2 bg-transparent border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-1">What Do You Need?</label>
              <select
                name="need"
                value={formData.need}
                className="w-full px-3 py-2 bg-transparent border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                onChange={handleChange}
                required
              >
                <option value="">Select one of these</option>
                <option>Architecture Design</option>
                <option>Interior Design</option>
                <option>Consultation</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm mb-1">Project Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                placeholder="Enter Your Project Address"
                className="w-full px-3 py-2 bg-transparent border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Timeline</label>
                <input
                  type="text"
                  name="timeline"
                  value={formData.timeline}
                  placeholder="1-2 years"
                  className="w-full px-3 py-2 bg-transparent border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Budget</label>
                <input
                  type="text"
                  name="budget"
                  value={formData.budget}
                  placeholder="~100k Cad"
                  className="w-full px-3 py-2 bg-transparent border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-1">Description</label>
              <textarea
                name="description"
                value={formData.description}
                rows="4"
                placeholder="Enter Details"
                className="w-full px-3 py-2 bg-transparent border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2 rounded-md bg-gradient-to-r from-yellow-600 to-black hover:opacity-90 transition-all text-white"
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </AnimatedWrapper>
  );
};

export default RequestQuote;
