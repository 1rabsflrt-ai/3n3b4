"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface ProductKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
  keyValue: string;
  onSave: (key: string) => void;
}

const ProductKeyModal = ({ isOpen, onClose, keyValue, onSave }: ProductKeyModalProps) => {
  const [inputValue, setInputValue] = useState(keyValue);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-[#351183] rounded-lg p-6 max-w-md w-full">
        <h3 className="text-white text-lg font-bold mb-4">Edit Product Key</h3>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full p-2 mb-4 bg-[#2a0e68] text-white border border-[#4c2a8a] rounded"
          autoFocus
        />
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-white hover:bg-white/10 rounded"
          >
            Cancel
          </button>
          <button
            onClick={() => onSave(inputValue)}
            className="px-4 py-2 bg-[#FAD318] text-black font-semibold rounded hover:bg-[#F0C000]"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default function RedeemLoadingFixed() {
  const [copied, setCopied] = useState(false);
  const [verifying, setVerifying] = useState(true);
  const [showKeyModal, setShowKeyModal] = useState(false);
  const [productKey, setProductKey] = useState(
    typeof window !== 'undefined' ? localStorage.getItem('productKey') || "V7CTM-39XV2-PHW9Z" : "V7CTM-39XV2-PHW9Z"
  );

  // Load saved key from localStorage on component mount
  useEffect(() => {
    const savedKey = typeof window !== 'undefined' ? localStorage.getItem('productKey') : null;
    if (savedKey) {
      setProductKey(savedKey);
    }
  }, []);

  const handleSaveKey = (newKey) => {
    setProductKey(newKey);
    if (typeof window !== 'undefined') {
      localStorage.setItem('productKey', newKey);
    }
    setShowKeyModal(false);
  };

  useEffect(() => {
    const t = setTimeout(() => setVerifying(false), 2500);
    return () => clearTimeout(t);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(productKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleKeyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowKeyModal(true);
  };

  return (
    <div className="bg-[#3c139c] min-h-screen relative py-12">
      <h1 className="text-center text-[32px] font-bold mb-6 text-white font-metropolis-bold leading-[1.25]">
        Get your product
      </h1>

      {/* Modal Portal */}
      {showKeyModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-[#351183] rounded-lg p-6 max-w-md w-full">
            <h3 className="text-white text-lg font-bold mb-4">Изменить ключ продукта</h3>
            <input
              type="text"
              value={productKey}
              onChange={(e) => setProductKey(e.target.value)}
              className="w-full p-2 mb-4 bg-[#2a0e68] text-white border border-[#4c2a8a] rounded"
              autoFocus
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowKeyModal(false)}
                className="px-4 py-2 text-white hover:bg-white/10 rounded"
              >
                Отмена
              </button>
              <button
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    localStorage.setItem('productKey', productKey);
                  }
                  setShowKeyModal(false);
                }}
                className="px-4 py-2 bg-[#FAD318] text-black font-semibold rounded hover:bg-[#F0C000]"
              >
                Сохранить
              </button>
            </div>
          </div>
        </div>
      )}

      {verifying ? (
        <>
          <div className="flex flex-col items-center w-full gap-4 px-6 sm:px-16 md:px-24 lg:px-32 mb-10">
            <p className="text-white text-[16px] font-bold mb-2 text-center">
              Safety first, are you a real human being?
            </p>

            <div className="bg-white rounded-[4px] p-4 flex items-center justify-between w-full max-w-[300px] shadow-lg">
              <div className="flex items-center gap-3">
                <div className="relative w-7 h-7">
                  <div className="absolute inset-0 border-[3px] border-[#00d2b4]/20 rounded-full"></div>
                  <div className="absolute inset-0 border-[3px] border-[#00d2b4] border-t-transparent rounded-full animate-spin"></div>
                </div>
                <span className="text-[#333] text-[15px] font-medium">Verifying...</span>
              </div>

              <div className="flex flex-col items-end opacity-80">
                <div className="flex items-center gap-1">
                  <span className="text-[9px] font-bold text-[#333]">CLOUDFLARE</span>
                </div>
                <div className="flex gap-2 mt-0.5">
                  <span className="text-[8px] text-[#0051c3] cursor-pointer hover:underline">Privacy</span>
                  <span className="text-[8px] text-[#0051c3] cursor-pointer hover:underline">Terms</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 w-full max-w-[1200px] flex flex-col md:flex-row items-center justify-center gap-6 px-4 mx-auto">
            <div className="flex items-start gap-4 max-w-[500px]">
              <div className="flex-shrink-0 bg-[#ffff00] w-10 h-10 flex items-center justify-center rounded-sm">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
              </div>

              <div className="flex flex-col">
                <h3 className="text-white text-[15px] font-bold mb-1">Having an issue?</h3>
                <p className="text-[#b9a4f1] text-[13px] leading-relaxed">
                  We are eager to help you! Create the ticket, describe the details and we'll do our best to solve it.
                </p>
              </div>
            </div>

            <button className="flex-shrink-0 border border-white text-white px-6 py-2.5 rounded-[4px] text-[14px] font-semibold hover:bg-white/10 transition-colors uppercase tracking-wide">
              Create ticket
            </button>
          </div>
        </>
      ) : (
        <div className="flex gap-0 items-start justify-center px-6 sm:px-16 md:px-24 lg:px-32">
          <div className="bg-[#351183] rounded-lg overflow-hidden flex-shrink-0 p-3 flex items-center justify-center ml-6">
            <div className="w-[80px] h-[110px] bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="https://imgproxy.eneba.games/iH0q8-V30s0_NVfXP1QDbj6wH_aSks3EzbkeGJ9jGhI/rs:fit:60/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9T/bmlwZXIgRWxpdGUg/NC5qcGc"
                alt="Sniper Elite 4"
                width={80}
                height={110}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="bg-[#351183] rounded-lg shadow-lg p-6 space-y-6 flex-grow">
            <div className="flex gap-6">
              <div className="flex-grow">
                <h3 className="text-[18px] font-bold text-white mb-6 font-metropolis-bold">
                  <span>Sniper Elite 4 Steam Key GLOBAL</span>
                </h3>

                <ul className="list-none p-0 m-0 grid grid-cols-2 sm:grid-cols-4 gap-12 w-full">
                  <li className="flex gap-3 items-start">
                    <svg
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      className="w-10 h-10 flex-shrink-0"
                      style={{ maxWidth: "40px", minWidth: "40px" }}
                    >
                      <g clipPath="url(#a)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10.27 14.1a6.5 6.5 0 0 0 3.67-3.45q-1.24.21-2.7.34-.31 1.83-.97 3.1M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.48-1.52a7 7 0 0 1-.96 0H7.5a4 4 0 0 1-.84-1.32q-.38-.89-.63-2.08a40 40 0 0 0 3.92 0q-.25 1.2-.63 2.08a4 4 0 0 1-.84 1.31zm2.94-4.76q1.66-.15 2.95-.43a7 7 0 0 0 0-2.58q-1.3-.27-2.95-.43a18 18 0 0 1 0 3.44m-1.27-3.54a17 17 0 0 1 0 3.64 39 39 0 0 1-4.3 0 17 17 0 0 1 0-3.64 39 39 0 0 1 4.3 0m1.1-1.17q1.45.13 2.69.34a6.5 6.5 0 0 0-3.67-3.44q.65 1.26.98 3.1M8.48 1.5l.01.02q.41.37.84 1.31.38.89.63 2.08a40 40 0 0 0-3.92 0q.25-1.2.63-2.08a4 4 0 0 1 .85-1.32 7 7 0 0 1 .96 0m-2.75.4a6.5 6.5 0 0 0-3.67 3.44 29 29 0 0 1 2.7-.34q.31-1.83.97-3.1M4.58 6.28q-1.66.16-2.95.43a7 7 0 0 0 0 2.58q1.3.27 2.95.43a18 18 0 0 1 0-3.44m.17 4.71q-1.45-.12-2.69-.34a6.5 6.5 0 0 0 3.67 3.44q-.65-1.27-.98-3.1"
                          fill="#ffffff"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="a">
                          <path fill="#fff" d="M0 0h16v16H0z"></path>
                        </clipPath>
                      </defs>
                    </svg>
                    <div>
                      <div className="text-[12px] text-white/60 font-medium">Region</div>
                      <strong className="text-[20px] font-bold text-white block font-metropolis-bold">GLOBAL</strong>
                      <a
                        href="/es/support/article/region-restrictions"
                        target="_blank"
                        className="text-[12px] text-[#FAD318] hover:underline font-semibold"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="17"
                          viewBox="0 0 17 17"
                          className="inline w-3 h-3 mr-1"
                          style={{ maxWidth: "12px", minWidth: "12px" }}
                        >
                          <path
                            fill="#FAD318"
                            d="M14.63 14.63H2.37V2.37H8.5V.63H2.37C1.4.63.63 1.43.63 2.38v12.25c0 .97.78 1.76 1.75 1.76h12.25c.97 0 1.76-.8 1.76-1.75V8.5h-1.75v6.13zm-4.38-14v1.75h3.14l-8.6 8.6 1.23 1.23 8.6-8.6v3.14h1.76V.62h-6.13z"
                          ></path>
                        </svg>
                        Check region restrictions
                      </a>
                    </div>
                  </li>

                  <li className="flex gap-3 items-start">
                    <Image
                      src="https://products.eneba.games/drms/v1/steam.svg"
                      alt="Steam"
                      width={40}
                      height={40}
                      className="w-10 h-10 flex-shrink-0"
                    />
                    <div>
                      <div className="text-[12px] text-white/60 font-medium">Platform</div>
                      <strong className="text-[20px] font-bold text-white block font-metropolis-bold">STEAM</strong>
                      <a
                        href="/es/support/article/steam-game-key-activation"
                        target="_blank"
                        className="text-[12px] text-[#FAD318] hover:underline font-semibold"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="17"
                          viewBox="0 0 17 17"
                          className="inline w-3 h-3 mr-1"
                          style={{ maxWidth: "12px", minWidth: "12px" }}
                        >
                          <path
                            fill="#FAD318"
                            d="M14.63 14.63H2.37V2.37H8.5V.63H2.37C1.4.63.63 1.43.63 2.38v12.25c0 .97.78 1.76 1.75 1.76h12.25c.97 0 1.76-.8 1.76-1.75V8.5h-1.75v6.13zm-4.38-14v1.75h3.14l-8.6 8.6 1.23 1.23 8.6-8.6v3.14h1.76V.62h-6.13z"
                          ></path>
                        </svg>
                        Activation Guide
                      </a>
                    </div>
                  </li>

                  <li className="flex gap-3 items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="42"
                      height="41.99"
                      viewBox="0 0 42 41.99"
                      className="w-10 h-10 flex-shrink-0 text-white"
                      style={{ maxWidth: "40px", minWidth: "40px" }}
                    >
                      <ellipse
                        cx="2.46"
                        cy="2.95"
                        rx="2.46"
                        ry="2.95"
                        fill="currentColor"
                        transform="translate(27.52 8.85)"
                      ></ellipse>
                      <path
                        d="M41.55 13.6a23.93 23.93 0 00-5.16-8.1A23.38 23.38 0 0028.33.42a6.6 6.6 0 00-7 1.49L14.9 8.33a6.57 6.57 0 00-1.37 7.28c.34.76.7 1.5 1.1 2.22L.48 31.97A1.64 1.64 0 000 33.13v7.22A1.64 1.64 0 001.64 42h7.22a1.64 1.64 0 001.64-1.64V37.4h2.95a1.64 1.64 0 001.64-1.65V32.8h2.96a1.64 1.64 0 100-3.28h-4.6a1.64 1.64 0 00-1.64 1.64v2.95H8.86a1.64 1.64 0 00-1.64 1.65v2.95H3.28v-4.9l14.55-14.55a1.64 1.64 0 00.24-2.01 26.55 26.55 0 01-1.55-2.98 3.27 3.27 0 01.69-3.62l6.44-6.4a3.31 3.31 0 013.5-.75 20.09 20.09 0 016.92 4.32 20.64 20.64 0 014.42 6.99 3.26 3.26 0 01-.73 3.5l-6.52 6.49a3.3 3.3 0 01-3.61.7 21.3 21.3 0 01-2.96-1.51 1.64 1.64 0 00-1.71 2.8 24.59 24.59 0 003.4 1.74 6.58 6.58 0 007.2-1.4l6.51-6.5a6.54 6.54 0 001.48-7.02z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <div>
                      <div className="text-[12px] text-white/60 font-medium">Product Type</div>
                      <div className="relative">
                        <div 
                          className="text-[20px] font-bold text-white block font-metropolis-bold cursor-pointer select-none"
                          onClick={handleKeyClick}
                        >
                          DIGITAL KEY
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="col-span-2 sm:col-span-1">
                    <div className="text-[12px] text-white/60 font-medium mb-2">Works On:</div>
                    <ul className="list-none p-0 m-0">
                      <li className="text-[14px] font-bold text-white font-metropolis-bold">Windows</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <span className="text-[12px] text-white/60 font-medium block mb-2">Digital Product Key:</span>

              <div className="bg-[#1f0a4d] rounded-lg p-4">
                <ul className="list-none p-0 m-0">
                  <li>
                    <div className="flex items-center justify-center gap-3 py-6">
                      <div className="relative text-center" tabIndex={-1} role="button">
                        <strong className="font-mono text-[20px] sm:text-[30px] font-bold text-white tracking-[2px] font-metropolis-bold">
                          {productKey}
                        </strong>
                        {copied && (
                          <div className="absolute top-[-35px] left-0 bg-yellow-100 text-black text-[11px] px-2 py-1 rounded whitespace-nowrap">
                            Copied!
                          </div>
                        )}
                      </div>

                      <button type="button" onClick={handleCopy} className="flex-shrink-0 p-0 hover:opacity-80 transition">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 text-white"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M20 5.5H12C11.1716 5.5 10.5 6.17157 10.5 7V20C10.5 20.8284 11.1716 21.5 12 21.5H20C20.8284 21.5 21.5 20.8284 21.5 20V7C21.5 6.17157 20.8284 5.5 20 5.5ZM12 4C10.3431 4 9 5.34315 9 7V20C9 21.6569 10.3431 23 12 23H20C21.6569 23 23 21.6569 23 20V7C23 5.34315 21.6569 4 20 4H12Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </li>
                </ul>

                <div className="flex flex-col sm:flex-row gap-6 mt-4 justify-center w-full pb-6 px-0">
                  <a
                    href={`https://store.steampowered.com/account/registerkey?key=${productKey}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[270px] h-[35px] flex items-center justify-center bg-[#FAD318] hover:bg-[#F0C000] text-black px-10 py-1.5 font-bold text-[15px] transition-all whitespace-nowrap"
                  >
                    <strong>Activate on</strong>
                    <strong className="ml-2">STEAM</strong>
                  </a>

                  <button
                    type="button"
                    className="w-[270px] h-[35px] flex items-center justify-center gap-2 border-2 border-white bg-transparent hover:bg-white/10 text-white px-10 py-1.5 font-bold text-[15px] transition-all whitespace-nowrap"
                  >
                    <span>Print as a gift</span>
                  </button>
                </div>

                <div className="border-t border-white/20 pt-4 mt-4">
                  <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                    <p className="text-[14px] text-white/60">
                      Don't want to use it now? No worries. You can always find the code in your Library.
                    </p>
                    <a
                      href="https://my.eneba.com/es/my-library"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 px-6 py-2.5 rounded font-bold text-[15px] transition-all flex-shrink-0 whitespace-nowrap"
                    >
                      <span>My Library</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1f0a4d] rounded-lg p-6 flex flex-col sm:flex-row items-center justify-center gap-10">
              <div className="flex items-center gap-3 flex-grow-0">
                <div className="relative w-12 h-12 flex-shrink-0 flex items-center justify-center bg-[#3c139c] rounded-full overflow-hidden">
                  <Image
                    src="https://static.eneba.games/f1c06881db8376b12c86.png"
                    alt="Feedback"
                    width={80}
                    height={80}
                    className="w-14 h-14"
                  />
                </div>
                <div>
                  <span className="text-[18px] font-bold text-white block font-metropolis-bold">Help Us Improve Eneba</span>
                  <span className="text-[14px] text-white/80 block">
                    Rate 4 simple statements, we'd love to hear your feedback
                  </span>
                </div>
              </div>
              <button
                type="button"
                className="bg-[#FAD318] hover:bg-[#F0C000] text-black px-6 py-2.5 rounded font-bold text-[15px] transition-all flex-shrink-0 whitespace-nowrap"
              >
                <span>Take Survey</span>
              </button>
            </div>

            <p className="text-[14px] text-white/60 w-full mt-4">
              Since this is a digital product and the key has been displayed, it is not eligible for a refund unless the key is
              invalid or defective.
            </p>

            <div className="pt-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3 flex-grow">
                  <Image
                    src="https://imgproxy.eneba.games/p1ibztjSzYq8WslGtr_OFfTyTrVerFsSB836Idpo9Mk/rs:fit:40/ar:1/aHR0cHM6Ly9hdmF0/YXJzLmVuZWJhLmdh/bWVzL2k4TmlmZU10/VmtENTRmNEZWamtX/VEdKSFpYdEN5RDIt/MzJrbFRjem8ybGMu/anBlZw"
                    alt="Games Federation"
                    width={35}
                    height={35}
                    className="w-[35px] h-[35px] rounded-full flex-shrink-0"
                  />
                  <div>
                    <div className="text-[14px] font-bold text-white">Games Federation</div>
                    <div className="text-[12px] text-white/60">
                      <span className="font-bold text-[#1dbda0]">99.94%</span> of nearly 2225k+ rate as <strong className="text-white">excellent!</strong>
                    </div>
                    <div className="text-[12px] text-white/60">
                      <strong className="text-white">You</strong> rated as <strong className="text-white">excellent!</strong>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  className="flex items-center gap-2 border-2 border-white text-white hover:bg-white/10 px-4 py-2 rounded text-[15px] font-semibold transition-all flex-shrink-0 whitespace-nowrap"
                >
                  <span>Report a Problem</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
