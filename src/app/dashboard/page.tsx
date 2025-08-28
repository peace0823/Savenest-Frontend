"use client";

import { useSidebar } from "@/context/SidebarContext";
import Backdrop from '@/layout/Backdrop';
import AppHeader from '@/layout/AppHeader';
import AppSidebar from '@/layout/AppSidebar';

export default function Dashboard() {

  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  // Dynamic class for main content margin based on sidebar state
  const mainContentMargin = isMobileOpen
    ? "ml-0"
    : isExpanded || isHovered
      ? "lg:ml-[290px]"
      : "lg:ml-[90px]";
  // --- demo data for the small stat cards ---
  const stats = [
    { value: "#50,000", label: "Total balance" },
    { value: "5", label: "Active Goals" },
    { value: "2", label: "Communities Challenges" },
    { value: "6", label: "Tracked Budget" },
  ];

  // --- demo goals to show progress bars (percent drives the bar width) ---
  const goals = [
    {
      title: "Emergency Funds",
      current: 30000,
      target: 65000,
      percent: Math.min(Math.round((30000 / 65000) * 100), 100),
    },
    {
      title: "House Rent",
      current: 30000,
      target: 1000000,
      percent: Math.min(Math.round((30000 / 1000000) * 100), 100),
    },
  ];

  return (
    <div className="min-h-screen xl:flex">
      {/* Sidebar and Backdrop */}
      <AppSidebar />
      <Backdrop />
      {/* Main Content Area */}
      <div className={`flex-1 transition-all  duration-300 ease-in-out ${mainContentMargin}`}>
        {/* Header */}
        <AppHeader />

        {/* Page container */}
        <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Welcome header */}
          <header className="mb-8">
            {/* Primary heading (Poppins) */}
            <h1 className="text-2xl sm:text-3xl font-bold text-[#1F299C] font-poppins">
              Welcome Back, Linda
            </h1>
            {/* Supporting line (Space Grotesk) */}
            <p className="mt-1 text-sm text-[#101010]/70 font-grotesk">
              You’re doing great with your savings journey
            </p>
          </header>

          {/* Top stats: 4 cards in a row on desktop, wrap on smaller screens */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((s, i) => (
              <div
                key={i}
                className="rounded-xl bg-white border border-[#0466C8] p-5 flex flex-col items-center justify-center hover:shadow-md transition"
              >
                {/* Big number */}
                <div className="text-lg sm:text-xl font-bold text-[#101010] font-poppins">
                  {s.value}
                </div>
                {/* Label */}
                <div className="mt-1 text-xs sm:text-sm text-[#101010]/70 font-grotesk text-center">
                  {s.label}
                </div>
              </div>
            ))}
          </section>

          {/* Main content area: Goals (left) + Recent Activity (right) */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left: Savings Goals card (takes 2/3 on lg screens) */}
            <div className="lg:col-span-2 rounded-xl bg-white border border-[#0466C8]">
              {/* Card header */}
              <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-[#0466C8]/40">
                <h2 className="text-base sm:text-lg font-semibold text-[#101010] font-poppins">
                  Your Savings Goals
                </h2>
                {/* Secondary CTA (Bright Orange) */}
                <button
                  className="
               inline-flex items-center gap-2
               bg-[#FF9F1C] hover:bg-[#e38e14]
               text-white text-sm font-semibold font-poppins
               px-4 py-2 rounded-full transition
               focus:outline-none focus:ring-2 focus:ring-[#0466C8]
             "
                >
                  + New Goal
                </button>
              </div>

              {/* Goals list */}
              <div className="p-5 sm:p-6 space-y-5">
                {goals.map((g, i) => (
                  <div
                    key={i}
                    className="rounded-lg border border-[#0466C8]/30 p-4"
                  >
                    {/* Goal title + target label line */}
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm sm:text-base font-semibold text-[#101010] font-poppins">
                        {g.title}
                      </h3>

                      {/* Current / Target label on the right */}
                      <div className="text-[11px] sm:text-xs text-[#101010]/60 font-grotesk">
                        #{g.current.toLocaleString()} / #{g.target.toLocaleString()}
                      </div>
                    </div>

                    {/* Progress bar */}
                    <div className="mt-3">
                      {/* Track */}
                      <div className="h-3 rounded-full bg-[#101010]/10 overflow-hidden">
                        {/* Fill (Deep Blue) – width driven by % */}
                        <div
                          className="h-full bg-[#1F299C] transition-all"
                          style={{ width: `${g.percent}%` }}
                          aria-valuenow={g.percent}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          role="progressbar"
                        />
                      </div>
                    </div>

                    {/* Row of actions under each goal */}
                    <div className="mt-3 flex items-center gap-4">
                      <button
                        className="
                     text-xs sm:text-sm font-semibold font-poppins
                     text-[#1F299C] hover:text-[#0466C8]
                     focus:outline-none focus:ring-2 focus:ring-[#0466C8]
                     rounded px-2 py-1
                   "
                      >
                        Add Money
                      </button>
                      <button
                        className="
                     text-xs sm:text-sm font-semibold font-poppins
                     text-[#1F299C] hover:text-[#0466C8]
                     focus:outline-none focus:ring-2 focus:ring-[#0466C8]
                     rounded px-2 py-1
                   "
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Recent Activity box */}
            <aside className="rounded-xl bg-white border border-[#0466C8] p-5 sm:p-6">
              <h2 className="text-base sm:text-lg font-semibold text-[#101010] font-poppins mb-3">
                Recent Activity
              </h2>

              {/* Placeholder input to match screenshot caption */}
              <label className="text-xs text-[#101010]/70 font-grotesk">
                Type In Your Email
              </label>
              <input
                type="email"
                placeholder="janedoe@gmail.com"
                className="
             mt-2 w-full rounded-lg border border-[#101010]/20
             px-3 py-2 text-sm font-grotesk
             focus:outline-none focus:ring-2 focus:ring-[#0466C8]
           "
              />

              {/* Empty state area – replace with activity list later */}
              <div className="mt-4 h-48 rounded-lg border border-[#0466C8]/30 bg-[#F9FAFB]" />
            </aside>
          </section>


{/* Quick Action Cards Section */}
<section className="mt-10">
  <h2 className="text-base sm:text-lg font-semibold text-[#101010] font-poppins mb-4">
    Quick Actions
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
    {[
      { title: "Fund Account", description: "Top up your wallet instantly" },
      { title: "Transfer", description: "Send money to anyone" },
      { title: "Transaction History", description: "View your past transactions" },
      { title: "Exchange Rate", description: "Check current FX rates" },
      { title: "Buy Air Time", description: "Recharge your phone easily" },
      { title: "Buy Data", description: "Stay connected with data bundles" },
    ].map((card, i) => (
      <button
        key={i}
        className="
          text-left
          rounded-xl bg-white border border-[#0466C8]/40 p-4
          hover:shadow-md hover:cursor-pointer transition
          focus:outline-none focus:ring-2 focus:ring-[#0466C8]
          flex flex-col justify-between
        "
        onClick={() => console.log(`${card.title} clicked`)} // Replace with actual handler
      >
        <h3 className="text-sm sm:text-base font-semibold text-[#101010] font-poppins mb-2">
          {card.title}
        </h3>
        <p className="text-xs text-[#101010]/70 font-grotesk">
          {card.description}
        </p>
      </button>
    ))}
  </div>
</section>

        </main>
        {/* Page Content Ends Here */}
      </div>
      {/* Main Content Area Ends Here */}
    </div>

  );
}
