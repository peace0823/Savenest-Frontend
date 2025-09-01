
"use client";

import { RocketIcon } from "lucide-react";// rocket icon

export default function SaveSmart() {
  return (
    <section className="bg-[#F9FAFB] py-20 flex justify-center">
      <div className="max-w-3xl text-center px-4">
        {/* Rocket Icon */}
        <RocketIcon className="text-[] text-6xl mx-auto mb-6" />

        {/* Heading */}
        <h1 className="text-4xl font-bold font-poppins text-[#0466C8] mb-4">
          Everything You need to save smart
        </h1>

        {/* Subtext */}
        <p className="text-gray-600 font-Space-Grotesk text-lg mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          tempor incididunt ut labore et dolore magna
        </p>

        {/* CTA */}
        <h2 className="text-2xl font-bold text-[#1F299C] font-poppins">
        
        </h2>
      </div>
    </section>
  );
}





