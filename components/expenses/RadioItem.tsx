'use client';

import React from 'react';

type Props = {
  label: string;
  selected: boolean;
  onClick?: () => void;
  subLabel?: string;
};

export default function RadioItem({ label, selected, onClick, subLabel }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full flex items-start gap-4 py-3"
    >
      <span
        className={[
          'mt-1 h-7 w-7 rounded-full border-2',
          selected ? 'bg-[#1D2AA9] border-[#1D2AA9]' : 'bg-white border-black',
        ].join(' ')}
      />
      <div className="text-left">
        <div className={`text-xl font-semibold ${selected ? 'text-black' : 'text-gray-600'}`}>
          {label}
        </div>
        {subLabel ? <div className="text-xs text-gray-400">{subLabel}</div> : null}
      </div>
    </button>
  );
}
