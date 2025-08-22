// components/SectionFive.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function SectionFive() {
  const router = useRouter();

  return (
    <section className="w-full flex justify-center items-center py-12 px-4 bg-[#F9FAFB]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-white rounded-2xl shadow-lg w-full max-w-4xl p-8 flex flex-col items-center text-center"
        style={{ width: "80%" }}
      >
        {/* Mascot Image in a Circle */}
        <div className="w-32 h-32 rounded-full overflow-hidden mb-6">
          <Image
            src="/images/macsot.png" // replace with actual mascot path
            alt="Nesty Mascot"
            width={128}
            height={128}
            className="object-cover"
          />
        </div>

        {/* Header */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#0466C8] font-poppins mb-4">
          Ready to start your Savings journey with Nesty?
        </h2>

        {/* Paragraph */}
        <p className="text-base md:text-lg text-[#101010] font-Space-Grotesk mb-6 max-w-2xl">
          Start saving with purpose. Grow with your community. Gain control of your money — one goal at a time.
        </p>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => router.push("/signup")}
          className="bg-[#FF9F1C] text-white font-poppins font-semibold py-3 px-8 rounded-xl hover:cursor-pointer hover:bg-[#0466C8] transition"
        >
          Get Started
        </motion.button>
      </motion.div>
    </section>
  );
}
