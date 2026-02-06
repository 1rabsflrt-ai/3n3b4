"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface GameData {
  key: string;
  title: string;
  imageUrl: string;
  region: string;
  avatarUrl?: string;
}

interface ProductKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData: GameData;
  onSave: (data: GameData) => void;
}

const ProductKeyModal = ({ isOpen, onClose, initialData, onSave }: ProductKeyModalProps) => {
  const [formData, setFormData] = useState<GameData>({
    key: initialData.key || '',
    title: initialData.title || '',
    imageUrl: initialData.imageUrl || '',
    region: initialData.region || 'GLOBAL',
    avatarUrl: initialData.avatarUrl || 'https://imgproxy.eneba.games/p1ibztjSzYq8WslGtr_OFfTyTrVerFsSB836Idpo9Mk/rs:fit:40/ar:1/aHR0cHM6Ly9hdmF0/YXJzLmVuZWJhLmdh/bWVzL2k4TmlmZU10/VmtENTRmNEZWamtX/VEdKSFpYdEN5RDIt/MzJrbFRjem8ybGMuanBlZw',
    sellerName: 'Games Federation'  // Add seller name field
  });
  const [imagePreview, setImagePreview] = useState<string | null>(initialData.imageUrl || null);

  useEffect(() => {
    if (isOpen) {
      setFormData({
        ...initialData,
        sellerName: initialData.sellerName || 'Games Federation'
      });
      setImagePreview(initialData.imageUrl);
    }
  }, [initialData, isOpen]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const dataToSave = {
      ...formData,
      imageUrl: imagePreview || formData.imageUrl,
      sellerName: formData.sellerName || 'Games Federation'  // Ensure seller name is always set
    };
    onSave(dataToSave);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-[#351183] rounded-lg p-6 w-full max-w-2xl my-8">
        <h3 className="text-white text-xl font-bold mb-6 text-center">Редактировать игру</h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Поле названия игры */}
          <div>
            <label className="block text-white/80 text-sm font-medium mb-1">Название игры</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full p-3 bg-[#2a0e68] text-white border border-[#4c2a8a] rounded-lg focus:ring-2 focus:ring-[#FAD318] focus:border-transparent"
              placeholder="Введите название игры"
              required
            />
          </div>
          
          {/* Поле ключа продукта */}
          <div>
            <label className="block text-white/80 text-sm font-medium mb-1">Ключ продукта</label>
            <input
              type="text"
              name="key"
              value={formData.key}
              onChange={handleInputChange}
              className="w-full p-3 bg-[#2a0e68] text-white border border-[#4c2a8a] rounded-lg font-mono focus:ring-2 focus:ring-[#FAD318] focus:border-transparent"
              placeholder="XXXXX-XXXXX-XXXXX-XXXXX"
              required
            />
          </div>
          
          {/* Выбор региона */}
          <div>
            <label className="block text-white/80 text-sm font-medium mb-1">Регион</label>
            <input
              type="text"
              name="region"
              value={formData.region}
              onChange={handleInputChange}
              className="w-full p-3 bg-[#2a0e68] text-white border border-[#4c2a8a] rounded-lg focus:ring-2 focus:ring-[#FAD318] focus:border-transparent"
              placeholder="Введите регион"
            />
          </div>

          {/* Seller Name */}
          <div>
            <label className="block text-white/80 text-sm font-medium mb-1">Seller Name</label>
            <input
              type="text"
              name="sellerName"
              value={formData.sellerName || 'Games Federation'}
              onChange={handleInputChange}
              className="w-full p-3 bg-[#2a0e68] text-white border border-[#4c2a8a] rounded-lg focus:ring-2 focus:ring-[#FAD318] focus:border-transparent"
              placeholder="Enter seller name"
            />
          </div>
          
          {/* Кнопки управления */}
          <div className="flex justify-end gap-4 pt-6 border-t border-[#4c2a8a]/50">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              Отмена
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 bg-[#FAD318] hover:bg-[#F0C000] text-black font-semibold rounded-lg transition-colors flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Сохранить изменения
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default function RedeemLoadingFixed() {
  const [copied, setCopied] = useState(false);
  const [verifying, setVerifying] = useState(true);
  const [showKeyModal, setShowKeyModal] = useState(false);
  
  // Initialize game data with defaults or from localStorage
  const [gameData, setGameData] = useState<GameData>(() => {
    if (typeof window === 'undefined') {
      return {
        key: "V7CTM-39XV2-PHW9Z",
        title: "Sniper Elite 4 Steam Key",
        imageUrl: "https://cdn1.epicgames.com/offer/2bda08f9230144a19e98373cc4a6ac2d/EGS_SniperElite4_RebellionDevelopments_S1_2560x1440-6d998847b0d56222bd5dfd487227508e",
        region: "GLOBAL"
      };
    }
    
    if (typeof window !== 'undefined') {
      try {
        const savedData = localStorage.getItem('gameData');
        if (savedData) {
          return JSON.parse(savedData);
        }
      } catch (e) {
        console.error('Failed to parse saved game data', e);
      }
    }
    
    // Default values if no saved data exists
    return {
      key: localStorage.getItem('productKey') || "V7CTM-39XV2-PHW9Z",
      title: "Sniper Elite 4 Steam Key",
      imageUrl: "https://cdn1.epicgames.com/offer/2bda08f9230144a19e98373cc4a6ac2d/EGS_SniperElite4_RebellionDevelopments_S1_2560x1440-6d998847b0d56222bd5dfd487227508e",
      region: "GLOBAL",
      avatarUrl: "https://imgproxy.eneba.games/p1ibztjSzYq8WslGtr_OFfTyTrVerFsSB836Idpo9Mk/rs:fit:40/ar:1/aHR0cHM6Ly9hdmF0/YXJzLmVuZWJhLmdh/bWVzL2k4TmlmZU10/VmtENTRmNEZWamtX/VEdKSFpYdEN5RDIt/MzJrbFRjem8ybGMuanBlZw"
    };
  });


  const handleSaveGameData = (newData: GameData) => {
    // Обновляем состояние с новыми данными
    setGameData(prevData => ({
      ...prevData,
      ...newData
    }));
    
    // Сохраняем в localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('gameData', JSON.stringify({
        ...gameData,
        ...newData
      }));
    }
    
    setShowKeyModal(false);
  };

  useEffect(() => {
    const t = setTimeout(() => setVerifying(false), 2500);
    return () => clearTimeout(t);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(gameData.key);
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

      {/* Game Edit Modal */}
      <ProductKeyModal
        isOpen={showKeyModal}
        onClose={() => setShowKeyModal(false)}
        initialData={gameData}
        onSave={handleSaveGameData}
      />

      {verifying ? (
        <>
          <div className="flex flex-col items-center w-full gap-4 px-6 sm:px-16 md:px-24 lg:px-32 mb-10">
            <p className="text-white text-[16px] font-bold mb-2 text-center">
              Safety first, are you a real human being?
            </p>

            <div className="bg-white rounded-[4px] p-4 flex items-center justify-between w-full max-w-[300px] shadow-lg relative">
              <div className="flex items-center gap-3">
                <div className="relative w-7 h-7">
                  <div className="absolute inset-0 border-[3px] border-[#00d2b4]/20 rounded-full"></div>
                  <div className="absolute inset-0 border-[3px] border-[#00d2b4] border-t-transparent rounded-full animate-spin"></div>
                </div>
                <span className="text-[#333] text-[15px] font-medium">Verifying...</span>
              </div>

              <div className="flex flex-col items-end">
                <div className="flex items-center">
                  <img 
                    src="/Cloudflare_Logo.svg" 
                    alt="Cloudflare" 
                    className="h-5 w-auto"
                    style={{ minWidth: '80px' }}
                  />
                </div>
                <div className="flex gap-2 mt-1">
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
              <div 
                className="w-full h-full cursor-pointer relative group"
                onClick={() => document.getElementById('image-upload')?.click()}
              >
                <Image
                  src={gameData.imageUrl || "https://imgproxy.eneba.games/iH0q8-V30s0_NVfXP1QDbj6wH_aSks3EzbkeGJ9jGhI/rs:fit:60/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9T/bmlwZXIgRWxpdGUg/NC5qcGc"}
                  alt={gameData.title || "Game Image"}
                  width={80}
                  height={110}
                  className="w-full h-full object-cover group-hover:opacity-80 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        const result = reader.result as string;
                        const newData = {
                          ...gameData,
                          imageUrl: result
                        };
                        setGameData(newData);
                        localStorage.setItem('gameData', JSON.stringify(newData));
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                />
              </div>
            </div>
          </div>
          <div className="bg-[#351183] rounded-lg shadow-lg p-6 space-y-6 flex-grow">
            <div className="flex gap-6">
              <div className="flex-grow">
                <h3 className="text-[18px] font-bold text-white mb-6 font-metropolis-bold">
                  <span>{gameData.title} {gameData.region}</span>
                </h3>

                <ul className="list-none p-0 m-0 grid grid-cols-2 sm:grid-cols-4 gap-12 w-full">
                  <li className="flex gap-3 items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-10 h-10 flex-shrink-0"
                      style={{ maxWidth: "40px", minWidth: "40px" }}
                    >
                      <path 
                        fill="#FFF" 
                        d="M24 11.88a12.12 12.12 0 0 0-.85-4.31l-.1-.23A12.01 12.01 0 0 0 0 12a12.01 12.01 0 0 0 22.69 5.45A11.89 11.89 0 0 0 24 12v-.12zm-2.26-4.8L21.8 7l.26.54h-.12l-.21.03v-.49zM20 4.98v-.53c.2.2.38.4.55.62l-.22.32h-.75l-.05-.16.47-.24zM5.53 3.66v-.02h.24l.02-.08h.4v.17l-.12.15h-.54v-.22zm.38.54l.26-.04c.02 0 0 .24 0 .24l-.54.03-.1-.12.38-.11zm16.6 4.76h-.88l-.54-.4-.56.06v.34h-.18l-.2-.13-.97-.25v-.63l-1.23.1-.39.2h-.49l-.24-.03-.6.34v.62l-1.21.88.1.37h.25l-.07.36-.17.06-.01.94 1.05 1.2h.46l.03-.08h.82l.24-.22h.46l.26.26.7.07-.1.93.78 1.36-.41.78.03.36.32.32v.88l.42.57v.73h.36A11 11 0 0 1 1.87 7.69v-.34l.39-.48c.14-.26.28-.51.44-.76l.02.2-.46.56-.4.82v.63l.46.22v.87l.44.75.36.05.05-.26-.43-.64-.08-.64h.25l.1.65.61.9-.16.28.4.59.95.24v-.16l.39.06-.04.27.3.06.47.12.66.76.84.06.08.69-.57.4-.03.61-.08.38.83 1.04.06.36.34.08c.04 0 .68.48.68.48v1.89l.23.06-.16.87.39.52-.07.86.5.89.66.57.65.01.07-.2-.49-.42.03-.2.09-.24.02-.26h-.33l-.16-.21.27-.26.03-.2-.3-.08.02-.19.43-.06.65-.32.22-.4.69-.88-.16-.68.21-.37.64.02.42-.34.14-1.32.47-.6.08-.39-.43-.13-.28-.47-.97-.01-.77-.3-.04-.54-.25-.45-.7-.01-.4-.63-.36-.18-.02.2-.65.04-.23-.34-.68-.13-.56.64-.88-.15-.06-.99-.64-.1.25-.5-.07-.27-.84.56-.53-.06-.2-.42.12-.42.3-.54.67-.34h1.3v.4l.46.21L7.5 9l.33-.34.68-.44.05-.32.67-.7.72-.4-.06-.05.49-.46.18.05.08.1.18-.2.05-.03-.2-.03-.2-.06v-.2l.1-.09h.24l.11.05.1.19.11-.02v-.01h.04l.33-.04.05-.17.2.05v.18l-.18.12.02.2.61.19h.15V6.3l-.48-.23-.03-.12.4-.14.02-.38-.42-.26-.03-.65-.57.28h-.21l.05-.5-.78-.18-.33.25v.75l-.58.18-.23.5-.26.03v-.62l-.55-.08-.27-.18-.11-.4.98-.58.48-.14.05.32.27-.01.02-.17.28-.04v-.05l-.12-.05-.03-.17.35-.03.2-.22.02-.01.06-.07.73-.09.32.27-.84.45 1.06.25.14-.36h.47l.16-.3-.33-.1v-.38L11.2 2.6l-.71.08-.4.21.02.51-.42-.06-.07-.28.4-.37-.72-.04-.21.07-.1.24.28.05-.06.27-.46.03-.08.18-.67.02s-.02-.38-.05-.38l.53-.01.4-.4-.21-.1-.3.28-.48-.03-.3-.4h-.62l-.65.49h.6l.05.17-.15.14.66.02.1.24-.74-.03-.04-.18-.47-.1-.24-.14h-.56a10.95 10.95 0 0 1 13.74.65l-.13.23-.5.2-.22.23.05.27.26.04.16.4.45-.19.07.53h-.13l-.37-.05-.42.07-.4.56-.56.09-.09.49.24.05-.07.32-.56-.12-.52.12-.11.28.09.61.3.14h.52l.34-.03.1-.27.54-.7.36.07.35-.32.06.25.86.58-.1.14-.39-.02.15.21.24.05.28-.11v-.34l.12-.06-.1-.1-.58-.33-.15-.42h.48l.15.15.41.35.02.43.42.45.16-.62.3-.16.05.5.3.32h.56c.12.28.22.57.3.87l-.06.05zM6.54 5.45l.28-.14.26.07-.09.35-.28.09-.17-.37zm1.53.83v.22h-.66l-.25-.07.06-.15.32-.14h.43v.14h.1zm.3.31v.22l-.17.1-.2.05v-.37h.37zm-.19-.09v-.26l.23.2-.23.06zm.1.53v.21l-.15.16h-.35l.05-.24.17-.01.03-.08.26-.04zm-.87-.44h.37l-.47.65-.2-.1.05-.27.25-.28zm1.5.37v.2h-.36l-.1-.13v-.2h.04l.41.13zm-.33-.3l.1-.1.17.1-.14.11-.13-.1zm14.1 2.85l.03-.04.04.19-.08-.15z"
                      />
                    </svg>
                    <div>
                      <div className="text-[12px] text-white/60 font-medium">Region</div>
                      <strong className="text-[20px] font-bold text-white block font-metropolis-bold">{gameData.region}</strong>
                      <div className="text-[12px]">
                        <span className="text-white">Check </span>
                        <a 
                          href="/es/support/article/region-restrictions"
                          target="_blank"
                          className="text-[#FAD318] hover:underline font-normal"
                        >
                          region restrictions
                        </a>
                      </div>
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
                        <span className="font-normal">Activation Guide</span>
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
                      <div className="flex items-center gap-1">
                        <span className="text-[12px] text-white/60 font-medium">Product Type</span>
                        <div className="relative group">
                          <svg className="w-3 h-3 text-white/60 cursor-help" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="16" x2="12" y2="12"></line>
                            <line x1="12" y1="8" x2="12.01" y2="8"></line>
                          </svg>
                          <div className="hidden group-hover:block absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 z-10 w-64 p-3 text-sm text-white bg-[#211d2c] rounded-md shadow-lg">
                            This is not CD. You bought digital edition of the product. You'll receive CD-KEY only that can be used for activation product on valid platform.
                            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-[#211d2c]"></div>
                          </div>
                        </div>
                      </div>
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
                          {gameData.key}
                        </strong>
                        {copied && (
                          <div className="absolute top-[-35px] left-0 bg-yellow-100 text-black text-[11px] px-2 py-1 rounded whitespace-nowrap">
                            Copied!
                          </div>
                        )}
                      </div>

                      <button type="button" onClick={handleCopy} className="flex-shrink-0 p-0 hover:opacity-80 transition">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M2.25004 16.9959L2.25006 4.00413L2.25004 16.9959ZM2.25006 4.00413C2.25058 3.98474 2.25165 3.96537 2.25303 3.94601C2.25649 3.89759 2.26377 3.82352 2.27892 3.73267C2.30979 3.54742 2.37015 3.31187 2.48338 3.08541C2.59514 2.86188 2.75101 2.66117 2.97077 2.51466C3.18584 2.37129 3.5063 2.25 4.00006 2.25H12.4994C12.9137 2.25 13.2501 1.91421 13.2501 1.5C13.2501 1.08579 12.9143 0.75 12.5001 0.75H4.00006C3.24382 0.75 2.62678 0.941215 2.13872 1.26659C1.65536 1.58883 1.34247 2.01312 1.14174 2.41459C0.942469 2.81313 0.846573 3.20258 0.799324 3.48608C0.775404 3.6296 0.763153 3.75084 0.756846 3.83914C0.753061 3.89213 0.75033 3.94528 0.750059 3.99842C0.748279 5.7505 0.750057 13.3078 0.750057 17L0.750059 17.0016L0.750064 17.0034C0.750326 17.0471 0.751757 17.0896 0.756846 17.1609C0.763153 17.2492 0.775404 17.3704 0.799324 17.5139C0.846573 17.7974 0.942469 18.1869 1.14174 18.5854C1.34247 18.9869 1.65536 19.4112 2.13872 19.7334C2.62678 20.0588 3.24382 20.25 4.00006 20.25H6.99977C7.41399 20.25 7.75006 19.9142 7.75006 19.5C7.75006 19.0858 7.41427 18.75 7.00005 18.75H4.00006C3.5063 18.75 3.18584 18.6287 2.97077 18.4853C2.75101 18.3388 2.59514 18.1381 2.48338 17.9146C2.37015 17.6881 2.30979 17.4526 2.27892 17.2673C2.26377 17.1765 2.25649 17.1024 2.25303 17.054C2.25165 17.0346 2.2506 17.0153 2.25004 16.9959" fill="currentColor"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M20 5.5H12C11.1716 5.5 10.5 6.17157 10.5 7V20C10.5 20.8284 11.1716 21.5 12 21.5H20C20.8284 21.5 21.5 20.8284 21.5 20V7C21.5 6.17157 20.8284 5.5 20 5.5ZM12 4C10.3431 4 9 5.34315 9 7V20C9 21.6569 10.3431 23 12 23H20C21.6569 23 23 21.6569 23 20V7C23 5.34315 21.6569 4 20 4H12Z" fill="currentColor"></path>
                        </svg>
                      </button>
                    </div>
                  </li>
                </ul>

                <div className="flex flex-col sm:flex-row gap-6 mt-4 justify-center w-full pb-6 px-0">
                  <a
                    href={`https://store.steampowered.com/account/registerkey?key=${gameData.key}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[270px] h-[35px] flex items-center justify-center bg-[#FAD318] hover:bg-[#F0C000] text-black px-10 py-1.5 font-bold text-[15px] transition-all whitespace-nowrap"
                  >
                    <strong>Activate on</strong>
                    <svg width="20" height="20" viewBox="0 0 30 24" fill="none" className="mx-1">
                      <path fill="currentColor" fillRule="nonzero" d="M25.56 4.92a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zm-1 4.24l-3.03 2.6a3.98 3.98 0 0 1-7.81 1.51l-7.49-2.55a3.52 3.52 0 0 1-5.65-2.8 3.53 3.53 0 0 1 6.95-.8l7.22 2.46a3.96 3.96 0 0 1 2.76-1.18l1.08-3.3-.02-.2a4.5 4.5 0 1 1 5.98 4.26zM6.31 6.7a2.46 2.46 0 0 0-4.62 1.2 2.47 2.47 0 0 0 3.18 2.36l-1.17-.4a1.94 1.94 0 1 1 1.83-3.43l.78.27zm13.25-1.8a3.5 3.5 0 0 0 7 0 3.5 3.5 0 1 0-7 0zm.07 7.83a2.67 2.67 0 0 0-3.26-2.6l1.48.5c.94.5 1.3 1.68.8 2.63-.51.95-1.68 1.3-2.63.8l-1.6-.55a2.67 2.67 0 0 0 5.21-.78z"/>
                    </svg>
                    <strong>STEAM</strong>
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
                    <p className="text-[14px] text-white">
                      Don’t want to use it now? Don’t worry. You can always find the code in your Library!
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
                  <span className="text-[18px] font-bold text-white block font-metropolis-bold">Help us improve Eneba</span>
                  <span className="text-[14px] text-white block">
                    Rate 4 simple statements, we'd love to hear your feedback
                  </span>
                </div>
              </div>
              <button
                type="button"
                className="bg-[#FAD318] hover:bg-[#F0C000] text-black px-6 py-2.5 rounded font-bold text-[15px] transition-all flex-shrink-0 whitespace-nowrap"
              >
                <span>Take the Survey</span>
              </button>
            </div>

            <p className="text-[14px] text-white w-full mt-4">
              Since it’s a digital product and the key was displayed, you are not eligible for a refund unless the key is invalid or faulty.
            </p>

            <div className="pt-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3 flex-grow">
                  <div 
                    className="relative w-[35px] h-[35px] flex-shrink-0 cursor-pointer group"
                    onClick={() => document.getElementById('avatar-upload')?.click()}
                  >
                    <Image
                      src={gameData.avatarUrl || "https://imgproxy.eneba.games/p1ibztjSzYq8WslGtr_OFfTyTrVerFsSB836Idpo9Mk/rs:fit:40/ar:1/aHR0cHM6Ly9hdmF0/YXJzLmVuZWJhLmdh/bWVzL2k4TmlmZU10/VmtENTRmNEZWamtX/VEdKSFpYdEN5RDIt/MzJrbFRjem8ybGMuanBlZw"}
                      alt="Games Federation"
                      width={35}
                      height={35}
                      className="w-full h-full rounded-full object-cover group-hover:opacity-80 transition-opacity"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <input
                      id="avatar-upload"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onloadend = () => {
                            const result = reader.result as string;
                            const newData = {
                              ...gameData,
                              avatarUrl: result
                            };
                            setGameData(newData);
                            localStorage.setItem('gameData', JSON.stringify(newData));
                          };
                          reader.readAsDataURL(file);
                        }
                      }}
                    />
                  </div>
                  <div>
                    <div className="text-[14px] font-bold text-white">{gameData.sellerName || 'Games Federation'}</div>
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
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                    <path d="M13.6 12.1l-5.8-11C7.6.9 7.3.7 7 .7c-.3 0-.6.2-.7.4l-5.9 11c-.1.3-.1.6 0 .8.2.3.4.4.7.4h11.7c.3 0 .6-.2.7-.4.2-.3.2-.6.1-.8zM7 11.6c-.5 0-.8-.4-.8-.8s.3-.9.8-.9.8.4.8.8-.3.9-.8.9zm.9-3.3c0 .5-.4.8-.8.8-.5 0-.8-.4-.8-.8V4.9c0-.5.4-.8.8-.8.5 0 .8.4.8.8v3.4z"></path>
                  </svg>
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
