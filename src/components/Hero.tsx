"use client";

import React, { useState } from "react";
import ActionButton from "@/components/ActionButton";

const Hero: React.FC = () => {
  // Define the type for hoverStates
  const [hoverStates, setHoverStates] = useState<Record<string, boolean>>({});
  
  const handleMouseEnter = (index: number, line: string) => {
    setHoverStates(prev => ({ ...prev, [`${line}-${index}`]: true }));
  };

  const handleMouseLeave = (index: number, line: string) => {
    // Add a small delay before removing hover state for smoother transitions
    setTimeout(() => {
      setHoverStates(prev => ({ ...prev, [`${line}-${index}`]: false }));
    }, 50);
  };

  // Pre-calculate the text to avoid inline splitting
  const line1 = "Next Level AI Calling Agent".split("");
  const line2 = "For Business & Agencies".split("");

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center overflow-visible">
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-[1100px] -top-20">
        <h1 className="text-[45px] leading-tight uppercase font-monument flex flex-wrap justify-center gap-x-1">
          {line1.map((char, i) => (
            <span
              key={i}
              className={`inline-block transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
                hoverStates[`line1-${i}`] 
                  ? "text-transparent bg-clip-text bg-gradient-to-b from-[#6613E1] to-white transform -translate-y-[2px] scale-105" 
                  : "text-white transform translate-y-0 scale-100"
              }`}
              onMouseEnter={() => handleMouseEnter(i, 'line1')}
              onMouseLeave={() => handleMouseLeave(i, 'line1')}
              style={{ 
                transitionProperty: 'transform, color, background, text-shadow',
                willChange: 'transform, color, background',
                textShadow: hoverStates[`line1-${i}`] 
                  ? '0 0 10px rgba(102, 19, 225, 0.5), 0 0 20px rgba(102, 19, 225, 0.3)' 
                  : 'none'
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
          <br />
          {line2.map((char, i) => (
            <span
              key={`second-${i}`}
              className={`inline-block transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
                hoverStates[`line2-${i}`] 
                  ? "text-transparent bg-clip-text bg-gradient-to-b from-[#6613E1] to-white transform -translate-y-[2px] scale-105" 
                  : "text-white transform translate-y-0 scale-100"
              }`}
              onMouseEnter={() => handleMouseEnter(i, 'line2')}
              onMouseLeave={() => handleMouseLeave(i, 'line2')}
              style={{ 
                transitionProperty: 'transform, color, background, text-shadow',
                willChange: 'transform, color, background',
                textShadow: hoverStates[`line2-${i}`] 
                  ? '0 0 10px rgba(102, 19, 225, 0.5), 0 0 20px rgba(102, 19, 225, 0.3)' 
                  : 'none'
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        <p className="text-gray-300 pb-3.5 font-montserrat mt-6 max-w-2xl text-sm sm:text-base md:text-lg">
          Human-Like voice agents powered by advanced AI, Ready to handle calls
          anytime - Inbound or Outbound - 24/7.
        </p>
        
        <div className="flex gap-2 relative top-10">
          <ActionButton>View pricing</ActionButton>
          <ActionButton>Try a conversation</ActionButton>
        </div>
      </div>

      {/* Phone Background Component */}
      <div className="relative mt-5 flex justify-center w-full overflow-visible">
        {/* Foreground Image (gif on top of hero-bg.png) */}
        <img
          src="/images/gif.gif"
          alt="gif"
          className="absolute -top-17 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1800px] h-[800px] object-cover mix-blend-screen"
        />
      </div>
    </section>
  );
};

export default Hero;