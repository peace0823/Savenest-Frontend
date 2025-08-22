"use client";

import { useSession } from "next-auth/react";
import SignOutButton from "../../../components/SignOutButton";

// Simple protected page showcasing session + Sign Out
export default function DashboardPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-grotesk text-[#101010]">Loading your dashboard…</p>
      </div>
    );
  }

  if (!session) {
    // If you’re not using middleware, you can show a link to sign in
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="font-grotesk">You must be signed in to view the dashboard.</p>
        <a
          href="/signin"
          className="bg-[#1F299C] text-white px-5 py-2 rounded-xl font-poppins hover:bg-[#0466C8]"
        >
          Go to Sign In
        </a>
      </div>
    );
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center gap-6 px-6">
      <h1 className="text-3xl font-bold text-[#1F299C] font-poppins">
        Welcome, {session.user?.name || session.user?.email}
      </h1>
      <p className="font-grotesk text-[#101010]">
        This is your secure dashboard. You’re logged in as{" "}
        <span className="font-semibold">{session.user?.email}</span>.
      </p>

      {/* Use the SignOutButton (brand-colored) */}
      <SignOutButton redirectTo="/signin" size="md" />
    </section>
  );
}
