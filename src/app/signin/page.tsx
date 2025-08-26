// src/app/login/page.tsx
'use client'

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function SigninPage() {
  const router = useRouter();

  const handleLogin = () => {
    // In production, add auth validation here
    router.push("/dashboard"); // Redirect to dashboard after login
  };

  return (
    <section className="w-fullustify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="w-full flex justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden w-full max-w-7xl py-2 flex flex-col lg:flex-row items-center gap-8">

          {/* LEFT: Logo + Name */}
          <div className="flex-1 w-full flex justify-start">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/images/Logo-blue2.png"
                alt="Logo"
                height={40}
                width={40}
              />
              <span className="text-xl font-bold text-[#1F299C] font-[Poppins]">Savenest</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full h-screen flex justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl rounded-3xl flex flex-col lg:flex-row items-center gap-20">
          {/* Left side */}
          <div className="w-full max-w-7xl md:w-[60%] flex flex-col items-start justify-center p-10 relative">
            <h1 className="text-6xl md:text-6xl font-black text-[#1F299C] font-grotesk">
              Login to Your Nest
            </h1>
            <>
              <p className="mt-6 text-lg md:text-2xl font-black text-soft-off text-black font-grotesk max-w-lg">
                Fill in all your details to log in to your account.
              </p>

              <ul className="mt-6 space-y-3 text-sm md:text-lg text-gray-900 max-w-md font-black font-grotesk">
                <li className="flex items-start">
                  <span className="mr-3 text-[#1F299C] font-bold">✓</span>
                  <span>Fast setup — get started in less than a minute.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-[#1F299C] font-bold">✓</span>
                  <span>Secure & private — we encrypt your data end-to-end.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-[#1F299C] font-bold">✓</span>
                  <span>Personalized recommendations tailored to your needs.</span>
                </li>
              </ul>

              <div className="mt-6">
                <Link
                  href="/signup"
                  className="text-md text-[#1F299C] font-bold hover:underline font-grotesk"
                >
                  Don&apos;t have an account? <br />Create one in 60 seconds
                </Link>
              </div>
            </>
          </div>

          {/* Right side */}
          <div className="w-full md:w-[60%] flex items-center justify-center bg-white">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="w-full max-w-xl border border-[#0466C8] rounded-xl p-8 shadow-md m-6"
            >
              <div className="self-start align-top max-w-lg flex flex-col gap-2 lg:py-4 mb-5">
                <p className="text-lg flex-1 xl:text-2xl font-black text-soft-off text-[#1F299C] font-grotesk">
                  Enter Your Details
                </p>

              </div>

              {/* Email input */}
              <div className="mb-5 lg:py-3">
                <input
                  type="email"
                  placeholder="janedoe@gmail.com"
                  className="w-full p-5 border rounded-xl bg-[#F3F4F6] border-[#343fb4] focus:outline-none focus:ring-2 focus:ring-[#1F299C] focus:border-transparent"
                />
              </div>

              {/* Password input */}
              <div className="mb-3 lg:py-3">
                <input
                  type="password"
                  placeholder="********"
                  className="w-full p-5 border rounded-xl bg-[#F3F4F6] border-[#343fb4] focus:outline-none focus:ring-2 focus:ring-[#1F299C] focus:border-transparent"
                />
              </div>

              {/* Login button */}
              <button
                onClick={handleLogin}
                className="w-full bg-[#1F299C] hover:bg-[#343fb4] text-white font-bold py-3 rounded-full transition mt-5"
              >
                Login
              </button>

              {/* Forgot password */}
              <div className="text-right mt-3">
                <Link
                  href="/forgot-password"
                  className="text-sm font-black md:text-1xl text-[#0466C8] hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
