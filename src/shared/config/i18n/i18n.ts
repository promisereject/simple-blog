import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        lng: 'ru',
        debug: __IS_DEV__,
        // гадим в консоль только при dev сборке
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
            // директория для переводов при асинхронной загрузке
        },
        react: {
            useSuspense: false, //   <---- this will do the magic
        },
    });

export default i18n;
