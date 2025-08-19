"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-20 w-full flex justify-center items-center px-4 sm:px-6 lg:px-8 py-12">
      {/* Blue rectangle container */}
      <div className="bg-[#1F299C] overflow-hidden w-full max-w-7xl rounded-3xl p-8 lg:p-16 flex flex-col lg:flex-row items-center gap-8 ">
        {/* Left side - Text Content */}
        <div className="flex-1 text-left">
            
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl font-bold text-soft-offwhite font-poppins leading-tight">
            Save Money <br /> Together
          </h1>

          {/* Sub-headline */}
          <p className="mt-6 text-lg md:text-xl text-soft-offwhite font-grotesk max-w-lg">
            Start saving with purpose. Grow with your community. Gain control of
            your money — one goal at a time.
          </p>
        </div>

        {/* Right side - Image */}
        <div className="flex-1 w-full flex justify-center">
          {/* Example image - replace with actual illustration */}
          <Image
            src="/images/welcome.png" // 📌 Place an image in public/hero-image.png
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
