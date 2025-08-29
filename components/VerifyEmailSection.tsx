"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import apiManager from "../apiManager";
import { toast } from "react-toastify";
import { TailSpin } from "react-loading-icons";

export default function VerifyEmailSection({ nextStep, onNext, }: { nextStep?: () => void; onNext: () => void; }) {
  const [otp, setOtp] = useState<string>("");
  const [loading, setLoading] = useState(false); // ✅ Track loading state

  // ✅ Function to verify the code
  const handleVerifyCode = async () => {
    if (!otp) {
      toast.error("Please enter the verification code");
      return;
    }

    setLoading(true);
    try {
      await apiManager.post("/api/auth/verify-email", { code: otp });
      toast.success("Email verified successfully");

      // ✅ Move to next step in signup flow
      onNext();
      if (nextStep) nextStep();
    } catch (error) {
      toast.error("Invalid or expired code");
      console.error("Verification error:", error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Function to resend the code
  const handleResendCode = async () => {
    try {
      await apiManager.post("/api/auth/resend-code");
      toast.success("New verification code sent");
    } catch (error) {
      toast.error("Failed to resend code");
      console.error("Resend error:", error);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl rounded-3xl flex flex-col lg:flex-row items-center gap-20">
        {/* Left side - Text Content */}
        <div className="flex-1 w-full flex flex-col justify-start items-start max-w-lg">
          <h1 className="text-5xl md:text-6xl font-black text-[#1F299C] font-grotesk">
            Verify Email
          </h1>

          <ul className="mt-6 text-sm md:text-lg font-black text-black font-grotesk space-y-3">
            <li className="flex items-start">
              <span className="mr-3 text-[#1F299C] font-bold">✓</span>Almost there! Verify Your Email
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-[#1F299C] font-bold">✓</span>We sent a 4-digit code to your email.
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-[#1F299C] font-bold">✓</span>Check your inbox and enter the code below.
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-[#1F299C] font-bold">✓</span>Confirm Code
            </li>
          </ul>

          <p className="mt-6 text-lg md:text-xl text-soft-off text-black font-grotesk max-w-lg">
            Trusted by thousands of people like you<br />
            to save smart and grow with intentionality.
          </p>
        </div>

        {/* Right side - Form */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="transition-all duration-300 flex-1 w-full h-[500px] flex flex-col justify-between border-[#1F299C] border-2 max-w-7xl rounded-3xl p-8 lg:p-10 items-center gap-8"
        >
          <div className="self-start align-top max-w-lg flex flex-col gap-2">
            <p className="text-lg flex-1 xl:text-2xl font-black text-soft-off text-[#1F299C] font-grotesk">
              Enter Verification Code
            </p>
            <p className="text-md flex-1 font-bold md:text-lg text-soft-off text-black font-grotesk max-w-lg">
              You will receive a verification code in your email. Please enter it below to verify your account.
            </p>
          </div>

          <div className="w-full justify-center">
            <input
              type="text"
              value={otp}
              placeholder="Enter your OTP"
              className="w-full p-5 border rounded-xl bg-[#F3F4F6] border-[#343fb4] focus:outline-none focus:ring-2 focus:ring-[#1F299C] focus:border-transparent"
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>

          {/* Submit + Resend buttons */}
          <div className="w-full flex justify-between items-center">
            <button
              onClick={handleResendCode}
              className="text-sm font-bold md:text-lg text-[#1F299C] hover:underline"
            >
              Resend OTP
            </button>
            <button
              onClick={handleVerifyCode}
              className="self-end mt-4 py-3 px-8 bg-[#1F299C] hover:bg-[#343fb4] rounded-3xl text-white focus:outline-none focus:ring-2 focus:ring-[#1F299C] focus:ring-opacity-50  disabled:opacity-60"
              disabled={loading || !otp}
            >
              {loading ? <span
                className="w-5 mx-auto h-full justify-center flex"
                style={{ height: "calc(2.7vh)" }}
              >
                <TailSpin stroke="#fff" strokeWidth="4" color="#fff" />
              </span> : "Verify Email"}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
