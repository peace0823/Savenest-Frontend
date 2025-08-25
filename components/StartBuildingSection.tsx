"use client";

import { useState } from "react";

export default function StartBuildingSection() {
    const [email, setEmail] = useState("");
    return (
        <section className=" w-full flex justify-center items-center px-4 pb-12">
            <div className="bg-[#1F299C] overflow-hidden gap-y-10 w-full max-w-7xl h-full rounded-3xl p-8 lg:p-25 items-center ">
                {/* Headline */}
                <h1 className="text-4xl md:text-5xl font-bold text-soft-off text-white font-grotesk leading-tight text-center lg:py-5">
                    Your Future Self Will Thank You
                </h1>

                {/* Sub-headline */}
                <p className="mt-6 text-lg md:text-xl w-full text-soft-off text-white font-grotesk text-center lg:py-5">
                    Don’t wait for the “right time.” Start today and build a future <br /> you’ll be proud of.
                </p>

                <div className=" flex justify-center items-center lg:pt-10">
                    <div className=" overflow-hidden flex flex-col lg:flex-row items-center justify-center align-middle gap-10">
                        {/* Left side - Text Content */}
                        <div className="flex-1 text-left justify-center">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-80 px-4 py-2 border rounded-xl bg-[#F3F4F6]"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        {/* Right side - Image */}
                        <div className="flex-1 w-full flex justify-center">
                            <button className="bg-[#FBBF24] hover:bg-[#c59417] hover:text-white text-black py-2 px-8 font-grotesk font-bold rounded-4xl ">
                                Start My Nest Now
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
