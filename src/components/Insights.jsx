import React, { useState } from "react";

// Import your local images
import insight1 from "../assets/insight1.jpg";
import insight2 from "../assets/insight2.jpg";
import insight3 from "../assets/insight3.jpg";
import insight4 from "../assets/insight4.jpg";
import insight5 from "../assets/insight5.jpg";
import insight6 from "../assets/insight6.jpg";
import insight7 from "../assets/insight7.jpg";

const Insights = [
  {
    img: insight1,
    title: "Sanostro puts Alpha-As-A-Service directly in the hands of investors",
  },
  {
    img: insight2,
    title:
      "Asset Management At A Crossroad – Wedged Between Big Data and A More Demanding End-Investor",
  },
];

const insights = [
  { img: insight3, title: "Watching A Systematic Model At Work" },
  { img: insight4, title: "Managing Equity Exposure in No-Man’s Land" },
  { img: insight5, title: "2 Case Studies – Family Office & Endowment" },
  {
    img: insight6,
    title: "Various Ways to Prepare for the Bear – Risk Management Overview",
  },
  {
    img: insight7,
    title: "Systematic Investment Management – What Is It and How Is It Applied",
  },
];

export default function InsightsSection() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setMessage("Please enter a valid email.");
      return;
    }
    console.log("Newsletter email submitted:", email);
    setMessage("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <section
      id="insights"
      className="bg-gradient-to-b from-[#18252B] via-[#1E333A] to-[#18252B] px-6 md:px-12 lg:px-24 py-12 font-sans min-h-screen"
    >
      {/* Container for 1280px max width */}
      <div className="mx-auto max-w-[1280px]">
        {/* Header */}
        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-[#1FA5AE] tracking-tight text-center">
          Insights
        </h1>

        {/* Featured Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {Insights.map((item, index) => (
            <div
              key={index}
              className="group rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6 bg-[#1A2633]">
                <p className="text-xs uppercase text-gray-300 mb-2 tracking-wide">
                  Insight
                </p>
                <h2 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h2>
                <a
                  href="#"
                  className="text-[#1FA5AE] font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Read Insight →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="bg-[#1A2633] rounded-2xl shadow-md p-6 md:p-8 mb-14">
          <h3 className="text-xl font-semibold mb-4 text-white">
            Subscribe to our newsletter
          </h3>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row items-center gap-4"
          >
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-500 rounded-lg px-4 py-3 w-full md:w-auto flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1FA5AE]"
            />
            <button
              type="submit"
              className="bg-[#1FA5AE] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#17888f] transition"
            >
              Sign Up
            </button>
          </form>
          {message && <p className="text-xs text-[#1FA5AE] mt-2">{message}</p>}
          <p className="text-xs text-gray-400 mt-3">
            By subscribing to our newsletter you accept our{" "}
            <a href="#" className="text-[#1FA5AE]">
              Privacy Policy
            </a>
          </p>
        </div>

        {/* Insights List */}
        <div className="space-y-6">
          {insights.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden group bg-[#1A2633]"
            >
              <div className="md:w-48 h-44 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-5 flex flex-col justify-center flex-1">
                <p className="text-xs uppercase text-gray-300 mb-1">Insight</p>
                <h2 className="text-lg font-semibold mb-2 text-white">
                  {item.title}
                </h2>
                <a
                  href="#"
                  className="text-[#1FA5AE] font-semibold hover:underline"
                >
                  Read Insight →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
