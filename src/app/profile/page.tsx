'use client'

import { useSidebar } from '@/context/SidebarContext';
import AppHeader from '@/layout/AppHeader';
import AppSidebar from '@/layout/AppSidebar';
import Backdrop from '@/layout/Backdrop';
import { useState } from 'react';
import { Switch } from '@headlessui/react';
import {
  FaBell,
  FaUser,
  FaCamera,
  FaSignOutAlt,
  FaFire,
  FaBullseye,
  FaUsers,
  FaIdBadge,
  FaShieldAlt,
  FaSlidersH,
  FaCreditCard,
  FaLifeRing,
} from 'react-icons/fa';

export default function UserProfile() {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  const mainContentMargin = isMobileOpen
    ? "ml-0"
    : isExpanded || isHovered
    ? "lg:ml-[290px]"
    : "lg:ml-[90px]";

  const [emailNotif, setEmailNotif] = useState(true);
  const [pushNotif, setPushNotif] = useState(true);
  const [homeScreen, setHomeScreen] = useState(false);

  return (
    <div className="min-h-screen xl:flex">
      <AppSidebar />
      <Backdrop />
      <div className={`flex-1 transition-all duration-300 ease-in-out ${mainContentMargin}`}>
        <AppHeader />
        <div className="max-w-5xl mx-auto px-6 py-10 text-gray-800">
          {/* Top Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-5xl font-bold">Profile</h1>
            <div className="flex gap-4 text-2xl text-gray-600">
              <FaBell />
              <FaUser />
            </div>
          </div>

          {/* Profile Avatar */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gray-300 shadow-md flex items-center justify-center text-5xl text-gray-400">
                <FaUser />
              </div>
              <div className="absolute bottom-2 right-2 bg-blue-600 p-2 rounded-full text-white text-sm cursor-pointer">
                <FaCamera />
              </div>
            </div>
          </div>

          {/* Achievements */}
          <section className="mb-8 bg-amber-200 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 bg">
              <FaFire className="text-blue-600" />
              Your Achievements
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Streak Master', color: 'bg-blue-500', icon: <FaFire className="text-2xl mb-2" /> },
                { label: 'Streak Master', color: 'bg-purple-500', icon: <FaFire className="text-2xl mb-2" /> },
                { label: 'Goal Getter', color: 'bg-green-500', icon: <FaBullseye className="text-2xl mb-2" /> },
                { label: 'Team Player', color: 'bg-indigo-700', icon: <FaUsers className="text-2xl mb-2" /> },
              ].map((badge, idx) => (
                <div key={idx} className={`p-4 rounded-lg text-white ${badge.color} text-center`}>
                  {badge.icon}
                  <p className="text-lg font-semibold">{badge.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Personal Info */}
          <section className="mb-8 border rounded-xl shadow-sm p-4 bg-white">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FaIdBadge className="text-blue-600" />
              Personal Information
            </h2>
            <div className="space-y-4">
              {[
                { label: 'Full Name', value: 'Linda Okafor', action: 'Edit' },
                { label: 'Email Address', value: 'lindaokafor@gmail.com', action: 'Change' },
                { label: 'Phone Number', value: '+234 8023413987', action: 'Change' },
              ].map((item, idx) => (
                <div key={idx} className="flex justify-between items-center">
                  <div>
                    <p className="text-base text-gray-500">{item.label}</p>
                    <p className="font-medium text-lg">{item.value}</p>
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer">{item.action}</button>
                </div>
              ))}
            </div>
          </section>

          {/* Security */}
          <section className="mb-8 border rounded-xl shadow-sm p-4 bg-white">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FaShieldAlt className="text-blue-600" />
              Security and Privacy
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-base text-gray-500">Password</p>
                  <p className="font-medium text-lg">Last updated 3 weeks ago</p>
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer">Change</button>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-medium text-lg">Pin</p>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer">Change</button>
              </div>
            </div>
          </section>

          {/* Preferences */}
          <section className="mb-8 border rounded-xl shadow-sm p-4 bg-white">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FaSlidersH className="text-blue-600" />
              Preferences
            </h2>
            <div className="space-y-4">
              {[
                { label: 'Email Notification', desc: 'Savings reminders and updates', state: emailNotif, setState: setEmailNotif },
                { label: 'Push Notification', desc: 'Goal milestones and alerts', state: pushNotif, setState: setPushNotif },
                { label: 'Add to Home Screen', desc: 'Add Savenest widget on your home screen', state: homeScreen, setState: setHomeScreen },
              ].map((pref, idx) => (
                <div key={idx} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-lg">{pref.label}</p>
                    <p className="text-base text-gray-500">{pref.desc}</p>
                  </div>
                  <Switch
                    checked={pref.state}
                    onChange={pref.setState}
                    className={`${pref.state ? 'bg-blue-600' : 'bg-gray-300'} relative inline-flex h-6 w-11 items-center rounded-full`}
                  >
                    <span className="inline-block h-4 w-4 transform bg-white rounded-full transition" />
                  </Switch>
                </div>
              ))}
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-lg">Currency</p>
                  <p className="text-base text-gray-500">Naira (#)</p>
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer">Change</button>
              </div>
            </div>
          </section>

          {/* Payment Method */}
          <section className="mb-8 border rounded-xl shadow-sm p-4 bg-white">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FaCreditCard className="text-blue-600" />
              Payment Method
            </h2>
            <div className="space-y-4">
              {[
                { label: 'Add Debit Card', desc: 'Link your debit card to your Nest account', action: 'Add' },
                { label: 'Bank Transfer', desc: 'Transfer money from your bank to Nest', action: 'Transfer' },
              ].map((method, idx) => (
                <div key={idx} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-lg">{method.label}</p>
                    <p className="text-base text-gray-500">{method.desc}</p>
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer">{method.action}</button>
                </div>
              ))}
            </div>
          </section>

      

          {/* Support and Help */}
          <section className="mb-8 border rounded-xl shadow-sm p-4 bg-white">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FaLifeRing className="text-blue-600" />
              Support and Help
            </h2>
            <div className="space-y-4">
              {[
                { label: 'FAQ', desc: 'Linda Okafor', action: 'Visit' },
                { label: 'Contact Support', desc: 'Get help from our support team', action: 'Contact' },
              ].map((support, idx) => (
                <div key={idx} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-lg">{support.label}</p>
                    <p className="text-base text-gray-500">{support.desc}</p>
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer">{support.action}</button>
                </div>
              ))}
              <div className="flex justify-between items-center text-red-600 mt-4">
                <p className="font-medium text-lg">Log Out</p>
                <button className="p-2 rounded-full hover:bg-red-100 cursor-pointer">
                  <FaSignOutAlt className="text-xl" />
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
