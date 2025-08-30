import { FaLinkedin, FaEnvelope, FaArrowUp, FaMapMarkerAlt } from "react-icons/fa";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Use Cases", href: "#use-cases" },
  { name: "Implementation", href: "#implementation" },
  { name: "Insights", href: "#insights" },
  { name: "About us", href: "#about-us" },
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setShowScroll(true);
      else setShowScroll(false);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white text-gray-700 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#1FA5AE]/10 via-transparent to-[#1FA5AE]/5 pointer-events-none" />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-14 relative z-10 flex flex-col md:flex-row md:items-start gap-10 md:gap-0">
        {/* Logo / Brand */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <img src="Logo.png" alt="Company Logo" className="h-20 w-auto object-contain" />
          </div>
          <p className="mt-5 text-sm leading-relaxed max-w-sm text-gray-600">
            Pioneering quantitative frontiers through advanced research,
            high-performance computing, and innovative data science solutions.
          </p>
          <div className="flex gap-4 mt-6 justify-center md:justify-start">
            <a href="#" className="p-2 rounded-full bg-gray-200 hover:bg-[#1FA5AE] text-gray-700 hover:text-white transition">
              <FaLinkedin size={18} />
            </a>
            <a href="mailto:info@example.com" className="p-2 rounded-full bg-gray-200 hover:bg-[#1FA5AE] text-gray-700 hover:text-white transition">
              <FaEnvelope size={18} />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 flex justify-center md:justify-center">
          <div>
            <h4 className="text-gray-900 font-semibold mb-5 tracking-wide text-center">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm text-center">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-[#1FA5AE] transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal + Location */}
        <div className="flex-1 flex flex-col items-center md:items-end text-center md:text-right">
          <div>
            <h4 className="text-gray-900 font-semibold mb-5 tracking-wide">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-[#1FA5AE] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#1FA5AE] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#1FA5AE] transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
          <div className="mt-6 space-y-2 text-sm text-gray-600">
            <p className="flex items-center gap-2 justify-center md:justify-end">
              <FaMapMarkerAlt className="text-[#1FA5AE]" /> New York, NY
            </p>
            <p className="flex items-center gap-2 justify-center md:justify-end">
              <FaMapMarkerAlt className="text-[#1FA5AE]" /> London, UK
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 text-center md:text-left gap-2">
          <p>© 2024 Sigma Borealis. All rights reserved.</p>
          <p>Quantitative Research & Technology</p>
        </div>
      </div>

      {/* Scroll To Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-[#1FA5AE] text-white shadow-lg 
            hover:bg-[#138F8F] transition transform hover:scale-110 
            animate-bounce-smooth opacity-90 hover:opacity-100 z-50"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={18} />
        </button>
      )}
    </footer>
  );
}
