import React from "react";
import bgHero from "../assets/bg-hero.png";

const HeroSection = () => {
  return (
    <section className="flex justify-center bg-gradient-to-br from-[#010920] via-[#0A142D] to-[#010920]">
      <div className="w-full max-w-[1410px] grid grid-cols-1 md:grid-cols-2 items-center min-h-[85vh] md:min-h-[90vh] relative overflow-hidden">
        
        {/* Left side text */}
        <div className="flex flex-col justify-center h-full px-6 sm:px-12 md:px-20 z-20 text-white text-center md:text-left bg-gradient-to-b md:bg-none from-[#010920]/95 via-[#0A142D]/90 to-[#010920]/95 md:from-transparent md:via-transparent md:to-transparent py-12 md:py-0">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-snug md:leading-tight">
            Systems.<br />Success
          </h1>
          <p className="mt-4 sm:mt-6 text-[#c9d1d9] max-w-xs sm:max-w-sm md:max-w-md mx-auto md:mx-0 text-sm sm:text-base md:text-lg">
            A pretall imperairyulse AI and time.
          </p>
        </div>

        {/* Right side background image */}
        <div
          className="w-full h-[60vh] sm:h-[70vh] md:h-full bg-contain bg-center bg-no-repeat z-10"
          style={{ backgroundImage: `url(${bgHero})` }}
        ></div>
      </div>
    </section>
  );
};

export default HeroSection;
