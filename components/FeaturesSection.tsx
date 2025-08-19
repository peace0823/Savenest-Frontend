// components/FeaturesSection.tsx
"use client";

import { motion } from "framer-motion";
import { Users, Sparkles, Wallet, Gamepad2, BarChart3, Shield } from "lucide-react";

const features = [
  {
    icon: <Users className="w-8 h-8 text-[#0466C8]" />,
    title: "Community Savings",
    description:
      "Start saving with purpose. Grow with your community. Gain control of your money — one goal at a time.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-[#0466C8]" />,
    title: "Savings Companion",
    description:
      "Start saving with purpose. Grow with your community. Gain control of your money — one goal at a time.",
  },
  {
    icon: <Wallet className="w-8 h-8 text-[#0466C8]" />,
    title: "Smart Savings",
    description:
      "Start saving with purpose. Grow with your community. Gain control of your money — one goal at a time.",
  },
  {
    icon: <Gamepad2 className="w-8 h-8 text-[#0466C8]" />,
    title: "Gamified Challenges",
    description:
      "Start saving with purpose. Grow with your community. Gain control of your money — one goal at a time.",
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-[#0466C8]" />,
    title: "Budget Tracking",
    description:
      "Start saving with purpose. Grow with your community. Gain control of your money — one goal at a time.",
  },
  {
    icon: <Shield className="w-8 h-8 text-[#0466C8]" />,
    title: "Bank-level Security",
    description:
      "Start saving with purpose. Grow with your community. Gain control of your money — one goal at a time.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0466C8] font-poppins">
          Everything You Need To Save Smart
        </h2>
        <p className="mt-4 text-lg text-gray-600 font-spacegrotesk max-w-2xl mx-auto">
          Start saving with purpose. Grow with your community. Gain control of your money — one goal at a time.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="border-2 border-[#0466C8] rounded-2xl p-6 flex flex-col transition-all duration-300"
          >
            {/* Icon */}
            <div className="mb-4">{feature.icon}</div>

            {/* Title */}
            <h3 className="text-lg font-bold text-[#0466C8] font-poppins">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="mt-2 text-gray-600 font-spacegrotesk text-sm">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
