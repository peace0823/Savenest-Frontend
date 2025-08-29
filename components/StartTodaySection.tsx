"use client";

import { RocketIcon } from "lucide-react";

export default function StartTodaySection() {
    return (
        <section className="pt-20 w-full flex justify-center items-center px-4 py-12">
            <div className="bg-[rgba(31,41,156,0.18)] overflow-hidden w-full max-w-7xl h-full rounded-3xl p-8 lg:p-16 items-center gap-8 ">
                {/* Icon */}
                <div className="mb-4 text-center flex justify-center items-center w-full max-w-full">
                    <RocketIcon className="w-30 h-30 text-[#1F299C]" />
                </div>

                {/* Headline */}
                <h1 className="text-4xl md:text-5xl font-bold text-soft-off text-black font-poppins leading-tight text-center">
                    Everything You need to save smart
                </h1>

                {/* Sub-headline */}
                <p className="mt-6 text-lg md:text-xl w-full text-soft-off text-[#0466C8] font-grotesk text-center">
                    Ready to kickstart your savings journey with Nesty?
                </p>

                <div className=" flex justify-center items-center">
                    <button className="mt-8 bg-[#FBBF24] text-black py-2 px-4 font-grotesk font-bold rounded-lg">
                        Start Your Nest Today
                    </button>
                </div>

            </div>
        </section>
    );
}
