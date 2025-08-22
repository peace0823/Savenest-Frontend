"use client";

import { signOut } from "next-auth/react";

type Props = {
  // Optional: where to send the user after sign out (default: "/")
  redirectTo?: string;
  // Optional: make it small/medium/large
  size?: "sm" | "md" | "lg";
};

export default function SignOutButton({ redirectTo = "/", size = "md" }: Props) {
  // Brand-aware sizing (Savenest colors + rounded style)
  const sizeClasses =
    size === "sm"
      ? "px-3 py-1.5 text-sm"
      : size === "lg"
      ? "px-6 py-3 text-base"
      : "px-4 py-2 text-sm";

  return (
    <button
      onClick={() => signOut({ callbackUrl: redirectTo })}
      className={`inline-flex items-center justify-center ${sizeClasses}
        bg-[#FF9F1C] text-white rounded-xl font-poppins
        hover:bg-orange-500 transition
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0466C8]
      `}
      title="Sign out of Savenest"
    >
      Sign Out
    </button>
  );
}
