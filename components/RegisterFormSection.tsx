"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import apiManager from "../apiManager"; // Axios instance
import { toast } from "react-toastify";   // Toast notifications
import { useRouter } from "next/navigation"; // For redirecting after signup

export default function RegisterFormSection({
  nextStep,
  onNext,
}: {
  nextStep?: () => void;
  onNext: () => void;
}) {
  const router = useRouter();

  // Form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [referral, setReferral] = useState("");

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  // Validation logic
  function validate() {
    const e: Record<string, string> = {};
    if (!firstName.trim()) e.firstName = "First name is required";
    if (!lastName.trim()) e.lastName = "Last name is required";
    if (!gender) e.gender = "Select gender";
    if (!phone.trim()) e.phone = "Phone number is required";
    else if (!/^\+?\d{7,15}$/.test(phone.trim())) e.phone = "Enter a valid phone number";
    if (!password) e.password = "Password is required";
    else if (password.length < 8) e.password = "Password must be at least 8 characters";
    if (password !== confirmPassword) e.confirmPassword = "Passwords do not match";
    return e;
  }

  // Submit logic
  async function handleSubmit(e?: React.FormEvent) {
    e?.preventDefault();
    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    setLoading(true);
    try {
      await apiManager.post("/api/auth/signup", {
        firstname: firstName,
        lastname: lastName,
        gender,
        phoneNumber: phone,
        password,
        referralCode: referral,
      });

      toast.success("Account created successfully!");

      setTimeout(() => {
        router.push("/signin");
      }, 2000);
    } catch (error) {
      toast.error("Signup failed");
      console.error("Signup error:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full h-screen flex justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl rounded-3xl flex flex-col lg:flex-row items-center gap-20">
        {/* Left side - Text Content */}
        <div className="flex-1 w-full flex flex-col justify-start items-start max-w-lg">
          <h1 className="text-5xl md:text-6xl font-bold text-[#1F299C] font-grotesk">
            Create Account
          </h1>
          <>
            <p className="mt-6 text-lg md:text-xl text-soft-off text-black font-grotesk max-w-lg">
              Fill in all your details to create a new account.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-gray-700 max-w-md font-grotesk">
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

            <p className="mt-6 text-sm text-gray-600 max-w-md font-grotesk">
              By creating an account you agree to our{" "}
              <Link href="/terms" className="text-[#1F299C] font-medium hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-[#1F299C] font-medium hover:underline">
                Privacy Policy
              </Link>
              .
            </p>

            <div className="mt-6">
              <Link
                href="/login"
                className="text-sm text-[#1F299C] font-medium hover:underline font-grotesk"
              >
                Already have an account? Sign in
              </Link>
            </div>
          </>
        </div>

        {/* Right side - Form */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="transition-all duration-300 flex-1 w-full flex flex-col justify-between border-[#1F299C] border-2 max-w-7xl rounded-3xl p-8 lg:p-10 items-center gap-8"
        >
          <div className="self-start align-top max-w-lg flex flex-col gap-2">
            <p className="text-lg flex-1 xl:text-xl text-soft-off text-[#1F299C] font-grotesk ">
              Enter Your Details
            </p>
            <p className="text-md flex-1 sm:text-sm text-soft-off text-black font-grotesk max-w-lg">
              Fill in your details to create a new account.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {/* First Name */}
            <div>
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                className="w-full p-5 border rounded-xl bg-white border-[#343fb4] focus:outline-none focus:ring-2 focus:ring-[#1F299C] focus:border-transparent"
              />
              {errors.firstName && <div className="text-xs text-red-600 mt-1">{errors.firstName}</div>}
            </div>

            {/* Last Name */}
            <div>
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                className="w-full p-5 border rounded-xl bg-white border-[#343fb4] focus:outline-none focus:ring-2 focus:ring-[#1F299C] focus:border-transparent"
              />
              {errors.lastName && <div className="text-xs text-red-600 mt-1">{errors.lastName}</div>}
            </div>

            {/* Gender */}
            <div>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full p-5 border rounded-xl bg-white border-[#343fb4] focus:outline-none focus:ring-2 focus:ring-[#1F299C] focus:border-transparent"
              >
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && <div className="text-xs text-red-600 mt-1">{errors.gender}</div>}
            </div>

            {/* Phone Number */}
            <div>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number"
                type="tel"
                className="w-full p-5 border rounded-xl bg-white border-[#343fb4] focus:outline-none focus:ring-2 focus:ring-[#1F299C] focus:border-transparent"
              />
              {errors.phone && <div className="text-xs text-red-600 mt-1">{errors.phone}</div>}
            </div>

            {/* Password */}
            <div className="md:col-span-2">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full p-5 border rounded-xl bg-white border-[#343fb4] focus:outline-none focus:ring-2 focus:ring-[#1F299C] focus:border-transparent"
              />
              {errors.password && <div className="text-xs text-red-600 mt-1">{errors.password}</div>}
            </div>

            {/* Confirm Password */}
            <div className="md:col-span-2">
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                className="w-full p-5 border rounded-xl bg-white border-[#343fb4] focus:outline-none focus:ring-2 focus:ring-[#1F299C] focus:border-transparent"
              />
              {errors.confirmPassword && (
                <div className="text-xs text-red-600 mt-1">{errors.confirmPassword}</div>
              )}
            </div>

            {/* Referral Code */}
            <div className="md:col-span-2">
              <input
                value={referral}
                onChange={(e) => setReferral(e.target.value)}
                placeholder="Referral Code (optional)"
                className="w-full p-5 border rounded-xl bg-white border-[#343fb4] focus:outline-none focus:ring-2 focus:ring-[#1F299C] focus:border-transparent"
              />
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 flex justify-end">
              <button
                type="submit"
                className="mt-4 py-3 px-8 bg-[#1F299C] rounded-3xl text-white hover:bg-[#343fb4] focus:outline-none focus:ring-2 focus:ring-[#1F299C] focus:ring-opacity-50"
                disabled={loading}
              >
                {loading ? "Creating Account..." : "Create Account"}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
