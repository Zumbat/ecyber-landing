import React from "react";
import { MacbookScroll } from "@/app/components/ui/macbook-scroll";

export default function MacbookScrollDemo() {
  return (
    <div 
      className="w-full overflow-hidden relative bg-[#111111] gradient-border-top mt-40"
      
    >
      <MacbookScroll
        title={
          <>
          <div className="text-4xl font-bold mb-2 text-[#E8E8E8] orbitron-text">
                Tre piattaforme <br/> che amerai usare.
            </div>
            <p className="text-[#A1A1A1] text-lg mb-2">
              Strumenti sviluppati per essere intuitivi, efficaci e integrati con le attività del nostro Red Team.
              <br/> Una visione unica: threat intelligence, analisi delle vulnerabilità e risposta operativa — tutto in un unico ambiente.
            </p>
        </>}
        badge={
          <a href="https://tools.ecyber.it">
            <ECyberBadge className="h-10 w-10 -rotate-12 transform" />
          </a>
        }
        src={`/assets/platform_rec.webm`}
        showGradient={false}
      />
    </div>
  );
}

// E-Cyber Logo Badge
const ECyberBadge = ({ className }: { className?: string }) => {
  return (
    <div className="relative">
      {/* Sfondo circolare nero - ingrandito di 6px totali */}
      <div 
        className="absolute rounded-full"
        style={{ 
          backgroundColor: '#111111',
          top: '-3px',
          left: '-3px',
          right: '-3px',
          bottom: '-3px'
        }}
      />
      {/* Logo SVG */}
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 301 224" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={`relative z-10 ${className}`}
      >
        <g filter="url(#filter0_d_67_132)">
          <path 
            d="M283.428 163.56C283.428 156.507 277.723 150.802 270.774 150.802C263.825 150.802 258.016 156.507 258.016 163.56C258.016 170.613 262.476 174.969 268.388 176.006V186.482C268.388 194.884 261.543 201.833 253.038 201.833H59.8062C51.4049 201.833 44.4556 194.987 44.4556 186.482V175.177C44.4556 166.775 51.3012 159.826 59.8062 159.826H143.924C145.065 165.634 150.251 169.991 156.37 169.991C162.49 169.991 169.128 164.286 169.128 157.233C169.128 150.18 164.772 145.927 158.963 144.787V143.542H193.295C204.497 143.542 213.728 134.414 213.728 123.109V111.803C213.728 100.498 204.6 91.3704 193.295 91.3704H101.917C100.88 86.3918 96.9382 82.4504 91.9596 81.4132V80.1685H248.37C249.822 85.6657 254.697 89.7108 260.609 89.7108C266.521 89.7108 273.367 84.0062 273.367 76.9532C273.367 69.9002 267.662 64.1956 260.609 64.1956C253.556 64.1956 249.096 68.863 248.059 74.9825H59.5988C51.1974 74.9825 44.2482 68.137 44.2482 59.6319V48.3263C44.2482 39.9249 51.0937 32.9757 59.5988 32.9757H194.539C195.68 38.784 200.866 43.1403 206.986 43.1403C213.105 43.1403 219.743 37.4356 219.743 30.3826C219.743 23.3296 214.039 17.625 206.986 17.625C199.933 17.625 195.68 21.9813 194.539 27.7896H59.5988C48.397 27.7896 39.1658 36.917 39.1658 48.2226V59.5281C39.1658 70.8337 48.2933 79.9611 59.5988 79.9611H86.6699V81.2058C81.6913 82.243 77.7499 86.1843 76.8164 91.1629H38.4398C27.238 91.1629 18.0068 100.29 18.0068 111.596V122.901C18.0068 134.207 27.1343 143.334 38.4398 143.334H153.673V144.579C148.695 145.616 144.857 149.454 143.82 154.433H59.5988C48.397 154.433 39.1658 163.56 39.1658 174.865V186.171C39.1658 197.477 48.2933 206.604 59.5988 206.604H252.83C264.136 206.604 273.263 197.477 273.263 186.171V175.592C278.968 174.347 283.221 169.265 283.221 163.145L283.428 163.56ZM207.297 23.3296C211.55 23.3296 214.869 26.7524 214.869 30.9012C214.869 35.0501 211.446 38.4728 207.297 38.4728C203.148 38.4728 199.725 35.0501 199.725 30.9012C199.725 26.7524 203.148 23.3296 207.297 23.3296ZM260.817 69.7965C265.069 69.7965 268.388 73.2193 268.388 77.3681C268.388 81.5169 264.966 84.9397 260.817 84.9397C256.668 84.9397 253.245 81.5169 253.245 77.3681C253.245 73.2193 256.668 69.7965 260.817 69.7965ZM89.5741 86.5992C93.8266 86.5992 97.1457 90.022 97.1457 94.1708C97.1457 98.3197 93.7229 101.742 89.5741 101.742C85.4252 101.742 82.0025 98.3197 82.0025 94.1708C82.0025 90.022 85.4252 86.5992 89.5741 86.5992ZM23.4003 123.316V112.011C23.4003 103.609 30.2459 96.6601 38.751 96.6601H77.1276C78.2685 102.468 83.4546 106.825 89.5741 106.825C95.6936 106.825 100.88 102.468 102.021 96.6601H193.398C201.8 96.6601 208.749 103.506 208.749 112.011V123.316C208.749 131.718 201.904 138.667 193.398 138.667H38.751C30.3496 138.667 23.4003 131.821 23.4003 123.316ZM156.474 149.869C160.726 149.869 164.045 153.292 164.045 157.44C164.045 161.589 160.623 165.012 156.474 165.012C152.325 165.012 148.902 161.589 148.902 157.44C148.902 153.292 152.325 149.869 156.474 149.869ZM270.774 171.235C266.522 171.235 263.202 167.812 263.202 163.664C263.202 159.515 266.625 156.092 270.774 156.092C274.923 156.092 278.346 159.515 278.346 163.664C278.346 167.812 274.923 171.235 270.774 171.235Z" 
            fill="white" 
            style={{fill:"white", fillOpacity:1}}
          />
        </g>
        <defs>
          <filter id="filter0_d_67_132" x="0.965302" y="0.583466" width="299.504" height="223.062" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="8.52077"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.545098 0 0 0 0 0.560784 0 0 0 0 0.776471 0 0 0 0.4 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_67_132"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_67_132" result="shape"/>
          </filter>
        </defs>
      </svg>
    </div>
  );
};
