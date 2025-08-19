import type { Metadata } from "next";
import { Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/Navbar";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk ({
  weight: ['300', '400', '500', '600'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "M4ACE Group 5 Final Project",
  description: "SaveNest App create with NaxtJs aNd Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.className} ${poppins.className} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
