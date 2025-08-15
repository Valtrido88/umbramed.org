
import React from 'react';

export const UMBRAMED_INFO = {
    name: "Umbramed",
    website: "www.umbramed.com",
};

export const UmbramedLogo: React.FC<{ className?: string }> = ({ className }) => (
    <div className={`flex items-center space-x-2 ${className}`}>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="8" fill="white"/>
            <rect x="0.5" y="0.5" width="39" height="39" rx="7.5" stroke="#E5E7EB" />
            <g stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" transform="translate(0, 2)">
                <path d="M15 4C25 12, 15 20, 25 28" />
                <path d="M25 4C15 12, 25 20, 15 28" />
                <line x1="16" y1="8" x2="24" y2="8" strokeWidth="2" />
                <line x1="20" y1="16" x2="20" y2="16" strokeWidth="4" />
                <line x1="16" y1="24" x2="24" y2="24" strokeWidth="2" />
            </g>
        </svg>
        <span className="text-2xl font-bold text-gray-800 tracking-tight">{UMBRAMED_INFO.name}</span>
    </div>
);

export const DnaChain: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 10 C 10 0, 20 20, 30 10 C 40 0, 50 20, 60 10 C 70 0, 80 20, 90 10 C 100 0, 100 10, 100 10" stroke="#E53E3E" strokeWidth="2" strokeLinecap="round" />
        <path d="M0 10 C 10 20, 20 0, 30 10 C 40 20, 50 0, 60 10 C 70 20, 80 0, 90 10 C 100 20, 100 10, 100 10" stroke="#E53E3E" strokeWidth="2" strokeLinecap="round" />
        <line x1="15" y1="5.6" x2="15" y2="14.4" stroke="#DC2626" strokeWidth="1.5" />
        <line x1="30" y1="10" x2="30" y2="10" stroke="#DC2626" strokeWidth="3" strokeLinecap="round" />
        <line x1="45" y1="5.6" x2="45" y2="14.4" stroke="#DC2626" strokeWidth="1.5" />
        <line x1="60" y1="10" x2="60" y2="10" stroke="#DC2626" strokeWidth="3" strokeLinecap="round" />
        <line x1="75" y1="5.6" x2="75" y2="14.4" stroke="#DC2626" strokeWidth="1.5" />
    </svg>
);
