"use client";

import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [email, setEmail] = useState("");

  return (
    <section className="pt-30 w-full flex justify-center items-center px-4 sm:px-6 lg:px-8 py-12">
      {/* Blue rectangle container */}
      <div className="bg-[#1F299C] overflow-hidden w-full max-w-7xl rounded-3xl p-8 lg:p-16 flex flex-col lg:flex-row items-center gap-8">
        
        {/* Left side - Text Content */}
        <div className="flex-1 text-left">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl font-bold text-white font-poppins leading-tight">
            Save Money <br /> Together
          </h1>

          {/* Sub-headline */}
          <p className="mt-6 text-lg md:text-xl text-white font-grotesk max-w-lg">
            Savenest helps you build financial stability through group savings, personal coaching, and simple tools—right from your phone.
          </p>

          {/* Email input and CTA */}
          <div className="pt-8">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-64 px-4 py-2 border rounded-xl bg-[#F3F4F6] text-black"
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="bg-[#FBBF24] hover:bg-[#c59417] hover:text-white text-black py-2 px-5 font-grotesk font-bold text-md rounded-xl">
                Get Started Free
              </button>
            </div>
            <div className="mt-2">
              <span className="text-sm text-white">Bank-level security. No hidden fees.</span>
            </div>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="flex-1 w-full flex justify-center">
          <div className="rounded-2xl shadow-xl overflow-hidden">
            <Image
              src="/images/People.png"
              alt="Savenest community saving"
              width={500}
              height={400}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
