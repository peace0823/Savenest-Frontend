// components/SectionHowItWorks.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SectionHowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Meet Nesty and Set Goals",
      description:
        "Start saving with purpose. Grow with your community. Gain control of your money — one goal at a time.",
      image: "/images/welcome.png", // replace with real image
    },
    {
      number: "02",
      title: "Build Your Savings Nest",
      description:
        "Create personalized savings groups and work towards shared goals with security and transparency.",
      image: "/images/welcome.png", // replace with real image
    },
    {
      number: "03",
      title: "Level up with Nesty",
      description:
        "Unlock rewards, challenges, and tools that make saving fun while staying consistent on your journey.",
      image: "/images/welcome.png", // replace with real image
    },
  ];

  return (
    <section className="w-full py-16 px-6 bg-[#F9FAFB]">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0466C8] font-poppins mb-4">
          How SaveNest Works
        </h2>
        <p className="text-[#101010] text-base md:text-lg font-nunito">
          Start saving with purpose. Grow with your community. Gain control of your money — one goal at a time.
        </p>
      </div>

      {/* Steps */}
      <div className="flex flex-col gap-16 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={step.number}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 flex items-center justify-center bg-[#1F299C] text-white font-poppins font-bold text-lg rounded">
                  {step.number}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#0466C8] font-poppins">
                  {step.title}
                </h3>
              </div>
              <p className="text-[#101010] font-nunito text-base md:text-lg">
                {step.description}
              </p>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <div className="w-full h-56 md:h-72 bg-gray-200 rounded-xl overflow-hidden shadow-md">
                <Image
                  src={step.image}
                  alt={step.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
