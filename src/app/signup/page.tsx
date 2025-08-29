"use client"

import { useState } from "react";
import GetStartedSection from "../../../components/GetStartedSection";
import VerifyEmailSection from "../../../components/VerifyEmailSection";
import Link from "next/link";
import Image from "next/image";
import RegisterFormSection from "../../../components/RegisterFormSection";

export default function SignUpPage() {
  const [step1, setStep1] = useState(true)
  const [step2, setStep2] = useState(false)
  const [step3, setStep3] = useState(false)

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8">
      {/* TOP: Navbar row / logo */}
      <div className="w-full flex justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden w-full max-w-7xl py-2 flex flex-col lg:flex-row items-center gap-8">
          {/* LEFT: Logo + Name */}
          <div className="flex-1 w-full flex justify-start">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/Logo-blue2.png"
                alt="Logo"
                height={40}
                width={40}
              />
              <span className="text-xl font-bold text-[#1F299C] font-[Poppins]">
                Savenest
              </span>
            </Link>
          </div>
        </div>
      </div>

      {
        step1 && (
          <GetStartedSection
            nextStep={() => setStep1(false)}
            onNext={() => setStep2(true)}
          />
        )
      }
      {
        step2 && (
          <VerifyEmailSection
            nextStep={() => setStep2(false)}
            onNext={() => setStep3(true)}
          />
        )
      }
      {
        step3 && (
          <RegisterFormSection
            nextStep={() => setStep3(false)}
            onNext={() => { }}
          />
        )
      }
    </section>
  );
}

