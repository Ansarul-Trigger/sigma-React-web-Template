import { useState } from "react";
import { FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Replace with API call
  };

  return (
    <section id="contact" className="relative text-white py-20 px-6 md:px-24">
      {/* Background Image + Gradient Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f0f]/95 via-[#1a1a1a]/85 to-[#0f0f0f]/95 z-10"></div>
        <img
          src="/bg-contact.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Section Title */}
      <div className="relative z-20 max-w-[1280px] mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-[#1FA5AE] tracking-tight">
          Contact Us
        </h1>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-[1280px] mx-auto grid md:grid-cols-2 gap-16 items-start md:items-start text-center md:text-left">
        {/* Left Section */}
        <div className="space-y-6 md:space-y-6 flex flex-col items-center md:items-start">
          <h2 className="text-4xl md:text-5xl font-light leading-snug">
            Stay up to date with <br />
            <span
              className="font-semibold bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(to right, #1FA5AE, #1FA5AE)" }}
            >
              G-Research
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-md">
            Follow us on social platforms or subscribe to our newsletter for the
            latest news & events.
          </p>
          <div className="flex space-x-6 text-3xl justify-center md:justify-start">
            <a href="#" className="hover:text-[#1FA5AE] transition-colors">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-[#1FA5AE] transition-colors">
              <FaYoutube />
            </a>
            <a href="#" className="hover:text-[#1FA5AE] transition-colors">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Right Section (Form) */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#262626]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-10 space-y-6 mx-auto"
          style={{ maxWidth: "500px" }}
        >
          <h3 className="text-2xl font-semibold text-white text-center md:text-left">
            Subscribe to hear about the latest news and events
          </h3>

          {/* Inputs */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-[#1FA5AE] outline-none transition"
          />

          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-[#1FA5AE] outline-none transition"
          />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-[#1FA5AE] outline-none transition"
          />

          {/* Privacy + Checkbox */}
          <p className="text-sm text-gray-300 text-center md:text-left">
            Read our{" "}
            <a
              href="#"
              className="underline text-[#1FA5AE] hover:text-[#1FA5AE]"
            >
              privacy policy
            </a>
            . You can unsubscribe at any time.
          </p>

          <label className="flex items-center space-x-3 text-sm text-gray-200 justify-center md:justify-start">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="w-5 h-5 accent-[#1FA5AE]"
            />
            <span>Do you agree for G-Research to contact you?</span>
          </label>

          <p className="text-xs text-gray-400 leading-relaxed text-center md:text-left">
            By clicking submit below, you consent to allow G-Research to store
            and process the personal information submitted here in order to
            provide you with the updates requested.
          </p>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#1FA5AE] text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-transform duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
