
import React from 'react';

export const SyringeIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-6 w-6 ${className}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.25 6.75l-4.5 4.5-1.32-1.32a.75.75 0 00-1.06 0L8.75 11.5 5 7.75l1.62-1.62a.75.75 0 000-1.06L5.56 4.01a.75.75 0 00-1.06 0l-1.5 1.5a.75.75 0 000 1.06l1.57 1.57 4.94 4.94-2.12 2.12a.75.75 0 000 1.06l1.5 1.5a.75.75 0 001.06 0l2.12-2.12 4.94 4.94 1.57 1.57a.75.75 0 001.06 0l1.5-1.5a.75.75 0 000-1.06l-1.06-1.06a.75.75 0 00-1.06 0l-1.32-1.32 4.5-4.5z"
    />
  </svg>
);
