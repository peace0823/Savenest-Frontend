'use client';

import React from 'react';
import Modal from '../ui/Modal';
import RadioItem from './RadioItem';

export type Category =
  | 'Food & Drink'
  | 'Transportation'
  | 'Shopping'
  | 'Education'
  | 'Entertainment'
  | 'Fashion'
  | 'Housing'
  | 'Travel';

const categories: { label: Category; sub?: string }[] = [
  { label: 'Food & Drink' },
  { label: 'Transportation' },
  { label: 'Shopping' },
  { label: 'Education' },
  { label: 'Entertainment' },
  { label: 'Fashion', sub: 'budget category' },
  { label: 'Housing' },
  { label: 'Travel' },
];

type Props = {
  open: boolean;
  onClose: () => void;
  value: Category;
  onChange: (val: Category) => void;
};

export default function CategoryModal({ open, onClose, value, onChange }: Props) {
  return (
    <Modal open={open} onClose={onClose} title="Category">
      <div className="space-y-2">
        {categories.map((c) => (
          <RadioItem
            key={c.label}
            label={c.label}
            subLabel={c.sub}
            selected={value === c.label}
            onClick={() => onChange(c.label)}
          />
        ))}
      </div>

      {/* floating confirm circle in bottom-right like your mock */}
      <div className="relative">
        <div className="pointer-events-none absolute right-2 bottom-[-10px] h-14 w-14 rounded-full bg-[#1D2AA9]" />
      </div>
    </Modal>
  );
}
