"use client";

import Image from "next/image";
import Navbar from "../../../components/Navbar";

export default function SavingsPage() {
  return (
    <main className="bg-[#F9FAFB] min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center mt-15">
        <h1 className="text-4xl md:text-5xl font-bold font-poppins text-[#1F299C]">
          Build Your Savings, <span className="text-[#FF9F1C]">Build Your Future</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl font-spaceGrotesk text-[#101010] max-w-3xl mx-auto">
          Saving shouldn t be stressful. With{" "}
          <span className="font-semibold text-[#FF9F1C]">Nest</span>, your
          contributions are simple, secure, and designed to help you reach your
          financial goals faster.
        </p>
      </section>

      {/* Image + Write-ups (first section - image on right) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto px-6 py-12 items-center">
        <div className="space-y-6 order-2 md:order-none">
          <h2 className="text-2xl md:text-3xl font-bold font-poppins text-[#1F299C]">
            Save With Purpose
          </h2>
          <p className="font-spaceGrotesk text-[#101010] leading-relaxed">
            Set clear goals for your savings — from school fees to business
            expansion — and track your progress every step of the way.
          </p>
          <p className="font-spaceGrotesk text-[#101010]">
            Our tools help you stay disciplined and consistent, ensuring your
            money works as hard as you do.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-md h-64 bg-gray-200 rounded-2xl flex items-center justify-center">
            <span className="text-gray-500 font-spaceGrotesk">
              <Image src="/images/welcome.png" className="rounded-2xl"
              alt="office" 
              height={300}
              width={500}
              />
            </span>
          </div>
        </div>
      </section>

      {/* Testimonials / Success Stories */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-poppins font-bold text-[#1F299C]">
            Success Stories
          </h3>
          <p className="mt-3 font-spaceGrotesk text-[#101010]">
            Hear from real Nigerians achieving their savings goals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {[
              {
                name: "Ngozi, Port Harcourt",
                story:
                  "I saved consistently for 8 months and finally bought my generator without debt!",
              },
              {
                name: "Ibrahim, Kano",
                story:
                  "Nest helped me stay on track with my building project savings. Discipline was easier with reminders.",
              },
              {
                name: "Aisha, Lagos",
                story:
                  "I opened a small shop with my savings group. Having everything digital gave us peace of mind.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#F9FAFB] p-6 rounded-2xl shadow hover:shadow-lg transition"
              >
                <p className="font-spaceGrotesk text-[#101010] italic">
                  “{item.story}”
                </p>
                <h4 className="mt-4 font-poppins font-semibold text-[#0466C8]">
                  {item.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Image + Write-ups (reversed layout - image left) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto px-6 py-16 items-center">
        <div className="flex justify-center">
          <div className="w-full max-w-md h-64 bg-gray-200 rounded-2xl flex items-center justify-center">
            <span className="text-gray-500 font-spaceGrotesk">
              <Image src="/images/welcome.png" className="rounded-2xl"
              alt="office" 
              height={300}
              width={500}
              />
            </span>
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold font-poppins text-[#1F299C]">
            Grow Consistently, Withdraw Confidently
          </h2>
          <p className="font-spaceGrotesk text-[#101010] leading-relaxed">
            Unlike traditional savings that get eaten up by emergencies, our
            system ensures your funds are safe until you reach your goals.
          </p>
          <p className="font-spaceGrotesk text-[#101010]">
            Withdraw easily when your savings cycle is complete — with full
            transparency and accountability.
          </p>
        </div>
      </section>

      <Navbar />
    </main>
  );
}
