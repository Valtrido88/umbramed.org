import React from 'react';

type IconProps = {
  className?: string;
};

export const IconHepatitisVirus: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className={className} aria-hidden="true">
        <defs>
            <radialGradient id="hbv-core-grad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FDE68A" />
                <stop offset="100%" stopColor="#F59E0B" />
            </radialGradient>
            <g id="hbsag-large">
                <path d="M0 -80 L -8 -95 L 8 -95 Z" fill="#FDBA74" />
                <circle cx="0" cy="-100" r="6" fill="#F97316" />
            </g>
            <g id="hbsag-small">
                <path d="M0 -82 L -5 -92 L 5 -92 Z" fill="#FCA5A5" />
                <circle cx="0" cy="-95" r="4" fill="#EF4444" />
            </g>
        </defs>

        {/* Surface Proteins (HBsAg) - Placed first to be in the background */}
        <g transform="translate(128, 128)">
            <use href="#hbsag-large" transform="rotate(0)" />
            <use href="#hbsag-large" transform="rotate(45)" />
            <use href="#hbsag-large" transform="rotate(90)" />
            <use href="#hbsag-large" transform="rotate(135)" />
            <use href="#hbsag-large" transform="rotate(180)" />
            <use href="#hbsag-large" transform="rotate(225)" />
            <use href="#hbsag-large" transform="rotate(270)" />
            <use href="#hbsag-large" transform="rotate(315)" />
            
            <use href="#hbsag-small" transform="rotate(22.5)" />
            <use href="#hbsag-small" transform="rotate(67.5)" />
            <use href="#hbsag-small" transform="rotate(112.5)" />
            <use href="#hbsag-small" transform="rotate(157.5)" />
            <use href="#hbsag-small" transform="rotate(202.5)" />
            <use href="#hbsag-small" transform="rotate(247.5)" />
            <use href="#hbsag-small" transform="rotate(292.5)" />
            <use href="#hbsag-small" transform="rotate(337.5)" />
        </g>

        {/* Lipid Bilayer */}
        <circle cx="128" cy="128" r="80" fill="#FECACA" />
        
        {/* Core Capsid (HBcAg) */}
        <circle cx="128" cy="128" r="65" fill="url(#hbv-core-grad)" stroke="#FBBF24" strokeWidth="3"/>
        <g transform="translate(128, 128)" fill="#FBBF24" opacity="0.8">
            <circle transform="rotate(0)" cx="0" cy="-52" r="8" />
            <circle transform="rotate(45)" cx="0" cy="-52" r="8" />
            <circle transform="rotate(90)" cx="0" cy="-52" r="8" />
            <circle transform="rotate(135)" cx="0" cy="-52" r="8" />
            <circle transform="rotate(180)" cx="0" cy="-52" r="8" />
            <circle transform="rotate(225)" cx="0" cy="-52" r="8" />
            <circle transform="rotate(270)" cx="0" cy="-52" r="8" />
            <circle transform="rotate(315)" cx="0" cy="-52" r="8" />
        </g>
        
        {/* DNA & Polymerase */}
        <g transform="translate(128, 128)" strokeLinecap="round" strokeLinejoin="round">
            <path d="M0 -18 A 18 18 0 1 1 0 18 A 18 18 0 1 1 0 -18 Z" fill="none" stroke="#60A5FA" strokeWidth="4" />
            <path d="M0 -12 A 12 12 0 1 0 0 12" fill="none" stroke="#60A5FA" strokeWidth="4" />
            <circle cx="10" cy="10" r="5" fill="#3B82F6" stroke="none" />
        </g>
    </svg>
);


export const IconBeaker: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M4.5 3h15"/><path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"/>
        <path d="M6 14h12"/>
    </svg>
);

export const IconBrainCircuit: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 5a3 3 0 1 0-5.997.142M9 8v1a2 2 0 0 0 2 2h1"/>
    <path d="M12 5a3 3 0 1 1 5.997.142M15 8v1a2 2 0 0 1-2 2h-1"/>
    <path d="M12 21a2.5 2.5 0 0 1-2.5-2.5v-2.5a2.5 2.5 0 0 1 5 0V18.5A2.5 2.5 0 0 1 12 21Z"/>
    <path d="M12 16v-2.5a2.5 2.5 0 0 0-5 0V16"/>
    <path d="M12 16v-2.5a2.5 2.5 0 0 1 5 0V16"/>
    <path d="M8 12h8"/>
    <path d="M7 16a2.5 2.5 0 0 1-2.5-2.5V11"/>
    <path d="M17 16a2.5 2.5 0 0 0 2.5-2.5V11"/>
    <circle cx="12" cy="5" r="1"/><circle cx="7" cy="5" r="1"/><circle cx="17" cy="5" r="1"/>
  </svg>
);

export const IconCheckCircle: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
);

export const IconClipboardList: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
        <path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/>
    </svg>
);

export const IconLightBulb: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4.95 11.95A3.5 3.5 0 0 1 7.9 17.8L9 18H5a2 2 0 0 1-2-2 9 9 0 0 1 9-9Z"/>
    </svg>
);

export const IconSparkles: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="m12 3-1.9 1.9-1.9-1.9-1.9 1.9-1.9-1.9L2.5 5l1.9 1.9-1.9 1.9 1.9 1.9 1.9-1.9 1.9 1.9 1.9-1.9 1.9 1.9-1.9 1.9 1.9 1.9 1.9-1.9 1.9 1.9L21.5 5l-1.9-1.9 1.9-1.9-1.9-1.9-1.9 1.9-1.9-1.9Z"/>
        <path d="M12 3v.01"/>
    </svg>
);

export const IconExclamation: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 3.001-1.742 3.001H4.42c-1.53 0-2.493-1.667-1.743-3.001l5.58-9.92zM10 13a1 1 0 110-2 1 1 0 010 2zm-1.75-5.25a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5z" clipRule="evenodd" />
  </svg>
);

export const IconUpload: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" y1="3" x2="12" y2="15" />
  </svg>
);

export const IconCamera: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
    <circle cx="12" cy="13" r="3" />
  </svg>
);

export const IconX: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export const IconCopy: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
    </svg>
);

export const IconPrinter: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="6 9 6 2 18 2 18 9"></polyline>
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
      <rect x="6" y="14" width="12" height="8"></rect>
    </svg>
);