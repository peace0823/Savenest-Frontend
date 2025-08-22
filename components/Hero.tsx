"use client";

import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [email, setEmail] = useState("");
  return (
    <section className="pt-30 w-full flex justify-center items-center px-4 sm:px-6 lg:px-8 py-12">
      {/* Blue rectangle container */}
      <div className="bg-[#1F299C] overflow-hidden w-full max-w-7xl rounded-3xl p-8 lg:p-16 flex flex-col lg:flex-row items-center gap-8 ">
        {/* Left side - Text Content */}
        <div className="flex-1 text-left">

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl font-bold text-soft-off text-white font-poppins leading-tight">
            Save Together, <br /> Live Better.
          </h1>

          {/* Sub-headline */}
          <p className="mt-6 text-lg md:text-xl text-soft-off text-white font-grotesk max-w-lg">
            Build your savings, feel secure, and grow with a community that’s got your back.
          </p>

          <div className="pt-8">
            <div className="overflow-hidden flex flex-col lg:flex-row  align-middle gap-3">
              {/* Left side - Text Content */}
              <div className="flex-1 text-left justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-70 px-4 py-2 border rounded-xl bg-[#F3F4F6]"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Right side - Image */}
              <div className="flex-1 w-full flex ">
                <button className="bg-[#FBBF24] hover:bg-[#c59417] hover:text-white text-black py-2 px-5 font-grotesk font-bold text-md rounded-4xl ">
                  Start Saving Smarter
                </button>
              </div>
            </div>
            <div className="mt-2">
              <span className="text-sm text-soft-off text-white"> Bank-level security. No hidden fees.</span>
            </div>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="flex-1 w-full flex justify-center">
          <Image
            src="/images/welcome.png"
            alt="Savenest community saving"
            width={500}
            height={400}
            className=" object-contain"
          />
        </div>
      </div>
    </section>
  );
}
