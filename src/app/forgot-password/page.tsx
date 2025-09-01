"use client";

import Image from "next/image";
import { FaLock } from "react-icons/fa";

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-blue-100 flex flex-col">
      {/* Logo and App Name */}
      <div className="p-4 flex items-center space-x-2">
        <a href="/">
          <Image src="/images/Logo-blue2.png" alt="Savenest Logo" width={50} height={50} />
        </a>
        <span className="text-2xl font-bold text-blue-900">Savenest</span>
      </div>

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center bg-blue-500">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 w-full max-w-[85%]">
          {/* Left Card */}
          <div className="bg-blue-600 rounded-lg p-10 relative text-white flex flex-col justify-center items-center min-h-[350px]">
            <div className="absolute top-6 left-6 w-20 h-20 bg-blue-800 rounded-full opacity-30"></div>
            <div className="absolute bottom-6 right-6 w-24 h-24 bg-blue-800 rounded-full opacity-30"></div>

            <h2 className="text-3xl font-bold mb-4 text-center">Secure Account Recovery</h2>
            <p className="text-lg text-center max-w-md">
              We will help you to get back to your nest safely and securely
            </p>
          </div>

          {/* Right Card */}
          <div className="bg-white rounded-lg p-10 flex flex-col items-center shadow-md min-h-[350px]">
            <FaLock className="text-blue-600 text-5xl mb-6" />
            <h2 className="text-2xl font-bold text-blue-600 mb-3">Forgot Password?</h2>
            <p className="text-lg text-center text-gray-700 mb-6 max-w-md">
              No worries! Enter your email address, and we will send a secure link to reset your password.
            </p>
            <input
              type="email"
              placeholder="janedoe@gmail.com"
              className="w-full border border-gray-300 rounded px-5 py-3 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
            />
            <button className="self-end bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition cursor-pointer text-lg">
              Send reset link
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
