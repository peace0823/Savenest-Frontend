
"use client"

import Link from "next/link"
import { motion } from "framer-motion";
import { useState } from "react";

export default function VerifyEmailSection({ nextStep, onNext }: { nextStep?: () => void, onNext: () => void }) {
    const [otp, setOtp] = useState<string>("");
    return (

        <div className="w-full h-screen flex justify-center items-center px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-7xl rounded-3xl flex flex-col lg:flex-row items-center gap-20">
                {/* Left side - Text Content */}
                <div className="flex-1 w-full flex flex-col justify-start items-start max-w-lg">
                    <h1 className="text-5xl md:text-6xl font-bold text-[#1F299C] font-grotesk">
                        Verify Email
                    </h1>

                    <ul className="mt-6 text-lg md:text-xl text-soft-off text-black font-grotesk list-disc list-inside space-y-2">
                    <li>Almost there! Verify Your Email</li>
                    <li>We sent a 4-digit code to your email.</li>
                    <li>Check your inbox and enter the code below.</li>
                    <li>CTA: Confirm Code</li>
                    </ul>

                <p className="mt-6 text-lg md:text-xl text-soft-off text-black font-grotesk max-w-lg">
                  Trusted by over thousands of people like you<br />
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
                        <p className="text-lg flex-1 xl:text-xl text-soft-off text-[#1F299C] font-grotesk ">
                            Enter Verification Code
                        </p>

                        <p className="text-md flex-1 sm:text-sm text-soft-off text-black font-grotesk max-w-lg">
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

                    {/* Submit button */}
                    <div className="w-full flex justify-between items-center">
                        <Link href="/resend-otp" className="text-sm text-[#1F299C] hover:underline">
                            Resend OTP
                        </Link>
                        <button
                            onClick={() => {
                                onNext();
                                if (nextStep) nextStep();
                            }}
                            className="self-end mt-4 py-3 px-8 bg-[#1F299C] rounded-3xl text-white hover:bg-[#343fb4] focus:outline-none focus:ring-2 focus:ring-[#1F299C] focus:ring-opacity-50"
                        >
                            Verify Email
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>

    )
}