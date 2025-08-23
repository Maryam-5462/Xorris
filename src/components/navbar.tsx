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
        <div
          className="absolute box-border content-stretch flex flex-col gap-2.5 items-start justify-start left-0 p-[2px] rounded-[100px] top-0 w-[150px]"
          style={{
            backgroundImage: primary
              ? "url('data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 150 50\\' preserveAspectRatio=\\'none\\'><g transform=\\'matrix(4.5924e-16 2.5 -7.5 1.5308e-16 75 25)\\'><foreignObject x=\\'-190\\' y=\\'-190\\' width=\\'380\\' height=\\'380\\'><div xmlns=\\'http://www.w3.org/1999/xhtml\\' style=\\'background-image: conic-gradient(from 90deg, rgba(18, 0, 32, 1) 0%, rgba(32, 7, 46, 1) 0.92535%, rgba(46, 14, 60, 1) 1.8507%, rgba(74, 28, 88, 1) 3.7014%, rgba(103, 42, 116, 1) 5.5521%, rgba(131, 56, 144, 1) 7.4028%, rgba(187, 83, 199, 1) 11.104%, rgba(243, 111, 255, 1) 14.806%, rgba(192, 118, 255, 1) 17.386%, rgba(141, 124, 255, 1) 19.966%, rgba(89, 131, 255, 1) 22.547%, rgba(64, 135, 255, 1) 23.837%, rgba(38, 138, 255, 1) 25.127%, rgba(60, 186, 245, 1) 30.096%, rgba(82, 234, 234, 1) 35.066%, rgba(66, 176, 184, 1) 38.718%, rgba(50, 117, 133, 1) 42.369%, rgba(42, 88, 108, 1) 44.195%, rgba(34, 59, 83, 1) 46.021%, rgba(26, 29, 57, 1) 47.847%, rgba(22, 15, 45, 1) 48.76%, rgba(18, 0, 32, 1) 49.673%, rgba(18, 0, 32, 1) 100%); opacity:1; height: 100%; width: 100%;\\'></div></foreignObject></g></svg>')"
              : "url('data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 150 50\\' preserveAspectRatio=\\'none\\'><g transform=\\'matrix(4.5924e-16 2.5 -7.5 1.5308e-16 75 25)\\'><foreignObject x=\\'-190\\' y=\\'-190\\' width=\\'380\\' height=\\'380\\'><div xmlns=\\'http://www.w3.org/1999/xhtml\\' style=\\'background-image: conic-gradient(from 90deg, rgba(18, 0, 32, 1) 0%, rgba(32, 7, 46, 1) 0.92535%, rgba(46, 14, 60, 1) 1.8507%, rgba(74, 28, 88, 1) 3.7014%, rgba(103, 42, 116, 1) 5.5521%, rgba(131, 56, 144, 1) 7.4028%, rgba(187, 83, 199, 1) 11.104%, rgba(243, 111, 255, 1) 14.806%, rgba(192, 118, 255, 1) 17.386%, rgba(141, 124, 255, 1) 19.966%, rgba(89, 131, 255, 1) 22.547%, rgba(64, 135, 255, 1) 23.837%, rgba(38, 138, 255, 1) 25.127%, rgba(60, 186, 245, 1) 30.096%, rgba(82, 234, 234, 1) 35.066%, rgba(66, 176, 184, 1) 38.718%, rgba(50, 117, 133, 1) 42.369%, rgba(42, 88, 108, 1) 44.195%, rgba(34, 59, 83, 1) 46.021%, rgba(26, 29, 57, 1) 47.847%, rgba(22, 15, 45, 1) 48.76%, rgba(18, 0, 32, 1) 49.673%, rgba(18, 0, 32, 1) 100%); opacity:1; height: 100%; width: 100%;\\'></div></foreignObject></g></svg>')",
          }}
        >
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
