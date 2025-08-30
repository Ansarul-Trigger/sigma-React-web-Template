import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Use Cases", href: "#use-cases" },
  { name: "Implementation", href: "#implementation" },
  { name: "Insights", href: "#insights" },
  { name: "About us", href: "#about-us" },
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#contact" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);

      const sections = navLinks.map(link => document.querySelector(link.href));
      let current = "";
      sections.forEach((section, i) => {
        if (section && section.offsetTop <= scrollY + 80) {
          current = navLinks[i].href;
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b-2 ${
        scrolled
          ? "bg-[#fff] shadow-md border-b-2 border-[#1FA5AE]"
          : "bg-[#fff]/100 backdrop-blur-md border-[#1FA5AE]"
      }`}
    >
      <div className="container max-w-[1280px] mx-auto flex justify-between items-center px-1 py-2">
        <a href="/">
          <img src="Logo.png" alt="Your Logo" className="h-20 w-auto" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-base font-medium">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`transition-colors duration-300 ${
                active === link.href
                  ? "text-[#1FA5AE]"
                  : "text-[#1FA5AE] hover:text-[#1FA5AE]/80"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-[#1FA5AE]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#1FA5AE] shadow-sm">
          <nav className="flex flex-col px-4 py-4 space-y-3 text-sm font-medium text-[#1FA5AE]">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#1FA5AE]/80"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
