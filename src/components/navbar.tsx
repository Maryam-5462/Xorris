"use client";

import React from "react";
import Image from "next/image";
import ActionButton from "@/components/ActionButton";

const Navbar: React.FC = () => {
  return (
    <nav className="relative w-full h-20 flex items-center justify-between px-20 py-20 overflow-hidden">
      {/* Logo */}
      <div className="relative">
        <Image
          src="/images/HeroLogo.png"
          alt="Xorris Logo"
          width={110}
          height={46}
        />
      </div>

      {/* Right side buttons */}
      <div className="flex gap-[18px] items-center">
        <ActionButton primary>Free Trial</ActionButton>
        <ActionButton>Log in</ActionButton>
      </div>
    </nav>
  );
};

export default Navbar;
