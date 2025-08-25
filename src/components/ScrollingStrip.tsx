"use client";

import { useEffect, useState } from "react";
import styles from "./ScrollingStrip.module.css";

const words = [
  "Scripts",
  "AI Agents",
  "Analytics",
  "Scheduling",
  "Inbound Calls",
  "Reports",
  "Automation",
  "Outbound Calls",
  "Voice Tone",
  "Campaigns",
  "Leads",
  "Integration",
];

export default function ScrollingStrip() {
  return (
    <div className="relative w-full">
      {/* Floating diagonal button */}
      <button
        className="absolute -top-[10px] left-[10px] 
                   bg-[#6613E1] rounded-[24px] px-[18px] py-[6px] text-white text-[14px]
                   transition-all duration-300 ease-in-out 
                   hover:bg-[#520fba] hover:scale-105 hover:-translate-y-1 hover:shadow-lg
                   z-10
                   -rotate-[3deg]"
      >
        Why choose our app
      </button>

      {/* Scrolling strip container */}
      <div className={styles.stripContainer}>
        <div className={styles.strip}>
          {words.concat(words).map((word, index) => (
            <span key={index} className={styles.word}>
              {word}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}