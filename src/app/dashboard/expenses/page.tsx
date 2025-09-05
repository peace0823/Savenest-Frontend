'use client';

import React, { useMemo, useState } from 'react';
import { ChevronRight, CalendarDays } from 'lucide-react';
import CategoryModal, { Category } from '../../../../components/expenses/CategoryModal';
import PaymentMethodModal, { PaymentMethod } from '../../../../components/expenses/PaymentMethodModal';

import { useSidebar } from '@/context/SidebarContext';
import AppHeader from '@/layout/AppHeader';
import AppSidebar from '@/layout/AppSidebar';
import Backdrop from '@/layout/Backdrop';

export default function ExpensesPage() {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  const mainContentMargin = isMobileOpen
    ? 'ml-0'
    : isExpanded || isHovered
    ? 'lg:ml-[290px]'
    : 'lg:ml-[90px]';

  const [category, setCategory] = useState<Category>('Food & Drink');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('Bank Transfer');
  const [dateStr, setDateStr] = useState<string>('');

  const weekday = useMemo(() => {
    if (!dateStr) return 'Monday';
    const d = new Date(dateStr);
    return d.toLocaleDateString(undefined, { weekday: 'long' });
  }, [dateStr]);

  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  return (
    <div className="min-h-screen xl:flex font-[Poppins]">
      <AppSidebar />
      <Backdrop />
      <div className={`flex-1 transition-all duration-300 ease-in-out ${mainContentMargin}`}>
        <AppHeader />
        <div className="w-full h-full flex justify-center items-center p-4 md:p-10">
          <div className="w-full max-w-5xl md:w-[70%] h-[90%] border-2 border-blue-600 rounded-2xl p-6 md:p-10 overflow-y-auto bg-white shadow-md">
            {/* Title */}
            <h1 className="text-4xl font-bold text-[#1D2AA9] mb-6">Expense</h1>

            {/* Progress bar */}
            <div className="flex items-center gap-2 mb-6">
              <span className="h-5 w-5 rounded-full bg-gray-200 border border-gray-300" />
              <div className="h-1 flex-1 bg-gray-200 relative">
                <span className="absolute left-1/2 -translate-x-1/2 -top-2 h-5 w-5 rounded-full bg-[#1D2AA9]" />
              </div>
              <span className="h-5 w-5 rounded-full bg-gray-200 border border-gray-300" />
            </div>

            {/* Category */}
            <section className="mb-6">
              <p className="text-lg font-semibold text-gray-700">Category</p>
              <button
                onClick={() => setShowCategoryModal(true)}
                className="mt-4 w-full flex items-center justify-between rounded-xl px-4 py-4 bg-gray-50 hover:bg-gray-100"
              >
                <div className="flex items-center gap-3">
                  <span className="h-6 w-6 rounded-full border-2 border-[#1D2AA9] bg-[#1D2AA9]" />
                  <span className="text-lg font-medium text-gray-800">{category}</span>
                </div>
                <ChevronRight className="h-6 w-6 text-gray-400" />
              </button>
              <div className="mt-4 border-b border-[#1D2AA9]/30" />
            </section>

            {/* Payment Method */}
            <section className="mb-6">
              <p className="text-lg font-semibold text-gray-700">Payment Method</p>
              <button
                onClick={() => setShowPaymentModal(true)}
                className="mt-4 w-full flex items-center justify-between rounded-xl px-4 py-4 bg-gray-50 hover:bg-gray-100"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`h-6 w-6 rounded-full border-2 ${
                      paymentMethod ? 'bg-[#1D2AA9] border-[#1D2AA9]' : 'bg-white border-black'
                    }`}
                  />
                  <span className="text-lg font-medium text-gray-800">{paymentMethod}</span>
                </div>
                <ChevronRight className="h-6 w-6 text-gray-400" />
              </button>
              <div className="mt-4 border-b border-[#1D2AA9]/30" />
            </section>

            {/* Date */}
            <section className="mb-6">
              <p className="text-lg font-semibold text-gray-700">Date</p>
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <div className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-4 py-3">
                  <CalendarDays className="h-5 w-5" />
                  <span className="text-base">{weekday}</span>
                </div>
                <input
                  type="date"
                  value={dateStr}
                  onChange={(e) => setDateStr(e.target.value)}
                  className="rounded-xl border border-gray-300 px-4 py-3 text-base outline-none focus:ring-2 focus:ring-[#1D2AA9]"
                  placeholder="DD/MM/YYYY"
                />
              </div>
              <div className="mt-4 border-b border-[#1D2AA9]/30" />
            </section>

            {/* Modals */}
            <CategoryModal
              open={showCategoryModal}
              onClose={() => setShowCategoryModal(false)}
              value={category}
              onChange={(c) => {
                setCategory(c);
                setShowCategoryModal(false);
              }}
            />
            <PaymentMethodModal
              open={showPaymentModal}
              onClose={() => setShowPaymentModal(false)}
              value={paymentMethod}
              onChange={(m) => {
                setPaymentMethod(m);
                setShowPaymentModal(false);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
