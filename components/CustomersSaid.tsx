"use client";
import React, { useState } from "react";
import Image from "next/image";

// Data for customers
const customers = [
  {
    name: "Chinedu Okafor",
    comment: "Savenest has completely changed the way I save. Simple, reliable, and stress-free!",
    image: "/images/Profile.png", // Placeholder image
  },
  {
    name: "Amina Yusuf",
    comment: "I love how easy it is to set saving goals with Savenest. It motivates me every day.",
    image: "/images/Image_fx - 2025-07-06T120846.467.jpg",
  },
  {
    name: "Tunde Balogun",
    comment: "With Savenest, I finally feel in control of my finances. Highly recommended!",
    image: "/images/Image_fx - 2025-07-06T123226.679.jpg",
  },
];

const CustomersSaid = () => {
  // State to track which customer is active
  const [current, setCurrent] = useState(0);

  // Move to next customer
  const nextSlide = () => {
    setCurrent((prev) => (prev === customers.length - 1 ? 0 : prev + 1));
  };

  // Move to previous customer
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? customers.length - 1 : prev - 1));
  };

  return (
    <section className="w-full bg-[#F9FAFB] py-12 px-4 flex flex-col items-center font-nunito">
      {/* Section Title */}
      <h2 className="text-2xl md:text-3xl font-poppins font-bold text-[#0466C8] mb-8">
        What Our Savers Said
      </h2>

      {/* Slider Container */}
      <div className="relative w-full max-w-2xl">
        {/* Rectangle card */}
        <div className="bg-white border border-gray-200 shadow-lg rounded-xl w-full h-[350px] flex flex-col items-center justify-center text-center px-6 transition-all duration-500">
          {/* Customer Image */}
          <img
            src={customers[current].image}
            alt={customers[current].name}
            className="w-20 h-20 rounded-full border-4 border-[#0466C8] mb-4"
          />

          {/* Customer Comment */}
          <p className="text-gray-700 italic text-base md:text-lg mb-4">
            “{customers[current].comment}”
          </p>

          {/* Customer Name */}
          <h3 className="text-[#101010] font-semibold text-lg font-poppins">
            — {customers[current].name}
          </h3>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-[#0466C8] text-white px-3 py-1 rounded-full shadow hover:bg-[#1F299C] transition"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-[#0466C8] text-white px-3 py-1 rounded-full shadow hover:bg-[#1F299C] transition"
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default CustomersSaid;
