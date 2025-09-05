'use client';

import React from 'react';
import Modal from '../../components/ui/Modal';
import RadioItem from './RadioItem';

export type IncomeCategory = 'Salary' | 'Profit' | 'Gift' | 'Investment';

const categories: IncomeCategory[] = ['Salary', 'Profit', 'Gift', 'Investment'];

type Props = {
  open: boolean;
  onClose: () => void;
  value: IncomeCategory;
  onChange: (val: IncomeCategory) => void;
};

export default function CategoryModal({ open, onClose, value, onChange }: Props) {
  return (
    <Modal open={open} onClose={onClose} title="Category">
      <div className="space-y-2">
        {categories.map((c) => (
          <RadioItem
            key={c}
            label={c}
            selected={value === c}
            onClick={() => onChange(c)}
          />
        ))}
      </div>

      {/* optional decorative floating confirm dot like design */}
      <div className="relative">
        <div className="pointer-events-none absolute right-2 bottom-[-10px] h-14 w-14 rounded-full bg-[#1D2AA9]" />
      </div>
    </Modal>
  );
}
