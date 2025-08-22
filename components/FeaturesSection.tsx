// components/FeaturesSection.tsx
"use client";

import { motion } from "framer-motion";
import { Users, Sparkles, Wallet, Gamepad2, BarChart3, Shield } from "lucide-react";

const features = [
  {
    icon: <Users className="w-8 h-8 text-[#0466C8]" />,
    title: "Save Together, Grow Together",
    description:
      "Join a vibrant community of savers. Pool funds, set shared goals, and celebrate milestones together. Saving is better when you’re not alone.",
    buttonText: 'Join the Community',
    link: '/join',
  },
  {
    icon: <Sparkles className="w-8 h-8 text-[#0466C8]" />,
    title: "Your Personal Savings Ally",
    description:
      "Meet your intelligent savings companion—always reminding, motivating, and guiding you. Like a financial coach, right in your pocket",
    buttonText: 'Meet Your Companion',
    link: '/join',
  },
  {
    icon: <Wallet className="w-8 h-8 text-[#0466C8]" />,
    title: "Save Smarter, Not Harder",
    description:
      "Automate your savings, set flexible goals, and watch your money grow effortlessly. Saving made simple, effortless, and smart.",
    buttonText: 'Start Smart Saving',
    link: '/join',
  },
  {
    icon: <Gamepad2 className="w-8 h-8 text-[#0466C8]" />,
    title: "Turn Saving into a Game",
    description:
      "Take on fun challenges, earn rewards, and climb leaderboards. Make saving exciting, addictive, and rewarding—watch your progress skyrocket!",
    buttonText: 'Take the Challenge',
    link: '/join',
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-[#0466C8]" />,
    title: "Know Where Every Naira Goes",
    description:
      "Track spending, set budgets, and gain full control of your finances. No stress, just clarity.",
    buttonText: 'Track Your Budget',
    link: '/join',
  },
  {
    icon: <Shield className="w-8 h-8 text-[#0466C8]" />,
    title: "Bank-level Security",
    description:
      "Enjoy top-tier encryption and secure transactions. With Savenest, your savings are protected 24/7. Peace of mind becomes standard.",
    buttonText: 'Secure Your Savings',
    link: '/join',
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0466C8] font-poppins">
          Join in Minutes- Quick, simple signup.
        </h2>
        <p className="mt-4 text-lg text-gray-600 font-spacegrotesk max-w-2xl mx-auto">
          Set Your Goal- Emergency fund, travel, future dreams.<br /> Save Together - Watch progress grow with your community.
        </p>

        <div className="flex justify-center">
          <button className="mt-6 bg-[#FBBF24] text-black py-2 px-4 font-grotesk font-bold rounded-full">
            Start My Journey
          </button>
        </div>
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

            <div className="mt-auto pt-3">
              <a
                href={feature.link}
                className="inline-block bg-[#FBBF24] text-black py-2 px-4 font-grotesk font-bold rounded-full"
              >
                {feature.buttonText}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
