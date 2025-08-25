"use client";

import Image from "next/image";
import Navbar from "../../../components/Navbar";

export default function CommunityPage() {
  return (
    <main className="bg-[#F9FAFB] min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center mt-15">
        <h1 className="text-4xl md:text-5xl font-bold font-poppins text-[#1F299C]">
          <span className="text-[#FF9F1C]">Our Community,</span> Our Strength
        </h1>
        <p className="mt-4 text-lg md:text-xl font-spaceGrotesk text-[#101010] max-w-3xl mx-auto">
          Join a vibrant circle of Nigerians saving together, celebrating
          milestones, and achieving financial freedom through the trusted{" "}
          <span className="font-semibold text-[#FF9F1C]">Ajo system</span>.
        </p>
      </section>

      {/* Image + Write-ups (first section) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto px-6 py-12 items-center">
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold font-poppins text-[#1F299C]">
            Save Smarter, Together
          </h2>
          <p className="font-spaceGrotesk text-[#101010] leading-relaxed">
            Our platform makes <strong>Ajo</strong> digital, safe, and more
            rewarding. Whether you re saving for school fees, business
            expansion, or a special celebration, you don t have to do it alone.
          </p>
          <p className="font-spaceGrotesk text-[#101010]">
            Connect with like-minded savers, track your contributions, and
            celebrate milestones with friends and family — just like traditional{" "}
            <em>Esusu</em>, but smarter.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-md h-64 bg-gray-200 rounded-2xl flex items-center justify-center">
            <span className="text-gray-500 font-spaceGrotesk">
              <Image src="/images/ajo1.png" className="rounded-3xl"
              alt="ajo1"
              height={400}
              width={500}
              />
            </span>
          </div>
        </div>
      </section>

      {/* Testimonials / Stories */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-poppins font-bold text-[#1F299C]">
            Stories From Our Members
          </h3>
          <p className="mt-3 font-spaceGrotesk text-[#101010]">
            Real Nigerians. Real savings. Real progress.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {[
              {
                name: "Chiamaka, Lagos",
                story:
                  "With Ajo, I was able to grow my fashion business. Now I save digitally and never worry about safety.",
              },
              {
                name: "Emeka, Enugu",
                story:
                  "Saving with friends kept me disciplined. We all celebrated when I hit my first milestone!",
              },
              {
                name: "Hauwa, Abuja",
                story:
                  "It feels like family. I trust the system, and the reminders keep me consistent.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#F9FAFB] p-6 rounded-2xl shadow hover:shadow-lg transition"
              >
                <p className="font-spaceGrotesk text-[#101010] italic">
                  “{item.story}”
                </p>
                <h4 className="mt-4 font-poppins font-semibold text-[#0466C8]">
                  {item.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Image + Write-ups (reversed layout) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto px-6 py-16 items-center">
        <div className="flex justify-center order-1 md:order-none">
          <div className="w-full max-w-md h-64 bg-gray-200 rounded-2xl flex items-center justify-center">
            <span className="text-gray-500 font-spaceGrotesk">
              <Image src="/images/ajo2.png" className="rounded-3xl"
              alt="ajo1"
              height={400}
              width={500}
              />
            </span>
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold font-poppins text-[#1F299C]">
            Empowering Financial Freedom
          </h2>
          <p className="font-spaceGrotesk text-[#101010] leading-relaxed">
            Through <strong>Ajo circles</strong>, members support one another in
            reaching their financial dreams — whether starting a business,
            buying property, or planning for the future.
          </p>
          <p className="font-spaceGrotesk text-[#101010]">
            Together, we combine trust, accountability, and the strength of
            community to build lasting financial freedom for every member.
          </p>
        </div>
      </section>

      <Navbar />
    </main>
  );
}

   