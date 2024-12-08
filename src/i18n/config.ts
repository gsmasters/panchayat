import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en.json';
import teTranslations from './locales/te.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslations },
    te: { translation: teTranslations }
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
});

export default i18n;