'use client';

import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="w-full bg-[#111111]/80 backdrop-blur-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-end gap-2">
            <Image
              src="/assets/e-cyber_logo.svg"
              alt="E-Cyber Logo"
              width={120}
              height={40}
              className="h-8 w-auto mr-2"
            />
            <p className="text-[#E8E8E8] text-xl orbitron-text">E-Cyber</p>
          </div>

          {/* CTA Button */}
          <div className="flex items-center">
            <button className="border border-[#3c3c3c] text-[#E8E8E8] hover:bg-[#3c3c3c]/20 hover:text-[#E8E8E8] font-semibold py-2 px-4 rounded-2xl text-sm cursor-pointer">
              Iscriviti
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
