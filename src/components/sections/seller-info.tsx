"use client";

import React from "react";
import Image from "next/image";
import { AlertTriangle } from "lucide-react";

export default function SellerInfo() {
  const sellerAsset = "https://imgproxy.eneba.games/p1ibztjSzYq8WslGtr_OFfTyTrVerFsSB836Idpo9Mk/rs:fit:40/ar:1/aHR0cHM6Ly9hdmF0/YXJzLmVuZWJhLmdh/bWVzL2k4TmlmZU10/VmtENTRmNEZWamtX/VEdKSFpYdEN5RDIt/MzJrbFRjem8ybGMu/anBlZw";

  return (
    <div className="mt-6 border-t border-[#e0e0e0] pt-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="relative h-[35px] w-[35px] overflow-hidden rounded-full border border-[#e0e0e0] flex-shrink-0\">
            <Image
              src={sellerAsset}
              alt="Games Federation"
              width={35}
              height={35}
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <div className="text-[14px] font-bold text-[#212121] leading-tight mb-1">
              Games Federation
            </div>
            
            <div className="text-[12px] text-[#757575] leading-normal">
              <span className="font-medium text-[#1dbda0]">99.94%</span> of nearly 2225k+ rate as <strong className="font-bold text-[#212121]">excellent!</strong>
            </div>
            
            <div className="text-[12px] text-[#757575] mt-0.5">
              <span className="text-[#212121]">You</span> rated as <strong className="font-bold text-[#212121]">excellent!</strong>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex-shrink-0">
          <button 
            className="flex items-center gap-2 px-4 py-2 border border-[#e0e0e0] rounded-[8px] text-[14px] font-semibold text-[#212121] hover:bg-[#f5f5f5] transition-colors"
            onClick={() => {}}
          >
            <AlertTriangle className="w-4 h-4 text-[#757575]" />
            <span>Report a Problem</span>
          </button>
        </div>
      </div>
    </div>
  );
}