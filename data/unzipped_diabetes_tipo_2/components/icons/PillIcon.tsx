
import React from 'react';

export const PillIcon = ({ className }: { className?: string }) => (
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
      d="M14.25 10.25l-4.5 4.5m4.5-4.5l-1.5-1.5-4.5 4.5 1.5 1.5m4.5-4.5L18 6.5l-4.5 4.5m0 0l-1.5 1.5M12 2a9.969 9.969 0 00-7.071 2.929A9.969 9.969 0 002.001 12a9.969 9.969 0 002.928 7.071A9.969 9.969 0 0012 22a9.969 9.969 0 007.071-2.929A9.969 9.969 0 0021.999 12a9.969 9.969 0 00-2.928-7.071A9.969 9.969 0 0012 2z"
    />
  </svg>
);
