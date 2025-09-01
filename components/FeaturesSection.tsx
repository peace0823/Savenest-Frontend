// components/FeaturesSection.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { Users, Sparkles, Wallet, Gamepad2, BarChart3, Shield } from "lucide-react";

const features = [
  {
    icon: <Users className="w-8 h-8 text-[#0466C8]" />,
    title: "Community Savings",
    description:
      "Join a vibrant community of savers. Pool funds, set shared goals, and celebrate milestones together. Saving is better when you’re not alone.",
    buttonText: 'Join the Community',
    link: '/join',
  },
  {
    icon: <Sparkles className="w-8 h-8 text-[#0466C8]" />,
    title: "Savings Companion",
    description:
      "Meet a smart accountability partner that makes saving both inspiring and motivating, enabling you to develop financial discipline.",
    buttonText: 'Meet Your Companion',
    link: '/join',
  },
  {
    icon: <Wallet className="w-8 h-8 text-[#0466C8]" />,
    title: "Smart savings",
    description:
      "Choose your savings plan, whether weekly or monthly, then automate your savings to meet your financial goals.",
    buttonText: 'Start Smart Saving',
    link: '/join',
  },
  {
    icon: <Gamepad2 className="w-8 h-8 text-[#0466C8]" />,
    title: "Savings doesn't have to be boring.",
    description:
      "Engaging in our games is fun, relieves you of stress, improves your problem-solving skills, and leaves you excited and motivated to save.",
    buttonText: 'Take the Challenge',
    link: '/join',
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-[#0466C8]" />,
    title: "Budget Tracking",
    description:
      "Track spending, set budgets, and gain full control of your finances. No stress, just clarity.",
    buttonText: 'Track Your Budget',
    link: '/join',
  },
  {
    icon: <Shield className="w-8 h-8 text-[#0466C8]" />,
    title: "Bank-level Security",
    description:
      "Your personal information is encrypted and transactions are safe and secure.",
    buttonText: 'Secure Your Savings',
    link: '/join',
  },
];

function useInView(ref: React.RefObject<HTMLElement | null>) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const current = ref.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, [ref]);

  return isVisible;
}

export default function FeaturesSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerVisible = useInView(headerRef);

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div
        ref={headerRef}
        className={`text-center mb-12 transition-all duration-700 ease-out transform ${
          headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#0466C8] font-poppins">
          Community savings made easy and enjoyable <br /> for you
        </h2>
        <p className="mt-4 text-2xl text-gray-500 font-spacegrotesk max-w-2xl mx-auto">
          Save smart with like-minded individuals
        </p>

        <div className="flex justify-center">
          <button className="mt-8 bg-[#FBBF24] text-black py-2 px-4 font-grotesk font-bold rounded-full">
            Start My Journey
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const cardRef = useRef<HTMLDivElement>(null);
          const isVisible = useInView(cardRef);

          return (
            <div
              key={index}
              ref={cardRef}
              style={{
                transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
              }}
              className={`border-2 border-[#0466C8] rounded-2xl p-6 flex flex-col transition-all duration-700 ease-out transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {/* Icon */}
              <div className="mb-4">{feature.icon}</div>

              {/* Title */}
              <h3 className="text-lg font-bold text-[#0466C8] font-poppins">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-gray-800 font-spacegrotesk text-sm">
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
            </div>
          );
        })}
      </div>
    </section>
  );
}

