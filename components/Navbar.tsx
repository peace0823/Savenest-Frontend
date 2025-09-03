"use client";

import { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import SignInButton from "./SignInButton";
import SignUpButton from "./SignUpButton";
import { motion, AnimatePresence } from "framer-motion";
// Import Heroicons instead of lucide-react
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";





const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-[#F9FAFB] shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* LEFT: Logo + Name */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/images/Logo-blue2.png"
            alt="Logo"
            height={40}
            width={40}
          />
          <span className="text-xl font-[Poppins] font-bold text-[#1F299C]">Savenest</span>
        </Link>

        {/* CENTER: Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-[Poppins] ">
          <NavLink href="/" label="Home" />
          <NavLink href="/community" label="Community" />
          <NavLink href="/savings" label="Savings" />
          <NavLink href="/contact-us" label="Contact Us" />
        </div>

        {/* RIGHT: Buttons (Desktop only) */}
        <div className="hidden md:flex space-x-4">
          <SignInButton />
          <SignUpButton />
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#101010] focus:outline-none"
          >
            {isOpen ? (
              <XMarkIcon className="h-7 w-7" />
            ) : (
              <Bars3Icon className="h-7 w-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown with Animation */}
      <AnimatePresence>
        {isOpen && (

          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-[#F9FAFB] shadow-lg px-6 py-4 overflow-hidden"
          >
            <div className="flex flex-col space-y-4">
              <NavLink href="/" label="Home" />
              <NavLink href="/community" label="Community" />
              <NavLink href="/savings" label="Savings" />
              <NavLink href="/contact-us" label="Contact Us" />
            </div>
            <div className="flex flex-col space-y-2 pt-4">
              <SignInButton />
              <SignUpButton />
            </div>
          </motion.div>



        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
