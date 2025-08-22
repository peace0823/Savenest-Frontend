"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

// Wraps your app with NextAuth SessionProvider (client side)
export default function Providers({ children }: { children: ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
