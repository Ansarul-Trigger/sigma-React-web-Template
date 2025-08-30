import React from "react";
import { Settings, Users, Briefcase } from "lucide-react";
import backgroundImage from "../assets/bg-image.jpg"; // replace with your image path

export default function ImplementationSection() {
  const cards = [
    {
      title: "Your Execution Set-up",
      description: "Set up your strategy and implement it using our signals.",
      who: "Investors with an execution set-up and in search of a custom strategy.",
      icon: <Settings className="w-6 h-6 text-white" />,
      gradient: "from-[#1FA5AE] to-[#1FA5AE]",
    },
    {
      title: "Implementation Partner",
      description: "Build your strategy and implement it with one of our partners.",
      who: "Investors in search of a custom strategy but in need of execution set-up.",
      icon: <Users className="w-6 h-6 text-white" />,
      gradient: "from-[#1FA5AE] to-[#1FA5AE]",
    },
    {
      title: "Fund / Certificate",
      description: "Invest in a prepared strategy wrapped in an investment vehicle.",
      who: "Investors in search of an out-of-the-box solution.",
      icon: <Briefcase className="w-6 h-6 text-white" />,
      gradient: "from-[#1FA5AE] to-[#1FA5AE]",
    },
  ];

  return (
    <section
      id="implementation"
      className="relative py-24 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content Container (1280px max width) */}
      <div className="mx-auto max-w-[1280px] text-center relative z-10">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-[#1FA5AE] tracking-tight">
          Implementation
        </h1>

        <h2 className="text-4xl sm:text-3xl font-extrabold text-white mb-4">
          Convenient Implementation
        </h2>
        <p className="text-white text-lg sm:text-xl mb-16">
          Choose the implementation set-up that suits your needs best.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {cards.map((card, i) => (
            <div
              key={i}
              className="relative flex flex-col items-center md:items-start p-8 rounded-3xl bg-white/10 backdrop-blur-md shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-full mb-6 bg-gradient-to-br ${card.gradient} shadow-lg`}
              >
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-3 text-center md:text-left">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-white/80 mb-4 text-center md:text-left">
                {card.description}
              </p>

              {/* Who is it for */}
              <p className="text-sm text-white/60 flex-grow text-center md:text-left">
                <span className="font-semibold">Who is it for:</span> {card.who}
              </p>

              {/* Button */}
              <div className="w-full flex justify-center md:justify-start mt-6">
                <button className="bg-[#1FA5AE] hover:bg-[#17888f] text-white font-semibold rounded-full px-6 py-2 shadow-lg hover:scale-105 transition-transform duration-300">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-20 bg-[#1FA5AE] rounded-3xl px-8 py-8 flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 shadow-xl">
          <p className="text-white text-lg font-semibold text-center md:text-left">
            Explore our use cases <br />
            <span className="text-white/80 text-sm opacity-90">
              Equity | FX | FI | Crypto | Commodity
            </span>
          </p>
          <div className="w-full md:w-auto flex justify-center md:justify-end">
            <button className="bg-white text-[#1FA5AE] font-semibold rounded-full px-6 py-2 shadow hover:scale-105 transition-transform duration-300">
              View Use Cases
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
