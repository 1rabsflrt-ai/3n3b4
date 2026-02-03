"use client";

import React from 'react';

/**
 * CookieConsent component
 * 
 * Replicates the floating cookie consent modal positioned at the bottom right.
 * Features:
 * - Dark purple background (#2a0d6e / Background Secondary)
 * - Informative text with Roboto font
 * - Primary Action: Yellow "Aceptar todo" button (#ffdc00)
 * - Secondary Action: Outlined "Personalizar" button
 * - Fixed positioning at the bottom right
 */

const CookieConsent: React.FC = () => {
  // Normally we would use state to manage visibility, but this is a pixel-perfect clone
  // focusing on the visual representation provided in the screenshots and structure.
  const [isVisible, setIsVisible] = React.useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 right-0 z-[1000] p-4 sm:p-6 md:p-8 pointer-events-none w-full max-w-[440px] ml-auto">
      <div 
        className="cookie-modal pointer-events-auto rounded-[4px] bg-[#2a0d6e] border border-[#ffffff1a] shadow-[0_4px_20px_rgba(0,0,0,0.5)] flex flex-col p-6 animate-in fade-in slide-in-from-bottom-4 duration-300"
        style={{ fontFamily: 'var(--font-roboto)' }}
      >
        <div className="mb-4">
          <span className="text-[16px] font-bold text-white block">Cookies</span>
        </div>
        
        <div className="flex flex-col">
          <p className="text-[13px] leading-[1.6] text-white/80 mb-6 antialiased">
            Eneba and its partners use cookies and similar technologies to collect and analyze information about users of this website. We use this information to improve the content, advertising and other services on the site. Your personal data may also be used to personalize the ads you see.<br />
            By clicking "Accept All", you consent to Eneba and its partners using these technologies. You can adjust your consent by clicking "Customize"<br />
            . For more information about how Google uses your data, please check the {' '}
            <a 
              href="https://business.safety.google/privacy/" 
              className="text-[#00d2b4] hover:underline decoration-1"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Google Business Security and Privacy
            </a>.
          </p>
          
          <div className="flex flex-row gap-3">
            <button 
              onClick={() => setIsVisible(false)}
              className="flex-1 bg-[#ffdc00] text-[#000000] text-[14px] font-semibold py-[10px] px-6 rounded-[4px] transition-opacity hover:opacity-90 active:scale-[0.98]"
            >
              Accept All
            </button>
            <button 
              onClick={() => setIsVisible(false)}
              className="flex-1 bg-transparent border border-[#ffffff1a] text-white text-[14px] font-semibold py-[10px] px-6 rounded-[4px] transition-all hover:bg-white/10 active:scale-[0.98]"
            >
              Customize
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
