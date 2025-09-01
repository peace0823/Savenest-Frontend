// components/HowItWorksSection.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HowItWorksSection() {
    const steps = [
        {
            id: 1,
            value: '01',
            title: "Meet Nesty",
            body: "Meet Nesty, a result-oriented guide that helps you to make the right choices based on your income and expenses thereby enabling you to set your financial goals and how to achieve them.",
            image: "/images/App.png"
        },
        {
            id: 2,
            value: '02',
            title: "Save in Communities",
            body: "Join a circle of like-minded individuals who have the same mindset of making their dreams achievable through every amount they save, hereby making saving enjoyable and effortless.",
            image: "/images/money.png"
        },
        {
            id: 3,
            value: '03',
            title: "Level Up with Nesty",
            body: "Allow Nesty to help you with your budget and make the right investment hereby making your money work for you.",
            image: "/images/aapp.png"
        }
    ];

    return (
        <section className="pt-1 w-full flex justify-center items-center px-1 py-12">
            <div className="w-full max-w-7xl rounded-3xl p-8 lg:p-16">
                {/* Header with transitions */}
                <div className="w-full max-w-7xl justify-center text-center rounded-3xl p-8 lg:p-11 items-center gap-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl text-[#0466C8] font-poppins font-bold"
                    >
                        How Savenest Works
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="mt-4 text-lg md:text-xl text-slate-600 font-grotesk font-semibold"
                    >
                        Savenest is a savings app that secures your money with a saving plan of your own choice and also provides you a community that makes saving enjoyable.
                    </motion.p>
                </div>

                {/* Cards remain unchanged */}
                <div className="">
                    <div className="space-y-6">
                        {steps.map((step, idx) => {
                            const reverse = idx % 2 === 1;
                            return (
                                <motion.div
                                    key={step.id}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="transition-all duration-300"
                                >
                                    <div className={`w-full max-w-7xl rounded-3xl p-8 lg:px-1 flex flex-col lg:flex-row items-center gap-8 ${reverse ? "lg:flex-row-reverse" : ""}`}>
                                        <div className="flex-1">
                                            <div className={`max-w-md ${reverse ? 'lg:ml-auto lg:text-right' : 'lg:mr-auto'}`}>
                                                <div
                                                    aria-hidden
                                                    className={`max-w-[70px] min-h-[70px] flex items-center justify-center rounded-2xl bg-[#1e40af] text-white text-2xl font-bold mb-4 ${reverse ? 'lg:ml-auto' : ''}`}
                                                >
                                                    {step.value}
                                                </div>

                                                <h3 className="text-2xl font-[Poppins] font-bold text-[#0f172a]">{step.title}</h3>
                                                <p className="mt-2 text-2xl text-shadow-slate-600 max-w-md">
                                                    {step.body}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex-1 w-full flex justify-center bg-[#145ca3] rounded-4xl overflow-visible relative">
                                            <div className="absolute -left-8 -top-8 w-20 h-20 rounded-full bg-[rgba(4,102,200,0.5)] z-20 shadow-lg" />
                                            <Image
                                                src={step.image}
                                                alt={step.title}
                                                width={600}
                                                height={500}
                                                className="object-contain rounded-4xl relative z-10"
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
