"use client";

import React from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
  function ActionButton({
    children,
    primary = false,
  }: {
    children: React.ReactNode;
    primary?: boolean;
  }) {
    return (
      <div className="h-[50px] relative shrink-0 w-[150px]">
        {/* Animated gradient border */}
        <div className="absolute box-border content-stretch flex flex-col gap-2.5 items-start justify-start left-0 p-[2px] rounded-[100px] top-0 w-[150px] animate-flow">
          <div className="backdrop-blur-[15px] backdrop-filter bg-[rgba(18,0,32,0.9)] h-[46px] relative rounded-[100px] shrink-0 w-full">
            <div className="flex flex-row items-center justify-center relative size-full">
              <div className="box-border content-stretch flex gap-[5px] h-[46px] items-center justify-center px-4 py-0 relative w-full">
                <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[12px] text-nowrap">
                  <p className="block leading-[normal] whitespace-pre">
                    {children}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <style jsx>{`
          @keyframes flow {
            0% {
              background-position: 0% 0%;
            }
            100% {
              background-position: 200% 0%;
            }
          }
          
          .animate-flow {
            background: linear-gradient(
              90deg,
              rgba(18, 0, 32, 1),
              rgba(32, 7, 46, 1),
              rgba(46, 14, 60, 1),
              rgba(74, 28, 88, 1),
              rgba(103, 42, 116, 1),
              rgba(131, 56, 144, 1),
              rgba(187, 83, 199, 1),
              rgba(243, 111, 255, 1),
              rgba(192, 118, 255, 1),
              rgba(141, 124, 255, 1),
              rgba(89, 131, 255, 1),
              rgba(64, 135, 255, 1),
              rgba(38, 138, 255, 1),
              rgba(60, 186, 245, 1),
              rgba(82, 234, 234, 1),
              rgba(66, 176, 184, 1),
              rgba(50, 117, 133, 1),
              rgba(42, 88, 108, 1),
              rgba(34, 59, 83, 1),
              rgba(26, 29, 57, 1),
              rgba(22, 15, 45, 1),
              rgba(18, 0, 32, 1)
            );
            background-size: 200% 100%;
            animation: flow 2s linear infinite;
          }
        `}</style>
      </div>
    );
  }

  return (
    <nav className="relative w-full h-20 flex items-center justify-between px-20 py-20 overflow-hidden">
      {/* Background Layer (Black + Grid) */}
      {/* <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 [transform:perspective(500px)_rotateX(60deg)] origin-top"></div>
      </div> */}

      {/* Background PNG (hidden overflow) */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/navbar-bg.png"
          alt="Navbar Background"
          fill
          className="object-cover px-35"
          priority
        />
      </div>

      <div className="relative">
        <Image
          src="/images/xorris.png"
          alt="Xoris Logo"
          width={110}
          height={46}
        />
      </div>

      <div className="box-border content-stretch flex gap-[18px] items-center justify-start p-0 relative shrink-0">
        <ActionButton>Free Trial</ActionButton>
        <ActionButton>Log in</ActionButton>
      </div>
    </nav>
  );
};

export default Navbar;