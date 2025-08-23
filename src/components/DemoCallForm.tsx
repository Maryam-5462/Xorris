"use client";
import Image from "next/image";

export default function DemoCallForm() {
  return (
    <div className="relative min-h-[140vh] w-screen overflow-hidden text-white">
  {/* Main Background */}
  <Image
    src="/images/lowBG.gif"
    alt="Main Background"
    fill
    priority
    className="object-cover z-0 opacity-50"   // keep in back but visible
  />


      {/* Top Net Overlay */}
      {/* Top Net Overlay */}
  <div className="absolute top-6 left-0 w-full h-2/5 z-10">
    <Image
      src="/images/net.png"
      alt="Overlay Net"
      fill
      priority
      className="object-cover opacity-70"   // make it transparent
    />
  </div>

      {/* Centered Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-[140vh]">
  {/* Pill */}
<div className="text-center mb-15 -mt-1">
  <div
    className="inline-block rounded-full bg-purple-600 px-6 py-4
               text-[21px] font-normal leading-[100%] tracking-[0] 
               text-center font-[Montserrat]"
  >
    AI Can Now Make &amp; Take Calls On Your Behalf!
  </div>
</div>


{/* Heading */}
<h2 className="text-3xl font-semibold mb-18 text-center -mt-10">
  Try a conversation with live demo
</h2>
{/* Form */}
  <form className="flex flex-col gap-5 w-full max-w-[450px]">
  {/* Full Name */}
  <div className="flex flex-col">
    <label className="text-base mb-1" htmlFor="fullname">
      Full Name
    </label>
    <input
      id="fullname"
      type="text"
      placeholder="Enter Full Name"
      required
      className="mx-auto w-full rounded-xl border border-gray-700 bg-gray-800 px-4 py-3 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
    />
  </div>

  {/* Role */}
  <div className="flex flex-col">
    <label className="text-base mb-1" htmlFor="role">
      Select Role
    </label>
    <select
      id="role"
      required
      className="mx-auto w-full rounded-xl border border-gray-700 bg-gray-800 px-4 py-3 text-base text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
    >
      <option value="">Select Role</option>
      <option value="customer">Teacher</option>
      <option value="sales">Student</option>
      <option value="support">Client</option>
      <option value="support">Ceo</option>
    </select>
  </div>

  {/* Call Goal */}
  <div className="flex flex-col">
    <label className="text-base mb-1" htmlFor="callgoal">
      Call Goal
    </label>
    <textarea
      id="callgoal"
      placeholder="Enter Call Goal"
      required
      className="mx-auto w-full rounded-xl border border-gray-700 bg-gray-800 px-4 py-3 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
      rows={3}
    />
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    className="mx-auto w-full rounded-xl bg-gradient-to-r from-purple-600 to-purple-800 py-3 text-lg font-semibold text-white hover:opacity-90 transition"
  >
    Demo Call
  </button>
</form>

      </div>

      {/* Arrow + Free Demo Call */}
{/* Text */}
<div className="absolute top-86 right-60 z-10 font-caveat text-4xl leading-tight text-right
"style={{
    // top: "89px",
    // left: "1273px",
    fontFamily: "Caveat, cursive",
    fontWeight: 400,
    fontSize: "43px",
    lineHeight: "100%",
    letterSpacing: "0%",
  }}>
  Try a FREE <br /> demo call !
</div>

{/* Arrow */}
<div
  className="absolute top-37 right-[15px] z-10 -ml-8"
  style={{
    transform: "rotate(28deg)",
    opacity: 1,
  }}
>
  <Image src="/images/arrow.png" alt="Arrow" width={160} height={210} />
</div>

     {/* Bottom Down Net */}
 <div className="absolute bottom-0 left-0 w-full h-1/3 z-10">
  <Image
    src="/images/hero-bg.png"
    alt="Bottom Net"
    fill
    priority
    className="object-cover opacity-22"  // apply here
  />
</div>

    </div>
  );
}
