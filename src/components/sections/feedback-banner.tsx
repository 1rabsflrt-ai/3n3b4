import React from 'react';
import Image from 'next/image';

const FeedbackBanner = () => {
  // Styles inferred from the provided HTML structure and high-level design
  // The banner is a horizontal bar at the bottom of the main content area inside the white card
  
  return (
    <div className="flex items-center gap-4 p-4 mt-6 bg-[#f5f5f5] rounded-lg border border-[#e0e0e0] flex-wrap md:flex-nowrap">
      {/* Icon Container */}
      <div className="flex-shrink-0 w-[60px] h-[60px] flex items-center justify-center">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7748486f-92d4-423d-839e-539053ffbd7c-eneba-com/assets/icons/f1c06881db8376b12c86-1.png"
          alt="Megaphone"
          width={60}
          height={60}
          className="object-contain"
          priority
        />
      </div>

      {/* Text Content */}
      <div className="flex-grow flex flex-col justify-center min-w-0">
        <span className="text-[#212121] text-[16px] font-bold leading-tight mb-1 font-metropolis-bold">
          Help Us Improve Eneba
        </span>
        <span className="text-[#757575] text-[14px] leading-normal truncate block">
          Rate 4 simple statements, we'd love to hear your feedback
        </span>
      </div>

      {/* CTA Button */}
      <div className="flex-shrink-0 w-full md:w-auto mt-4 md:mt-0">
        <button 
          className="w-full md:w-auto bg-[#ffc600] hover:bg-[#ffdb4d] text-[#212121] font-semibold py-[10px] px-6 rounded-md text-[14px] transition-colors focus:outline-none focus:ring-2 focus:ring-[#ffc600] focus:ring-offset-1"
        >
          <span>Take Survey</span>
        </button>
      </div>
    </div>
  );
};

export default FeedbackBanner;