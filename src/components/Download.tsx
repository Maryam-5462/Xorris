import Image from "next/image";
import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function Download() {
  return (
    <div
      style={{
        width: "100vw",
        marginLeft: "calc(50% - 50vw)",
        marginRight: "calc(50% - 50vw)",
        padding: "80px 20px",
        height: "700px",
        position: "relative",
        display: "flex",
        justifyContent: "center", // center horizontally
        alignItems: "center", // center vertically
        color: "#fff",
        backgroundColor: "#0A0A0A", // solid base color
        top: "-170px",

      }}
    >
      {/* Background Layer (only bg has opacity) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/images/lowBG.gif')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
          top: -"19px",
          opacity: 0.10, // ✅ make bg dull
        }}
      />

      {/* Foreground Content */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "60px",
          zIndex: 1, // keeps above bg
          maxWidth: "1200px",
          marginBottom: "-1px",
        }}
      >
        {/* Left Text Content */}
        <div style={{ maxWidth: "600px" }}>
          <button
            className="bg-[#6613E1] rounded-[24px] px-[18px] py-[6px] text-white text-[14px] mb-4 
                       transition-all duration-300 ease-in-out 
                       hover:bg-[#520fba] hover:scale-105 hover:-translate-y-1 hover:shadow-lg"
          >
            Download
          </button>

          <h2
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "28px",
              fontWeight: 700,
              marginBottom: "12px",
            }}
          >
            Our app is available for <br /> Android & iOS
          </h2>

          <p
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "16px",
              lineHeight: 1.6,
              opacity: 0.9,
              marginBottom: "40px",
            }}
          >
            We connect businesses, teachers, and students through smarter
            communication tools, offering features like inbound, outbound, and
            scheduled calls, voice tone adjustment, and call transcripts to
            ensure clear, professional, and effective interactions.
          </p>

          {/* App Store buttons */}
          <div className="flex gap-4 justify-center md:justify-start">
            {/* App Store Button */}
            <a
              href="#"
              className="flex items-center gap-2 text-white border border-white px-4 py-2 rounded-full 
                         bg-gradient-to-r from-gray-800 to-black
                         hover:from-gray-700 hover:to-gray-900
                         hover:scale-110 hover:-translate-y-1 hover:shadow-xl 
                         transition-all duration-300 ease-in-out"
            >
              <FaApple className="text-3xl" />
              <div className="flex flex-col leading-tight text-left">
                <span className="text-[10px] uppercase">Download on the</span>
                <span className="text-sm font-semibold">App Store</span>
              </div>
            </a>

            {/* Google Play Button */}
            <a
              href="#"
              className="flex items-center gap-2 text-white border border-white px-4 py-2 rounded-full 
                         bg-gradient-to-r from-gray-800 to-black
                         hover:from-gray-700 hover:to-gray-900
                         hover:scale-110 hover:-translate-y-1 hover:shadow-xl 
                         transition-all duration-300 ease-in-out"
            >
              <FaGooglePlay className="text-3xl" />
              <div className="flex flex-col leading-tight text-left">
                <span className="text-[10px] uppercase">Get it on</span>
                <span className="text-sm font-semibold">Google Play</span>
              </div>
            </a>
          </div>
        </div>

        {/* Right Phones Image */}
        <div
  style={{
    position: "relative",
    width: "360px",
    height: "547px",
    border: "17px solid #000", // ✅ valid border
  }}
>
 <div
  style={{
    position: "relative",
    width: "360px",
    height: "547px",
    border: "12px solid #000",
    overflow: "hidden",
    borderRadius: "20px",
  }}
>
  {/* Background: Download GIF */}
  <Image
    src="/images/download.gif"
    alt="download image"
    fill
    style={{
      objectFit: "cover",
      zIndex: 1, // background layer
    }}
    priority
  />

  {/* Foreground: Waves GIF (overlay) */}
{/* <Image
  src="/images/waves.gif"
  alt="waves image"
  width={350} // smaller width
  height={350} // smaller height
  style={{
    position: "absolute",
    bottom: "-130px", // moves it down
    left: "50%",     // center horizontally
    transform: "translateX(-50%)", // perfect centering
    mixBlendMode: "screen",
    opacity: 0.9,
    zIndex: 2,
  }}
  priority
/> */}

</div>


</div>

      </div>
    </div>
  );
}
