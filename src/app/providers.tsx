"use client";

import { ReactNode } from "react";

// Generic provider wrapper (can be extended later)
export default function Providers({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
