"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";


export default function Footer() {
    const [email, setEmail] = useState("");

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        // wire this to your signup/lead endpoint
        console.log("Get Started:", email);
        setEmail("");
    }

    return (
        <footer className="pt-40  bg-white">
            <section className="relative bg-[#1f299c1c]">
                {/* your content here */}
                <div className="h-56" />

                {/* White curve that eats into the blue */}
                <svg
                    className="pointer-events-none absolute bottom-0 left-0 h-24 w-full"
                    viewBox="0 0 1440 120"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                >
                    {/* This path creates the smooth upward curve */}
                    <path
                        d="M0,0 C360,120 1080,120 1440,0 L1440,120 L0,120 Z"
                        fill="#ffffff"
                    />
                </svg>
            </section>
            {/* CTA card */}
            <div className="flex justify-center px-4 relative bottom-20">
                <div className="w-full max-w-5xl bg-[#1F299C] rounded-xl p-6 lg:p-20 shadow-2xl transform -translate-y-6">
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <h3 className="text-white text-lg md:text-xl font-semibold min-w-[180px]">
                            Start My Nest
                        </h3>

                        <form onSubmit={handleSubmit} className="flex w-full gap-3">
                            <label htmlFor="footer-email" className="sr-only">Email</label>
                            <input
                                id="footer-email"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="flex-1 rounded-md px-4 py-2 text-sm outline-none bg-white"
                            />
                            <button
                                type="submit"
                                className="bg-white text-[#0f172a] px-4 py-2 rounded-md font-semibold text-sm hover:opacity-95"
                            >
                                Get Started
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Links & social */}
            <div className="border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-6 py-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <nav className="flex gap-15 text-sm text-slate-600">
                            <a href="#" className="hover:underline">About us</a>
                            <a href="#" className="hover:underline">Discover</a>
                            <a href="#" className="hover:underline">Explore</a>
                            <a href="#" className="hover:underline">Books</a>
                        </nav>

                        <div className="flex gap-10">
                            <a href="#" aria-label="Facebook" className="text-slate-600 hover:text-slate-800">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                                    <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.2v-2.9h2.2V9.3c0-2.2 1.3-3.4 3.3-3.4.96 0 1.97.17 1.97.17v2.2h-1.13c-1.12 0-1.47.7-1.47 1.42v1.7h2.5l-.4 2.9h-2.1v7A10 10 0 0022 12z" />
                                </svg>
                            </a>
                            <a href="#" aria-label="Twitter" className="text-slate-600 hover:text-slate-800">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                                    <path d="M22 5.92c-.63.28-1.3.47-2 .56a3.45 3.45 0 001.52-1.9 6.9 6.9 0 01-2.19.84 3.44 3.44 0 00-5.86 3.14A9.76 9.76 0 013 4.9a3.44 3.44 0 001.07 4.59 3.4 3.4 0 01-1.56-.43v.04c0 1.66 1.18 3.05 2.74 3.36a3.46 3.46 0 01-1.55.06 3.45 3.45 0 003.22 2.39A6.9 6.9 0 012 19.54a9.72 9.72 0 005.29 1.55c6.35 0 9.84-5.26 9.84-9.83v-.45A7.03 7.03 0 0022 5.92z" />
                                </svg>
                            </a>
                            <a href="#" aria-label="YouTube" className="text-slate-600 hover:text-slate-800">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                                    <path d="M23.5 6.2a3 3 0 00-2.12-2.12C19.28 3.5 12 3.5 12 3.5s-7.28 0-9.38.58A3 3 0 00.5 6.2 31.4 31.4 0 000 12a31.4 31.4 0 00.5 5.8 3 3 0 002.12 2.12C4.72 20.5 12 20.5 12 20.5s7.28 0 9.38-.58a3 3 0 002.12-2.12A31.4 31.4 0 0024 12a31.4 31.4 0 00-.5-5.8zM9.8 15.6V8.4l6.2 3.6-6.2 3.6z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Middle logo */}
                    <div className="mt-8 flex items-center justify-center">
                        <div className=" p-3">
                            <div className="w-12 h-12 relative">
                                <Link href="/" className="flex items-center space-x-2">
                                    <Image src="/images/Logo-blue2.png"
                                        alt="Logo"
                                        height={100}
                                        width={100}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Bottom legal  */}
                    <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                        <div className="text-1xl">© {new Date().getFullYear()} Savenest. All rights reserved.</div>
                        <div className="flex gap-6">
                            <a href="#" className="hover:underline text-1xl">Terms of Service</a>
                            <a href="#" className="hover:underline text-1xl">Privacy Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}