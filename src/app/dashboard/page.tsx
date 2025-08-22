"use client";

import SignOutButton from "../../../components/SignOutButton";

type User = {
  name?: string;
  email?: string;
};

// Simulated user data (replace with your own auth logic)
const mockUser: User | null = {
  name: "Charles",
  email: "charles@example.com",
};

export default function DashboardPage() {
  const session = mockUser;

  if (!session) {
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
        Welcome, {session.name || session.email}
      </h1>
      <p className="font-grotesk text-[#101010]">
        This is your secure dashboard. You’re logged in as{" "}
        <span className="font-semibold">{session.email}</span>.
      </p>

      <SignOutButton redirectTo="/signin" size="md" />
    </section>
  );
}
