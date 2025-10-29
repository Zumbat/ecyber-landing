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
      {/* Botón principal del selector */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="
          flex items-center justify-between gap-3
          bg-gray-900 
          hover:bg-gray-400
          text-gray-100 
          border 
          border-gray-700 
          rounded-2xl 
          px-4 
          py-2 
          text-sm
          focus:outline-none 
          focus:ring-2 
          focus:ring-gray-500 
          focus:border-transparent
          cursor-pointer
          transition-all
          duration-200
          md:min-w-[140px]
          shadow-lg
          shadow-black/20
          backdrop-blur-sm
        "
        whileHover={{ 
          scale: 1.02,
          backgroundColor: "rgb(40, 46, 53)"
        }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex items-center gap-2">
          <span className="text-base">{currentLanguage.flag}</span>
          <span className="font-medium hidden sm:inline">{currentLanguage.label}</span>
        </div>
        
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-gray-400 text-xs"
        >
          ▼
        </motion.div>
      </motion.button>

      {/* Menú desplegable */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Fondo oscuro para cerrar al hacer click fuera */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Lista de idiomas */}
            <motion.div
              initial={{ 
                opacity: 0, 
                y: -10, 
                scale: 0.95 
              }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                scale: 1 
              }}
              exit={{ 
                opacity: 0, 
                y: -10, 
                scale: 0.95 
              }}
              transition={{ 
                duration: 0.2,
                ease: "easeOut"
              }}
              className="
                absolute top-full md:left-0 left--10 right-0 z-50 mt-2
                bg-gray-900 
                border 
                border-gray-700 
                rounded-2xl 
                
                shadow-xl
                shadow-black/40
                backdrop-blur-sm
                bg-gray-900/95
              "
            >
              {languages.map((language) => (
                <motion.button
                  key={language.value}
                  onClick={() => handleLanguageChange(language.value)}
                  className={`
                    flex items-center gap-3
                    w-full px-4 py-3
                    text-sm
                    transition-all
                    duration-200
                    cursor-pointer
                    
                    ${i18n.language === language.value 
                      ? 'bg-blue-600/10 text-blue-300 ' 
                      : 'border-transparent text-gray-300 hover:bg-gray-800 hover:text-white hover:rounded-2xl '
                    }
                  `}
                 /*  whileHover={{ 
                    x: 4,
                    backgroundColor: i18n.language === language.value 
                      ? "rgb(37 99 235 / 0.15)" 
                      : "rgb(31 41 55)"
                  }} */
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-base">{language.flag}</span>
                  <span className="font-medium">{language.label}</span>
                  
                  {i18n.language === language.value && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="ml-auto text-blue-400 text-xs"
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