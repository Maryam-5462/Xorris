
import Image from "next/image";
import { Caveat } from "next/font/google";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import ActionButton from "@/components/ActionButton";
import DemoCallForm from "@/components/DemoCallForm";
import ScrollingStrip from "./ScrollingStrip";
import Download from "./Download";
const caveat = Caveat({
  weight: ["400"], // Regular
  subsets: ["latin"],
});

export default function ContentArea() {
  return (
    <><div className="flex flex-col items-center px-4 space-y-4">
 <DemoCallForm />
<div className="flex flex-col items-center -mt-35 px-4">
  {/* About Us section */}
  <div
  style={{
    width: "100vw",
    position: "relative",
    marginLeft: "calc(50% - 50vw)",
    marginRight: "calc(50% - 50vw)",
    backgroundImage: "url('/images/background.gif')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center 0%",
    paddingTop: "0px",
    // paddingBottom: "10px",
  }}
>
  {/* Overlay for opacity */}
  {/* <div
    style={{
      position: "absolute",
      inset: 0,
      backgroundColor: "rgba(0,0,0,0.3)", // semi-transparent overlay
      zIndex: 1,
    }}
  ></div> */}
    {/* Buttons on About Us background */}
    {/* <div className="flex justify-center gap-6 mb-6 mt-6">
      <ActionButton primary>View Pricing</ActionButton>
      <ActionButton>Try a Conversation</ActionButton>
    </div> */}

    {/* About Us heading */}
    <div className="w-full flex flex-col items-center">
      <div
        style={{
          backgroundColor: "#6613E1",
          borderRadius: "50px",
          padding: "5px 15px",
          display: "inline-block",
          
            marginTop: "50px",
        }}
      >
        <span
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 400,
            fontSize: "18px",
            textAlign: "center",
            color: "#FFFFFF",
            display: "block",
          }}
        >
          About Us
        </span>
     </div>
<p
  style={{
    width: "600px",
    maxWidth: "90vw",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 700, // ✅ Bold
    fontSize: "24px",
    lineHeight: "1.5",
    textAlign: "center",
    color: "#fff",
    marginTop: "15px",
  }}
>
  Application with the best user
  <br /> interface converts visitors into leads.
</p>

    </div>

            <div className="flex flex-row items-center justify-between" style={{ marginTop: "96px" }}>
              {/* Left stats cards */}
              <div className="flex flex-col items-center relative" style={{
                marginTop: "-360px",
                paddingLeft: "60px"
              }}>
                {/* Top card */}
                <div className="absolute -top-18" style={{ left: "58%", transform: "translateX(-50%)" }}>
                  <div className="w-[120px] h-[150px] bg-[#1E1E1E] rounded-2xl flex flex-col items-center justify-center text-white">
                    <div className="font-bold text-[22px]">17M</div>
                    <div className="opacity-80 text-xs">Downloads</div>
                  </div>
                </div>

                {/* Middle row with 2 cards */}
                <div className="flex justify-center gap-29 mt-[100px]">
                  <div className="w-[120px] h-[150px] bg-[#1E1E1E] rounded-2xl flex flex-col items-center justify-center text-white">
                    <div className="font-bold text-[22px]">2300+</div>
                    <div className="opacity-80 text-xs">Reviews</div>
                  </div>
                  <div className="w-[120px] h-[150px] bg-[#1E1E1E] rounded-2xl flex flex-col items-center justify-center text-white">
                    <div className="font-bold text-[22px]">150+</div>
                    <div className="opacity-80 text-xs">Countries</div>
                  </div>
                </div>

                {/* Bottom card */}
                <div className="absolute" style={{ top: "calc(120px + 120px + 40px)", left: "58%", transform: "translateX(-50%)" }}>
                  <div className="w-[120px] h-[150px] bg-[#1E1E1E] rounded-2xl flex flex-col items-center justify-center text-white">
                    <div className="font-bold text-[22px]">8M+</div>
                    <div className="opacity-80 text-xs">Followers</div>
                  </div>
                </div>
              </div>


              {/* Center phone + background */}
              <div
                style={{
                  width: "572px",
                  height: "705px",
                  position: "relative",
                  top: "-70px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "-25px",
                    left: "8px",
                    width: "520px",
                    height: "620px",
                    zIndex: 1,
                  }}
                >
                  <Image src="/images/aboutus.gif" alt="Phone mockup" fill style={{ objectFit: "contain" }} />
                </div>
              </div>

              {/* Right descriptive copy + CTA */}
              <div style={{ width: "520px", color: "#FFFFFF" }}>
                <p
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: 1.7,
                    opacity: 0.89,
                    marginTop: "-240px",
                  }}
                >
                  We connect businesses, teachers, and students through smarter communication tools, offering
                  features like inbound, outbound, and scheduled calls, voice tone adjustment, and call transcripts
                  to ensure clear, professional, and effective interactions.
                </p>
                <div className="flex  mt-4">
                  <ActionButton primary>Start free Trial</ActionButton>
                </div>

              </div>
            </div>
{/* heree */}
            {/* Other sections */}
           <>
  <div style={{ background: "black", zIndex: 9999, position: "relative" }}>
    <ScrollingStrip />
  </div>
</>


          </div>
        </div>
        {/* Download Section */}
      <div><Download/></div>


      </div></>
  );
}
