import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en_trans from './assets/locales/en/trans.json';
import pt_trans from './assets/locales/pt/trans.json';

const resources = {
   en: en_trans,
   pt: pt_trans,
};

i18n
   .use(initReactI18next) // passes i18n down to react-i18next
   .use(LanguageDetector)
   .init({
      supportedLngs: ['pt', 'en'],
      fallbackLng: 'en',
      detection: {
         order: ['cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
         caches: ['cookie'],
      },
      resources,
   });

export default i18n;
