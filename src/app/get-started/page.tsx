"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function GetStartedPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  // On submit, push to /signup and prefill email via query
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    router.push(`/signup?email=${encodeURIComponent(email)}`);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#F9FAFB] px-6">
      <div className="bg-white border border-[#1F299C] rounded-2xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-[#1F299C] font-Poppins mb-1">Get Started</h1>
        <p className="text-sm text-[#101010] font-grotesk mb-6">Type in your email to begin.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block text-sm font-medium font-grotesk">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0466C8]"
            required
          />

          <button
            type="submit"
            className="w-full bg-[#1F299C] text-white py-3 rounded-xl font-semibold font-poppins hover:bg-[#0466C8] transition"
          >
            Continue
          </button>
        </form>
      </div>
    </section>
  );
}
