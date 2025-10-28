import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { createInstance } from 'i18next';
import { translations } from './language';

export default function createI18nInstance() {
    const i18n = createInstance();
    
    i18n
      .use(initReactI18next)
      .init({
        resources: {
          en: { translation: translations.en },
          it: { translation: translations.it },
        },
        lng: 'it',
        fallbackLng: 'en',
        interpolation: {
          escapeValue: false,
        },
      });
  
    return i18n;
  }

  