"use client";

import { useEffect, useState } from "react";
import styles from "./ScrollingStrip.module.css";

const words = [
  "Scripts",
  "AI Agents",
  "Analytics",
  "Scheduling",
  "Inbound Calls", // target word
  "Reports",
  "Automation",
  "Outbound Calls", // target word
  "Voice Tone",
  "Campaigns",
  "Leads",
  "Integration",
];

export default function ScrollingStrip() {
  const [flyers, setFlyers] = useState<{ id: number; text: string }[]>([]);
  const [highlighted, setHighlighted] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    let id = 0;

    const spawnInterval = setInterval(() => {
      const word = id % 2 === 0 ? "Inbound Calls" : "Outbound Calls";
      setFlyers((prev) => [...prev, { id, text: word }]);
      id++;
    }, 6000);

    return () => clearInterval(spawnInterval);
  }, []);

  const handleArrive = (flyerId: number, word: string) => {
    setHighlighted((prev) => ({ ...prev, [word]: true }));
    setFlyers((prev) => prev.filter((f) => f.id !== flyerId));
  };

  return (
    
    <div className="relative w-full">
  {/* Floating diagonal button */}
  <button
    className="absolute -top-[1px] left-[10px] 
               bg-[#6613E1] rounded-[24px] px-[18px] py-[6px] text-white text-[14px]
               transition-all duration-300 ease-in-out 
               hover:bg-[#520fba] hover:scale-105 hover:-translate-y-1 hover:shadow-lg
               z-10
               -rotate-[3deg]"  // rotate counterclockwise to lift right part
  >
    Why choose our app
  </button>

  {/* Scrolling strip container */}
  <div className={styles.stripContainer}>
    <div className={styles.strip}>
      {words.concat(words).map((word, index) => (
        <span
          key={index}
          className={`${styles.word} ${
            (word === "Inbound Calls" || word === "Outbound Calls") &&
            !highlighted[word]
              ? styles.dim
              : styles.white
          }`}
        >
          {word}
        </span>
      ))}
    </div>

    {flyers.map((flyer) => (
      <FlyingWord key={flyer.id} flyer={flyer} onArrive={handleArrive} />
    ))}
  </div>
</div>

  );
}

function FlyingWord({
  flyer,
  onArrive,
}: {
  flyer: { id: number; text: string };
  onArrive: (id: number, word: string) => void;
}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onArrive(flyer.id, flyer.text);
    }, 5000);

    return () => clearTimeout(timer);
  }, [flyer, onArrive]);

  return <span className={styles.flying}>{flyer.text}</span>;
}
