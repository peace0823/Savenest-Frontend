'use client'

import { useSidebar } from '@/context/SidebarContext';
import AppHeader from '@/layout/AppHeader';
import AppSidebar from '@/layout/AppSidebar';
import Backdrop from '@/layout/Backdrop';
import { useState } from 'react';

export default function UserProfile() {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  // Dynamic class for main content margin based on sidebar state
  const mainContentMargin = isMobileOpen
    ? "ml-0"
    : isExpanded || isHovered
      ? "lg:ml-[290px]"
      : "lg:ml-[90px]";


  const [emailNotif, setEmailNotif] = useState(true);
  const [pushNotif, setPushNotif] = useState(false);
  const [homeScreen, setHomeScreen] = useState(true);

  return (
    <div className="min-h-screen xl:flex">
      {/* Sidebar and Backdrop */}
      <AppSidebar />
      <Backdrop />
      {/* Main Content Area */}
      <div className={`flex-1 transition-all  duration-300 ease-in-out ${mainContentMargin}`}>
        {/* Header */}
        <AppHeader />
        <div className="max-w-5xl mx-auto px-6 py-10 text-gray-800">
          {/* Header Section */}
          <div className="flex items-center space-x-6 mb-10">
            <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-3xl text-gray-500">
              👤
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Linda Okafor</h2>
              <p className="text-sm text-gray-500">lindaokafor@gmail.com</p>
            </div>
          </div>

          {/* Achievements */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold mb-4">Your Achievements</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Badge color="blue" label="Streak Master" />
              <Badge color="red" label="Streak Master" />
              <Badge color="green" label="Goal Getter" />
              <Badge color="purple" label="Team Player" />
            </div>
          </div>

          {/* Personal Info & Security */}
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <Section title="Personal Information">
              <InfoRow label="Full Name" value="Linda Okafor" action="Edit" />
              <InfoRow label="Email Address" value="lindaokafor@gmail.com" action="Change" />
              <InfoRow label="Phone Number" value="+234 8023456789" action="Change" />
            </Section>

            <Section title="Security and Privacy">
              <InfoRow label="Password" value="Last updated 3 weeks ago" action="Change" />
              <InfoRow label="Pin" value="" action="Change" />
            </Section>
          </div>

          {/* Preferences */}
          <Section title="Preferences">
            <ToggleRow
              label="Email Notification"
              description="Savings reminders and updates"
              enabled={emailNotif}
              toggle={() => setEmailNotif(!emailNotif)}
            />
            <ToggleRow
              label="Push Notification"
              description="Goal milestones and alerts"
              enabled={pushNotif}
              toggle={() => setPushNotif(!pushNotif)}
            />
            <ToggleRow
              label="Add to Home Screen"
              description="Track savings widget on your home screen"
              enabled={homeScreen}
              toggle={() => setHomeScreen(!homeScreen)}
            />
            <InfoRow label="Currency" value="Naira (₦)" action="Change" />
          </Section>

          {/* Payment Method */}
          <Section title="Payment Method">
            <InfoRow label="Add Debit Card" value="Link your debit card directly to your bank" action="Add" />
            <InfoRow label="Bank Transfer" value="Transfer directly from your bank to your Nest" action="Transfer" />
          </Section>

          {/* Support */}
          <Section title="Support and Help">
            <InfoRow label="FAQ" value="Learn quicker" action="Visit" />
            <InfoRow label="Contact Support" value="Get help when you need it" action="Chat" />
          </Section>

          {/* Log Out */}
          <div className="mt-10 flex items-center justify-between border-t pt-6">
            <span className="text-red-600 flex items-center space-x-2 cursor-pointer">
              <span>🚪</span>
              <span>Log Out</span>
            </span>
            <span className="text-sm text-gray-500">Sign out of your account</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Components
function Badge({ color, label }: { color: string; label: string }) {
  const bg = {
    blue: 'bg-blue-500',
    red: 'bg-red-500',
    green: 'bg-green-500',
    purple: 'bg-purple-500',
  }[color];
  return (
    <div className={`text-white px-4 py-2 rounded-full text-sm font-medium ${bg}`}>
      {label}
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h4 className="text-lg font-semibold mb-4">{title}</h4>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function InfoRow({ label, value, action }: { label: string; value: string; action: string }) {
  return (
    <div className="flex justify-between items-center border-b pb-2">
      <div>
        <p className="font-medium">{label}</p>
        {value && <p className="text-sm text-gray-500">{value}</p>}
      </div>
      <button className="text-blue-600 text-sm font-semibold hover:underline">{action}</button>
    </div>
  );
}

function ToggleRow({
  label,
  description,
  enabled,
  toggle,
}: {
  label: string;
  description: string;
  enabled: boolean;
  toggle: () => void;
}) {
  return (
    <div className="flex justify-between items-center border-b pb-2">
      <div>
        <p className="font-medium">{label}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <label className="inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only" checked={enabled} onChange={toggle} />
        <div className={`w-10 h-6 bg-gray-300 rounded-full p-1 ${enabled ? 'bg-green-500' : ''}`}>
          <div
            className={`bg-white w-4 h-4 rounded-full shadow transform transition ${enabled ? 'translate-x-4' : ''
              }`}
          ></div>
        </div>
      </label>
    </div>
  );
}
