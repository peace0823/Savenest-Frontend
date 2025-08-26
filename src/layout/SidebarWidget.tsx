import React from "react";
import { motion } from "framer-motion";

export default function SidebarWidget() {
  return (
    <motion.div
      whileHover={{ scale: 0.94 }}
      whileTap={{ scale: 1.1 }}
      className="transition-all duration-300"
    >
      <div
        className={`
        mx-auto mb-10 w-full max-w-60 rounded-2xl bg-[white] px-4 py-5 text-center`}
      >
        <h3 className="mb-2 font-bold text-[#1F299C]">
          Save Money Together
        </h3>
        <p className="mb-4 text-[#1F299C] text-theme-sm ">
          Smartest way to smash your savings goal against all odds.
        </p>
      
      </div>
    </motion.div>
  );
}
