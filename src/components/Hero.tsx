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
      <div className="relative z-10 flex flex-col items-center w-[1100px] -top-20">
       <h1 className="text-[45px] leading-tight  uppercase font-monument flex flex-wrap gap-x-1">
  {"Next Level AI Calling Agent".split("").map((char, i) => (
    <span
      key={i}
      className="text-white transition-all duration-500 ease-in-out
                 hover:text-transparent hover:bg-clip-text 
                 hover:bg-gradient-to-b hover:from-[#6613E1] hover:to-white"
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ))}
  <br />
  {"For Business & Agencies".split("").map((char, i) => (
    <span
      key={`second-${i}`}
      className="text-white transition-all duration-500 ease-in-out
                 hover:text-transparent hover:bg-clip-text 
                 hover:bg-gradient-to-b hover:from-[#6613E1] hover:to-white"
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
        {/* Background Image */}
        {/* <img
          src="/images/hero-bg.png"
          alt="Hero Background"
          className="w-full max-w-full h-auto object-cover mix-blend-screen"
        /> */}

        {/* Foreground Image (gif on top of hero-bg.png) */}
        <img
          src="/images/gif.gif"
          alt="gif"
          className="absolute -top-17 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1800px] h-[800px] object-cover mix-blend-screen"
        />

        {/* iPhone Image (overflows into next section) */}
        {/* <img
          src="/images/iPhone 15 Pro.png"
          alt="iPhone"
          className="absolute w-[1194px] h-[791px] -top-[70px] z-20"
        /> */}
      </div>
    </section>
  );
};

export default Hero;
