"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Mic } from "lucide-react";

const cards = [
  {
    id: 1,
    icon: <Mic className="w-7 h-7 text-white" />,
    title: "Voice Tone",
    description:
      "We adjust our speaking style and tone to match the listener, whether it's a business professional, teacher, or student, creating smooth, and effective communication for meetings, follow-ups, or learning sessions.",
  },
  {
    id: 2,
    icon: <span className="text-white font-semibold text-lg">A</span>,
    title: "Adaptability",
    description:
      "We seamlessly adapt to different environments and requirements, ensuring our communication style fits perfectly with your specific needs and context.",
  },
  {
    id: 3,
    icon: <span className="text-white text-xl">👥</span>,
    title: "Collaboration",
    description:
      "We believe in working together to achieve the best results, fostering teamwork and mutual understanding in every interaction.",
  },
  {
    id: 4,
    icon: <span className="text-white text-xl">🎯</span>,
    title: "Precision",
    description:
      "Every detail matters to us. We ensure accuracy and attention to detail in all our communications and deliverables.",
  },
  {
    id: 5,
    icon: <span className="text-white text-xl">⚡</span>,
    title: "Innovation",
    description:
      "We constantly evolve and embrace new technologies and methods to provide cutting-edge solutions for modern challenges.",
  },
];

export default function StackedCarousel() {
  const [current, setCurrent] = useState(2); // middle card
  const [isHovered, setIsHovered] = useState(false);

  // Auto-scroll functionality that pauses on hover
  useEffect(() => {
    if (isHovered) return; // Don't auto-scroll when user is interacting
    
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % cards.length);
    }, 3000); // Change card every 3 seconds
    
    return () => clearInterval(interval);
  }, [isHovered]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  // Function to determine if a card is clickable (visible on screen)
  const isCardClickable = (offset: number) => {
    return offset === 1 || offset === cards.length - 1 || offset === 2 || offset === cards.length - 2;
  };

  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-black transform scale-80 origin-top -mt-20 "> {/* 80% zoom effect */}
      <div 
       className="relative flex flex-col items-center justify-center w-[1200px] min-h-[780px] overflow-hidden text-white py-0 rounded-[32px] "

        style={{
          backgroundImage: "linear-gradient(rgba(48, 48, 48, 0.3), rgba(55, 53, 53, 0.3)), url('/images/lowBG.gif')",
          backgroundSize: "cover",
          backgroundPosition: "center 20%",
          backgroundRepeat: "no-repeat"
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative z-10 flex flex-col items-center w-full px-4">
          {/* Our Values Button */}
          <button 
            className="relative px-8 py-3 rounded-full font-semibold text-lg mb-6 shadow-lg overflow-hidden"
            style={{
              backgroundImage: "linear-gradient(rgba(102,19,225,0.8), rgba(102,19,225,0.8))",
              backgroundPosition: "center",
              color: "white"
            }}
          >
            Our Values
          </button>
          
          {/* Heading Text */}
          <h2 className="font-montserrat font-bold text-[19px] leading-[100%] text-center mb-12 max-w-2xl">
            Our values driven by relations
          </h2>

          {/* Carousel Container */}
          <div className="relative w-full max-w-5xl flex items-center justify-center h-[384px]">
            {cards.map((card, index) => {
              const offset = (index - current + cards.length) % cards.length;

              let scale = 0.7;
              let zIndex = 0;
              let translateX = 0;
              let opacity = 0;
              let cursor = "default";

              if (offset === 0) {
                scale = 1;
                zIndex = 50;
                translateX = 0;
                opacity = 1;
              } else if (offset === 1 || offset === cards.length - 1) {
                scale = 0.85;
                zIndex = 40;
                translateX = offset === 1 ? 256 : -256; // 80% of 320
                opacity = 0.9;
                cursor = "pointer";
              } else if (offset === 2 || offset === cards.length - 2) {
                scale = 0.75;
                zIndex = 30;
                translateX = offset === 2 ? 416 : -416; // 80% of 520
                opacity = 0.6;
                cursor = "pointer";
              }

              return (
                <motion.div
                  key={card.id}
                  initial={false}
                  animate={{
                    scale,
                    x: translateX,
                    zIndex,
                    opacity,
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute w-[320px] md:w-[640px] h-[320px] 
                            rounded-2xl shadow-2xl overflow-hidden flex flex-col 
                            items-center justify-center p-8 text-center bg-black bg-opacity-90 border border-gray-800"
                  style={{ cursor }}
                  onClick={() => isCardClickable(offset) && goToSlide(index)}
                >
                  <div className="relative flex flex-col items-center">
                    <div className="mb-6 flex items-center justify-center w-12 h-12 rounded-full bg-[#6613E1]">
                      {card.icon}
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold mb-4">
                      {card.title}
                    </h2>
                    <p className="text-gray-300 text-base max-w-md">
                      {card.description}
                    </p>
                  </div>
                  
                  {/* Click hint for side cards */}
                  {isCardClickable(offset) && (
                    <div className="absolute bottom-4 text-[#6613E1] text-sm font-medium opacity-70">
                      {/* Click to view */}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Combined Controls and Dots */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-gray-800 hover:bg-[#6613E1] transition"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            
            <div className="flex gap-3">
              {cards.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-3 h-3 rounded-full transition cursor-pointer ${
                    idx === current ? "bg-[#6613E1] scale-110" : "bg-gray-600"
                  }`}
                  onClick={() => goToSlide(idx)}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-gray-800 hover:bg-[#6613E1] transition"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}