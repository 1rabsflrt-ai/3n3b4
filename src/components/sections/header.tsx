import React from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full bg-[#2a0d6e] h-[80px] flex items-center shadow-[0_2px_4px_rgba(0,0,0,0.2)] z-50 sticky top-0 px-6">
      <div className="w-full max-w-[1200px] mx-auto flex items-center justify-between">
        <div className="flex-shrink-0">
          <a href="/es/" className="block">
            <Image 
              src="https://static.eneba.games/branding/v2/logoFull.svg" 
              alt="Eneba" 
              width={155} 
              height={32}
              priority
              className="h-auto w-[155px]"
            />
          </a>
        </div>
        <nav className="flex-grow flex justify-center items-center px-4 max-w-full opacity-60">
          <ul className="flex items-center w-full list-none p-0 m-0 gap-0">
            <li className="flex items-center flex-grow">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full border border-[#00d2b4] bg-transparent flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-[#00d2b4] stroke-[3]" />
                </div>
                <span className="text-[12px] font-medium text-white font-roboto">Cart</span>
              </div>
              <div className="flex-grow h-[1px] mx-2 bg-[#00d2b4]"></div>
            </li>
            <li className="flex items-center flex-grow">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full border border-[#00d2b4] bg-transparent flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-[#00d2b4] stroke-[3]" />
                </div>
                <span className="text-[12px] font-medium text-white font-roboto">Payment</span>
              </div>
              <div className="flex-grow h-[1px] mx-2 bg-gradient-to-r from-[#00d2b4] to-[#ffffff1a]"></div>
            </li>
            <li className="flex items-center">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full border border-[#00d2b4] bg-[#00d2b4] flex items-center justify-center">
                  <span className="text-[12px] font-bold text-[#2a0d6e]">3</span>
                </div>
                <span className="text-[12px] font-medium text-[#b9a4f1] font-roboto whitespace-nowrap font-metropolis-bold">Get your product</span>
              </div>
            </li>

          </ul>
        </nav>
        <div className="flex-shrink-0">
          <button 
            className="flex items-center gap-2 px-3 py-1.5 rounded hover:bg-[#ffffff1a] transition-colors"
            aria-label="Language and currency settings"
          >
            <div className="flex items-center overflow-hidden rounded-sm">
              <Image 
                src="https://static.eneba.games/flags/lang/v2/united_states.svg" 
                alt="English" 
                width={16} 
                height={16}
                className="object-cover"
              />
            </div>
            <div className="flex items-center text-[13px] font-medium text-white font-roboto">
              <span>English</span>
              <span className="mx-1 opacity-50 font-normal">|</span>
              <span className="text-[#b9a4f1]">USD</span>
            </div>
          </button>
        </div>

      </div>
    </header>
  );
}