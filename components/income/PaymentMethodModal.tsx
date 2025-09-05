'use client';

import React from 'react';
import Modal from '../../components/ui/Modal';
import RadioItem from './RadioItem';

export type PaymentMethod = 'Cash' | 'Bank Transfer';

const methods: PaymentMethod[] = ['Cash', 'Bank Transfer'];

type Props = {
  open: boolean;
  onClose: () => void;
  value: PaymentMethod;
  onChange: (val: PaymentMethod) => void;
};

export default function PaymentMethodModal({ open, onClose, value, onChange }: Props) {
  return (
    <Modal open={open} onClose={onClose} title="Payment Method">
      <div className="space-y-2">
        {methods.map((m) => (
          <RadioItem key={m} label={m} selected={value === m} onClick={() => onChange(m)} />
        ))}
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute right-2 bottom-[-10px] h-16 w-16 rounded-full bg-[#1D2AA9]" />
      </div>
    </Modal>
  );
}
