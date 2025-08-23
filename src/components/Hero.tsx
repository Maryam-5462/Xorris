"use client";

import React from "react";
import ActionButton from "@/components/ActionButton";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center overflow-visible">
      {/* Background (grid effect) */}
      {/* <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:40px_40px] opacity-30 [transform:perspective(600px)_rotateX(60deg)] origin-top"></div>
      </div> */}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl leading-tight tracking-wide uppercase font-[var(--font-futura)]">
          Next Level AI Calling Agent <br /> For Business & Agencies
        </h1>

        <p className="text-gray-300 pb-3.5 font-montserrat mt-6 max-w-2xl text-sm sm:text-base md:text-lg">
          Human-Like voice agents powered by advanced AI, Ready to handle calls
          anytime - Inbound or Outbound - 24/7.
        </p>

        <ActionButton> Get Started </ActionButton>
      </div>

      {/* Phone Background Component */}
      <div className="relative mt-5 flex justify-center w-full overflow-visible">
        {/* Background Image */}
        <img
          src="/images/hero-bg.png"
          alt="Hero Background"
          className="w-full max-w-full h-auto object-cover mix-blend-screen"
        />

        {/* Foreground Image (gif on top of hero-bg.png) */}
        <img
          src="/images/gif.gif"
          alt="gif"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1474px] h-auto object-cover mix-blend-screen"
        />

        {/* iPhone Image (overflows into next section) */}
        <img
          src="/images/iPhone 15 Pro.png"
          alt="iPhone"
          className="absolute w-[1194px] h-[791px] -top-[20px] z-20"
        />
      </div>
    </section>
  );
};

export default Hero;
