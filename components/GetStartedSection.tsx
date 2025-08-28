"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import apiManager from "../apiManager"; // ✅ Import your Axios instance
import { toast } from "react-toastify";   // ✅ For showing success/error messages

export default function GetStartedSection({
  nextStep,
  onNext,
}: {
  nextStep?: () => void;
  onNext: () => void;
}) {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState(false); // ✅ Track loading state

  // ✅ Function to send email to backend and request verification code
  const handleRequestCode = async () => {
    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    setLoading(true);
    try {
      // ✅ Call backend endpoint to request verification code
      await apiManager.post("/api/auth/request-verification", { email });

      toast.success("Verification code sent to your email");

      // ✅ Move to next step in signup flow
      onNext();
      if (nextStep) nextStep();
    } catch (error) {
      toast.error("Failed to send verification code");
      console.error("Request error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl rounded-3xl flex flex-col lg:flex-row items-center gap-20">
        {/* Left side - Text Content */}
        <div className="flex-1 w-full flex flex-col justify-start items-start max-w-lg">
          <h1 className="text-5xl md:text-6xl font-black text-[#1F299C] font-grotesk">
            Get Started
          </h1>
          <p className="mt-6 text-lg md:text-2xl font-bold text-soft-off text-black font-grotesk max-w-lg mb-10">
            We're just one step away from completing your sign-up. To ensure the security of your account, we need to verify your details.
          </p>

          <div>
            <Link href="/signin" className="flex-1 text-right space-x-2">
              <span className="mt-6 text-md md:text-md font-bold text-soft-off font-grotesk hover:underline text-[#1F299C]">
                Already have an account? <br />
                Sign in
              </span>
            </Link>
          </div>
        </div>

        {/* Right side - Form */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="transition-all duration-300 flex-1 w-full h-[500px] flex flex-col justify-between border-[#1F299C] border-2 max-w-7xl rounded-3xl p-8 lg:p-10 items-center gap-8"
        >
          <div className="self-start align-top max-w-lg flex flex-col gap-2">
            <p className="text-lg flex-1 xl:text-3xl font-black text-soft-off text-[#1F299C] font-grotesk">
              Create Your Account
            </p>
            <p className="text-md flex-1 md:text-1xl font-bold text-soft-off text-black font-grotesk max-w-lg">
              Type in your email to get started.
            </p>
          </div>

          <div className="w-full justify-center">
            <input
              type="email"
              value={email}
              placeholder="Enter your email"
              className="w-full p-5 border rounded-xl bg-[#F3F4F6] border-[#343fb4] focus:outline-none focus:ring-2 focus:ring-[#1F299C] focus:border-transparent"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* ✅ Updated button to trigger backend call */}
          <button
            onClick={handleRequestCode}
            className="self-end w-30 mt-4 py-3 px-8 bg-[#1F299C] rounded-3xl text-white hover:bg-[#343fb4] focus:outline-none focus:ring-2 focus:ring-[#1F299C] focus:ring-opacity-50"
            disabled={loading || !email}
          >
            {loading ? "Sending..." : "Next"}
          </button>
        </motion.div>
      </div>
    </div>
  );
}
