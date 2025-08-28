"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function DemoCallForm() {
  const [inCall, setInCall] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [agentName, setAgentName] = useState("");
  const [agentRole, setAgentRole] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [receiverRole, setReceiverRole] = useState("");

 useEffect(() => {
  if (inCall && timeLeft > 0) {
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }
}, [inCall, timeLeft]);
 

  if (inCall) {
    // Demo Call Screen
    return (
      <div className="relative min-h-[100vh] w-screen overflow-hidden flex flex-col items-center justify-center bg-black text-white -top-30">
        {/* Background */}
       <Image
  src="/images/demoBG.gif"
  alt="Main Background"
  fill
  priority
  className="object-cover z-0 opacity-50 pointer-events-none"
/>


    {/* Profiles Row */}
<div className="relative z-10 flex items-center justify-center w-full max-w-5xl px-12">
  {/* Agent */}
  <div className="flex flex-col items-center -mr-20 mt-15"> 
    <div className="rounded-full w-[280px] h-[280px] overflow-hidden">
      <Image
        src="/images/left.png"
        alt="Agent"
        width={280}
        height={280}
        className="rounded-full"
      />
    </div>
  </div>

  {/* Center Wave + Timer */}
  <div className="flex flex-col items-center justify-center space-y-6">
    {/* Tagline */}
    <div className="text-center mb-6">
      <div
        className="inline-block rounded-full px-6 py-2 text-sm md:text-base font-medium whitespace-nowrap"
        style={{ background: "rgba(102, 19, 225, 1)" }}
      >
        AI Can Now Make &amp; Take Calls On Your Behalf!
      </div>
    </div>

    {/* Heading */}
    <h2 className="text-2xl md:text-3xl font-semibold mb-12 text-center whitespace-nowrap">
      Try a conversation with live demo
    </h2>

    {/* Circle + Equalizer */}
    <div className="relative flex items-center justify-center h-64 w-64">
      {/* Glow */}
      <div
        className="absolute w-40 h-40 rounded-full animate-floating-glow blur-[10px] opacity-100"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 117, 255, 0.75) 0%, rgba(0, 255, 255, 0) 100%)",
        }}
      ></div>

      {/* Bars */}
      <div className="flex items-end space-x-1 z-10">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className="w-1 bg-white rounded-[9999px] animate-eq-bar"
            style={{
              height: "9px",
              animationDelay: `${i * 150}ms`,
              animationDuration: "1.2s",
            }}
          ></div>
        ))}
      </div>
    </div>

    {/* Timer */}
    <div className="text-red-500 text-2xl font-bold">
      00 : {timeLeft.toString().padStart(2, "0")}
    </div>
  </div>

  {/* Receiver */}
  <div className="flex flex-col items-center -ml-20 mt-15">
    <div className="rounded-full w-[280px] h-[280px] overflow-hidden">
      <Image
        src="/images/right.png"
        alt="Receiver"
        width={280}
        height={280}
        className="rounded-full"
      />
    </div>
  </div>
</div>



        {/* End Demo Button */}
      <div className="flex justify-center">
  <button
    onClick={() => {
      setInCall(false);
      setTimeLeft(30);
    }}
    className="mt-12 ml-6 w-[320px] md:w-[420px] rounded-xl py-1 text-lg font-semibold text-white opacity-90 transition border border-transparent hover:border-white cursor-pointer"
    style={{ background: "rgba(102, 19, 225, 1)" }}
  >
    End Demo
  </button>
</div>


      </div>
    );
  }

  // Input Form Screen
  return (
    <div className="relative min-h-[100vh] w-screen overflow-hidden text-white -top-30">
      {/* Background */}
      <Image
        src="/images/lowBG.gif"
        alt="Main Background"
        fill
        priority
        className="object-cover z-0 opacity-50"
      />

      {/* Center Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-[100vh] px-4">
        {/* Top Pill */}
        <div className="text-center mb-6">
  <div
    className="inline-block rounded-full px-6 py-2 text-sm md:text-base"
    style={{
      background: "rgba(102, 19, 225, 1)",
      // fontFamily: "Monument Extended, sans-serif",
    }}
  >
    AI Can Now Make &amp; Take Calls On Your Behalf!
  </div>
</div>


        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-12 text-center">
          Try a conversation with live demo
        </h2>

        {/* Form */}
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl"
          onSubmit={(e) => {
            e.preventDefault();
            if (agentName && agentRole && receiverName && receiverRole) {
              setInCall(true);
            } else {
              alert("Please fill all details before starting demo call!");
            }
          }}
        >
          {/* Agent Details */}
          <div className="bg-white/10 rounded-2xl p-6 shadow-lg">
             <h3 className="text-xl font-semibold mb-6 text-center">
              Agent Details
            </h3>
            <div className="flex justify-center mb-6">
              <div className="rounded-full overflow-hidden">
                <Image
                  src="/images/Blueprofile.png"
                  alt="Agent Profile"
                  width={90}
                  height={90}
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                value={agentName}
                onChange={(e) => setAgentName(e.target.value)}
                placeholder="Enter Full Name"
                className="w-full rounded-lg border px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <input
                type="text"
                value={agentRole}
                onChange={(e) => setAgentRole(e.target.value)}
                placeholder="Enter Your Role"
                className="w-full rounded-lg border px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
          </div>

          {/* Receiver Details */}
          <div className="bg-white/10 rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-6 text-center">
              Receiver Details
            </h3>
            <div className="flex justify-center mb-6">
              <div className="rounded-full overflow-hidden ">
                <Image
                  src="/images/profile.png"
                  alt="Receiver Profile"
                  width={90}
                  height={90}
                  className="rounded-full"
                />
              </div>
            </div>
             <div className="flex flex-col gap-4">
  <input
    type="text"
    value={receiverName}
    onChange={(e) => setReceiverName(e.target.value)}
    placeholder="Enter Full Name"
    className="w-full rounded-lg border px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
  />
  <input
    type="text"
    value={receiverRole}
    onChange={(e) => setReceiverRole(e.target.value)}
    placeholder="Enter Your Role"
    className="w-full rounded-lg border px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
  />
</div>

          </div>

          {/* Submit */}
          <div className="col-span-1 md:col-span-2 flex justify-center">
  <button
    type="submit"
   className="mt-12 w-[320px] md:w-[420px] rounded-xl py-1 text-lg font-semibold text-white opacity-90 transition border border-transparent hover:border-white cursor-pointer"
    style={{ background: "rgba(102, 19, 225, 1)" }}
  >
    Initiate Demo Call
  </button>
</div>

        </form>
      </div>
    </div>
  );
}
