// src/app/login/page.tsx
'use client'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SigninPage() {
  const router = useRouter();

  const handleLogin = () => {
    // In production, add auth validation here
    router.push("/dashboard"); // Redirect to dashboard after login
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-poppins">
      {/* Left side */}
      <div className="w-full md:w-[60%] bg-[#F9FAFB] flex flex-col items-center justify-center p-10 relative">
        {/* Logo + Brand name */}
        <div className="absolute top-6 left-6 flex items-center gap-2">
          <div  />
          <Image src="/images/Logo-blue1.png" alt="logo" width={70} height={70} />
          <span className="text-[#1F299C] font-bold text-xl">Savenest</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold text-[#1F299C] mb-6">Sign in</h1>

        {/* Image box */}
        <div className="w-full max-w-[500px] flex items-center justify-center">
          <Image
            src="/images/welcome.png"
            alt="hello"
            width={800}
            height={800}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Right side */}
      <div className="w-full md:w-[60%] flex items-center justify-center bg-white">
        <div className="w-full max-w-xl border border-[#0466C8] rounded-xl p-8 shadow-md m-6">
          {/* Email input */}
          <label className="block text-[#1F299C] font-semibold mb-2">
            Type in your Email
          </label>
          <input
            type="email"
            placeholder="janedoe@gmail.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#0466C8]"
          />

          {/* Password input */}
          <label className="block text-[#1F299C] font-semibold mb-2">
            Type in your Password
          </label>
          <input
            type="password"
            placeholder="********"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-[#0466C8]"
          />

          {/* Login button */}
          <button
            onClick={handleLogin}
            className="w-full bg-[#FF9F1C] hover:bg-[#e68a00] text-white font-bold py-3 rounded-full transition"
          >
            Login
          </button>

          {/* Forgot password */}
          <div className="text-right mt-3">
            <Link
              href="/forgot-password"
              className="text-sm text-[#0466C8] hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
