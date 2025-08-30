import { useState } from "react";
import { BarChart3, LineChart, Bitcoin, Layers } from "lucide-react";

function UseCases() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    if (!email) {
      setMessage("Please enter a valid email.");
      return;
    }
    console.log("Newsletter email submitted:", email);
    setMessage("Thank you for subscribing!");
    setEmail(""); // Clear input
  };

  const cases = [
    {
      icon: <BarChart3 size={40} />,
      title: "Equity Downside Protection",
      subtitle: "Manage downside risk by dynamically adjusting your market exposure.",
      points: [
        "Dynamically align your market exposure to changing risk environments",
        "Mitigate downside risk while remaining invested as long as possible",
      ],
    },
    {
      icon: <LineChart size={40} />,
      title: "FX Risk Management",
      subtitle: "Manage the currency risk from international portfolios.",
      points: [
        "Systematic currency management based on actionable FX signals",
        "Actively position your portfolio to profit from FX market dynamics",
      ],
    },
    {
      icon: <Bitcoin size={40} />,
      title: "Crypto Investing",
      subtitle: "Time the crypto markets and manage crypto investing risks.",
      points: [
        "Systematic market signals on cryptocurrencies to time the market",
        "Gain better insights into the dynamics of cryptocurrencies",
      ],
    },
    {
      icon: <Layers size={40} />,
      title: "Tactical Asset Allocation",
      subtitle: "Upside capture to participate in favorable market environments.",
      points: [
        "Dynamic asset allocation signals based on quant models",
        "A systematic process to tactically adjust your strategic allocations",
      ],
    },
  ];

  return (
    <section id="use-cases" className="py-20 px-4 bg-[#1A1A1A] relative">
      <div className="mx-auto max-w-[1280px] text-center">
        {/* Section Heading */}
        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-[#1FA5AE] tracking-tight">
          Use Cases
        </h1>
        <h2 className="text-lg md:text-2xl font-medium mb-14 text-gray-300 max-w-3xl mx-auto">
          How our intelligence can be used in your business
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {cases.map((c, i) => (
            <div
              key={i}
              className="group border border-gray-700 rounded-2xl bg-[#222] hover:bg-[#2A2A2A] 
                         shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
            >
              <div className="bg-gradient-to-r from-[#1FA5AE] to-[#1FA5AE] p-6 flex justify-center text-white">
                {c.icon}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg md:text-xl font-semibold text-white mb-2 group-hover:text-[#1FA5AE] transition">
                  {c.title}
                </h3>
                <p className="text-sm md:text-base text-gray-400 mb-4">
                  {c.subtitle}
                </p>
                <ul className="space-y-2 mb-6 flex-1">
                  {c.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="text-sm md:text-base text-gray-300 flex items-start"
                    >
                      <span className="text-[#1FA5AE] mr-2">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
                <button
                  className="bg-[#1FA5AE] text-white text-sm font-semibold px-5 py-2 rounded-lg 
                             hover:bg-[#17888f] transition shadow-md hover:shadow-lg 
                             self-center md:self-start"
                >
                  READ MORE
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-700 pt-12 max-w-2xl mx-auto text-center">
          <h3 className="text-base sm:text-lg md:text-xl font-medium text-white mb-4">
            Subscribe to our newsletter
          </h3>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:flex-1 border border-gray-600 bg-[#2A2A2A] text-gray-200 
                         px-4 py-2 rounded-md focus:outline-none focus:ring-2 
                         focus:ring-[#1FA5AE] text-sm md:text-base"
            />
            <button
              type="submit"
              className="bg-[#1FA5AE] text-white px-6 py-2 rounded-md 
                         hover:bg-[#17888f] transition text-sm md:text-base shadow-md hover:shadow-lg"
            >
              Sign Up
            </button>
          </form>
          {message && (
            <p className="text-sm text-[#1FA5AE] mt-3">{message}</p>
          )}
          <p className="text-xs sm:text-sm text-gray-500 mt-4">
            By subscribing to our newsletter you accept our{" "}
            <a href="#" className="text-[#1FA5AE] underline hover:text-[#17888f]">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default UseCases;
