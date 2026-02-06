import React, { useState } from 'react';
import Image from 'next/image';
import { Copy, Check, Info, Globe, HelpCircle, Monitor } from 'lucide-react';

const ProductRedemption = () => {
  const [copied, setCopied] = useState(false);
  const productKey = "V7CTM-39XV2-PHW9Z";

  const handleCopy = () => {
    navigator.clipboard.writeText(productKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="bg-brand-purple min-h-screen py-10 font-sans text-white">
      <div className="container max-w-[1200px] px-4">
        {/* Page Title */}
        <h1 className="text-[32px] font-bold text-center mb-8 leading-[1.2] font-metropolis-bold">
          Get your product
        </h1>

        {/* Main Content Card */}
        <div className="bg-white rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.1)] p-6 md:p-8 text-[#212121] transition-all duration-300">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Product Thumbnail */}
            <div className="flex-shrink-0">
              <div className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] relative rounded-md overflow-hidden bg-muted">
                <Image
                  src="https://imgproxy.eneba.games/iH0q8-V30s0_NVfXP1QDbj6wH_aSks3EzbkeGJ9jGhI/rs:fit:60/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9T/bmlwZXIgRWxpdGUg/NC5qcGc"
                  alt="Sniper Elite 4 Steam Key GLOBAL"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="flex-grow">
              <h3 className="text-[18px]! font-bold mb-6 text-[#212121] leading-[1.4] font-metropolis-bold">
                Sniper Elite 4 Steam Key GLOBAL
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 border-b border-[#e0e0e0] pb-8">
                {/* Region */}
                <div className="flex gap-3">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
                    <Globe className="text-[#1dbda0] w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[#757575] text-[12px] block font-medium">Region</span>
                    <strong className="text-[14px] font-bold block font-metropolis-bold">GLOBAL</strong>
                    <button className="text-[12px] text-[#451093] hover:underline flex items-center gap-1 mt-1 transition-colors">
                      <span className="font-normal">Check region restrictions</span>
                    </button>
                  </div>
                </div>

                {/* Platform */}
                <div className="flex gap-3">
                  <div className="w-10 h-10 flex-shrink-0 relative">
                     <Image 
                        src="https://slelguoygbfzalpylpxfs.supabase.co/storage/v1/object/public/test-clones/7748486f-92d4-423d-839e-539053ffbd7c-eneba-com/assets/svgs/steam-3.svg"
                        alt="Steam Logo"
                        width={40}
                        height={40}
                        className="object-contain"
                     />
                  </div>
                  <div>
                    <span className="text-[#757575] text-[12px] block font-medium">Platform</span>
                    <strong className="text-[14px] font-bold block font-metropolis-bold">Steam</strong>
                    <a href="#" className="text-[12px] text-[#451093] hover:underline flex items-center gap-1 mt-1 font-semibold">
                      <span className="font-normal">Activation Guide</span>
                    </a>
                  </div>
                </div>

                {/* Type */}
                <div className="flex gap-3">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-[#f5f5f5] rounded-full">
                    <Monitor className="text-[#757575] w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[#757575] text-[12px] block font-medium">Product Type</span>
                    <strong className="text-[14px] font-bold block font-metropolis-bold">DIGITAL KEY</strong>
                  </div>
                </div>
              </div>

              {/* Product Key Redemption Area */}
              <div className="mt-8">
                <span className="text-[#757575] text-[12px] font-medium block mb-2 tracking-wide">
                  Digital Product Key:
                </span>
                
                <div className="bg-[#f5f5f5] rounded-lg p-5 border-2 border-dashed border-border flex flex-col items-center sm:flex-row sm:justify-between gap-4">
                  <div className="relative group">
                    <strong className="font-mono-key tracking-wider text-[#212121] bg-white px-4 py-2 rounded border border-border shadow-sm font-metropolis-bold">
                      {productKey}
                    </strong>
                    
                    {copied && (
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#fff9c4] text-[#212121] text-[11px] px-2 py-1 rounded shadow-sm border border-[#e0e0e0] animate-in fade-in slide-in-from-bottom-2">
                        Copied!
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-3">
                    <button 
                      onClick={handleCopy}
                      className="flex items-center gap-2 bg-[#ffc600] hover:brightness-110 text-[#212121] px-6 py-2.5 rounded-md font-semibold text-[14px] transition-all"
                    >
                      {copied ? <Check size={18} /> : <Copy size={18} />}
                      Copy
                    </button>
                  </div>
                </div>

                {/* Activation & Secondary actions */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-4">
                  <div className="flex items-center gap-4">
                    <a 
                      href="https://store.steampowered.com/account/registerkey?key=V7CTM-39XV2-PHW9Z" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#451093] hover:underline text-[14px] font-semibold flex items-center gap-1"
                    >
                      Activate on STEAM
                    </a>
                    <button className="text-[#757575] hover:text-[#212121] text-[14px] font-medium transition-colors">
                      Print as a gift
                    </button>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-[#757575] text-[13px]">
                    <span>Don't want to use it now? No worries. You can always find the code in your Library!</span>
                    <a href="#" className="text-[#451093] font-bold hover:underline whitespace-nowrap">My Library</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feedback Bar */}
          <div className="mt-12 bg-[#451093] rounded-lg p-4 flex flex-col md:flex-row items-center justify-center gap-3 w-full">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 relative border-2 border-white/20 rounded-full flex-shrink-0 overflow-hidden bg-white/10 p-1">
                <Image 
                  src="https://static.eneba.games/f1c06881db8376b12c86.png" 
                  alt="Feedback" 
                  width={32} 
                  height={32}
                  className="object-contain" 
                />
              </div>
              <div className="text-white">
                <span className="block font-bold text-[14px] font-metropolis-bold">Help us improve Eneba</span>
                <span className="block text-[12px] text-white/80">Rate 4 simple statements, we'd love to hear your feedback</span>
              </div>
            </div>
            <button className="bg-white text-[#451093] hover:bg-[#f5f5f5] px-6 py-2 rounded-md font-bold text-[14px] transition-colors whitespace-nowrap">
              Take the Survey
            </button>
          </div>

          {/* Legal Disclaimer */}
          <p className="mt-8 text-[12px] text-[#757575] text-center max-w-2xl mx-auto leading-relaxed italic">
            Since it’s a digital product and the key was displayed, you are not eligible for a refund unless the key is invalid or faulty.
          </p>

          {/* Seller Information */}
          <div className="mt-8 pt-8 border-t border-[#e0e0e0]">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-4">
                <div className="w-[35px] h-[35px] rounded-full overflow-hidden border border-border bg-[#f5f5f5]">
                  <Image 
                    src="https://imgproxy.eneba.games/p1ibztjSzYq8WslGtr_OFfTyTrVerFsSB836Idpo9Mk/rs:fit:40/ar:1/aHR0cHM6Ly9hdmF0/YXJzLmVuZWJhLmdh/bWVzL2k4TmlmZU10/VmtENTRmNEZWamtX/VEdKSFpYdEN5RDIt/MzJrbFRjem8ybGMu/anBlZw" 
                    alt="Seller logo" 
                    width={35} 
                    height={35} 
                  />
                </div>
                <div>
                  <div className="text-[14px] font-bold text-[#212121]">Games Federation</div>
                  <div className="text-[12px] text-[#757575]">
                    <span className="text-[#1dbda0] font-bold">99.94%</span> de casi 2225k+ lo califican de <strong className="text-[#212121]">excelente!</strong>
                  </div>
                </div>
              </div>
              <button className="flex items-center gap-2 text-[#757575] hover:text-[#212121] transition-colors text-[13px] font-medium">
                <HelpCircle size={16} />
                Reportar un problema
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductRedemption;