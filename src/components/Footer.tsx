import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 pt-0 pb-12 md:px-12 md:pt-4 md:pb-16 -top-[100px]">
      {/* Centered Box */}
      <div className="mx-auto bg-[#1a1a1a] rounded-3xl p-8 flex flex-col md:flex-row justify-between items-start gap-8 max-w-6xl">
        
        {/* Info Section */}
        <div className="flex-1">
          <h3 className="font-bold text-[24px] mb-3">info@Xorris.com</h3>
          <p className="text-white-300 text-[14px] leading-relaxed">
            We connect businesses, teachers, and students through smarter
            communication tools, offering features like inbound, outbound,
            and scheduled calls, voice tone adjustment, and call transcripts
            to ensure clear, professional, and effective interactions.
          </p>
        </div>

        {/* Office Section (Center) */}
        <div className="flex-1">
          <button className="bg-[#6613E1] text-white px-5 py-2 rounded-full text-[18px] mb-3 transition-all duration-300 hover:bg-[#520fba] hover:scale-105 hover:shadow-lg">
            OFFICE
          </button>
          <p className="text-white-300 text-[14px]">
            4517 Washington Ave. Manchester, Kentucky 39495
          </p>
        </div>

        {/* Contacts Section (Closer to center-left) */}
        <div className="flex-0">
          <button className="bg-[#6613E1] text-white px-5 py-2 rounded-full text-[18px] mb-3 transition-all duration-300 hover:bg-[#520fba] hover:scale-105 hover:shadow-lg">
            CONTACTS
          </button>
          <p className="text-white-300 text-[14px]">Info@Xorris.com</p>
          <p className="text-white-300 text-[14px]">(239) 555-0108</p>
        </div>
      </div>

      {/* Middle Text */}
      <div className="text-center mt-10 text-[14px] leading-relaxed max-w-3xl mx-auto">
        <p className="font-bold mb-1">Licensed ・ Calling Agent</p>
        <p className="mt-2 text-white-400 mb-1">
          Built By <span className="font-bold">Nexterse</span>. Powered By{" "}
          <span className="font-bold">Nexterse</span>
        </p>
        <p className="mt-2 text-white-500">
          Copyright © 2025 Nexterse. All rights reserved
        </p>
      </div>

      {/* Logo */}
      <div className="flex justify-center items-center mt-15 -mb-16">
        {/* Left logo symbol */}
        <Image
          src="/images/logo.png"
          alt="Xorris Logo Icon"
          width={400}
          height={260}
          className="object-contain"
        />

        {/* Right side: wordmark + tagline */}
        <div className="flex flex-col items-start -ml-14 mt-25">
          <Image
            src="/images/word.png"
            alt="Xorris Wordmark"
            width={287}
            height={56}
            className="object-contain"
          />
          <Image
            src="/images/subtext.png"
            alt="AI Based Calling Agent"
            width={280}
            height={25}
            className="object-contain mt-2"
          />
        </div>
      </div>
    </footer>
  );
}
