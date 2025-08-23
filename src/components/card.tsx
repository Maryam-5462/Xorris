"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Mic } from "lucide-react";

type ValueCard = {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  leftText: string;
  rightText: string;
};

const values: ValueCard[] = [
  {
    id: 1,
    icon: <Mic className="w-7 h-7 text-white" />,
    title: "Voice Tone",
    description:
      "We adjust our speaking style and tone to match the listener, whether it's a business professional, teacher, or student, creating smooth, and effective communication for meetings, follow-ups, or learning sessions.",
    leftText: "Softly Spoken",
    rightText: "Strong",
  },
  {
    id: 2,
    icon: <span className="text-white font-semibold text-lg">A</span>,
    title: "Adaptability",
    description:
      "We seamlessly adapt to different environments and requirements, ensuring our communication style fits perfectly with your specific needs and context.",
    leftText: "Flexible",
    rightText: "Consistent",
  },
  {
    id: 3,
    icon: <span className="text-white text-xl">👥</span>,
    title: "Collaboration",
    description:
      "We believe in working together to achieve the best results, fostering teamwork and mutual understanding in every interaction.",
    leftText: "Individual",
    rightText: "Team-focused",
  },
  {
    id: 4,
    icon: <span className="text-white text-xl">🎯</span>,
    title: "Precision",
    description:
      "Every detail matters to us. We ensure accuracy and attention to detail in all our communications and deliverables.",
    leftText: "Broad",
    rightText: "Detailed",
  },
  {
    id: 5,
    icon: <span className="text-white text-xl">⚡</span>,
    title: "Innovation",
    description:
      "We constantly evolve and embrace new technologies and methods to provide cutting-edge solutions for modern challenges.",
    leftText: "Traditional",
    rightText: "Modern",
  },
];

const Card: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
    slidesToScroll: 1,
  });
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // sync selected + auto-play
  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    const id = setInterval(() => emblaApi.scrollNext(), 5000);
    return () => clearInterval(id);
  }, [emblaApi, onSelect]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();
  const scrollTo = (i: number) => emblaApi?.scrollTo(i);

  return (
    <section className="relative w-full mt-50 bg-black py-24">
      <div className="max-w-6xl mx-auto rounded-[28px] bg-[#0B0B0B]/60 ring-1 ring-white/10 backdrop-blur-md px-4 sm:px-8 pt-16 pb-12 relative overflow-hidden">
        {/* Pill + headline */}
        <div className="absolute -top-8 pt-15 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center rounded-full bg-gradient-to-r from-[#7C3AED] to-[#6EE7F6] px-4 py-1.5 text-xs font-semibold text-white shadow-lg">
            Our Values
          </span>
        </div>
        <h2 className="text-white text-2xl sm:text-3xl font-semibold text-center">
          Our values driven by relations
        </h2>

        {/* carousel */}
        <div className="mt-10">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -mx-4">
              {values.map((v, i) => {
                const isActive = i === selected;
                const isSide =
                  i === (selected + 1) % values.length ||
                  (selected - 1 + values.length) % values.length === i;

                return (
                  <div
                    key={v.id}
                    className="pl-4 pr-4 basis-[86%] md:basis-[70%] lg:basis-[62%] shrink-0"
                  >
                    <div
                      className={[
                        "relative rounded-[36px] bg-black/90 ring-1 ring-white/5 px-6 sm:px-10 md:px-14 py-12 text-center transition-all duration-500",
                        isActive
                          ? "scale-100 opacity-100"
                          : isSide
                          ? "scale-[0.93] opacity-70"
                          : "scale-[0.88] opacity-40",
                        "shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset]",
                      ].join(" ")}
                    >
                      {/* soft side fade for depth */}
                      {!isActive && (
                        <div className="pointer-events-none absolute inset-0 rounded-[36px] bg-gradient-to-r from-black/40 via-transparent to-black/40" />
                      )}

                      {/* icon */}
                      <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#6A28FF] shadow-[0_10px_40px_rgba(106,40,255,0.45)]">
                        {v.icon}
                      </div>

                      <h3 className="text-white text-2xl sm:text-3xl font-semibold mb-6">
                        {v.title}
                      </h3>

                      <div className="mx-auto flex max-w-3xl items-center justify-between gap-6">
                        <span className="text-gray-400 text-sm sm:text-base whitespace-nowrap">
                          {v.leftText}
                        </span>

                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                          {v.description}
                        </p>

                        <span className="text-gray-400 text-sm sm:text-base whitespace-nowrap">
                          {v.rightText}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* arrows + dots row */}
          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              onClick={scrollPrev}
              aria-label="Previous"
              className="w-9 h-9 rounded-full bg-[#1A1A1A] hover:bg-[#242424] transition-colors grid place-items-center ring-1 ring-white/10"
            >
              <ChevronLeft className="w-5 h-5 text-white/80" />
            </button>

            {/* dots */}
            <div className="flex items-center gap-3">
              {values.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={[
                    "h-2.5 w-2.5 rounded-full transition-all",
                    i === selected
                      ? "bg-[#7C3AED]" // purple active
                      : "bg-white/30 hover:bg-white/50",
                  ].join(" ")}
                />
              ))}
            </div>

            <button
              onClick={scrollNext}
              aria-label="Next"
              className="w-9 h-9 rounded-full bg-[#1A1A1A] hover:bg-[#242424] transition-colors grid place-items-center ring-1 ring-white/10"
            >
              <ChevronRight className="w-5 h-5 text-white/80" />
            </button>
          </div>
        </div>
      </div>

      {/* big rounded container silhouette (matches screenshot’s outer rounded look) */}
      <div className="pointer-events-none absolute inset-x-6 -bottom-6 -top-6 rounded-[28px] ring-1 ring-white/10 bg-white/0" />
    </section>
  );
};

export default Card;
