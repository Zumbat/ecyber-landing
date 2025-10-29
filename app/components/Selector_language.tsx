'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function SelectorLanguage() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

const languages = [
  { value: 'it', label: 'Italiano', flag: '🇮🇹' },
  { value: 'en', label: 'English', flag: '🇺🇸' }
];

  const currentLanguage = languages.find(lang => lang.value === i18n.language) || languages[0];

  const handleLanguageChange = (languageValue: string) => {
    i18n.changeLanguage(languageValue);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Selector */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="
          flex items-center gap-2
          px-3 py-1.5
          text-sm
          font-medium
          text-white
          bg-[#0a0a0a]
          outline-none
          rounded-lg
          hover:bg-[#000]
          transition-colors
          duration-200
          md:min-w-[120px]
          shadow-lg
          shadow-black/20
          backdrop-blur-sm
        "
      >
        <div className="flex items-center gap-2">
          <span className="text-base">{currentLanguage.flag}</span>
          <span className="font-medium hidden sm:inline">{currentLanguage.label}</span>
        </div>
        
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-white text-xs"
        >
          ▼
        </motion.div>
      </motion.button>

      {/* Menu dropdown */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Fondo oscuro para cerrar al hacer click fuera */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Lista lingue */}
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.15 }}
              className="
                absolute top-full left-0 z-50 mt-1
                bg-[#0a0a0a]
                outline-none
                rounded-lg
                shadow-lg
                min-w-[120px]
                overflow-hidden
              "
            >
              {languages.map((language) => (
                <motion.button
                  key={language.value}
                  onClick={() => handleLanguageChange(language.value)}
                  className={`
                    flex items-center gap-2
                    w-full px-3 py-1.5
                    text-sm
                    font-medium
                    transition-colors
                    duration-150
                    first:rounded-t-lg
                    last:rounded-b-lg
                    cursor-pointer
                    ${i18n.language === language.value 
                      ? 'bg-[#1a1a1a] text-white' 
                      : 'text-white'
                    }
                  `}
                >
                  <span className="text-lg">{language.flag}</span>
                  <span className="flex-1 text-left">{language.label}</span>
                  {i18n?.language === language.value && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-white text-xs"
                    >
                      ✓
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}