import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18next
i18n
  .use(LanguageDetector)  // для детектирования языка пользователя
  .use(HttpBackend)       // для загрузки переводов из файлов
  .use(initReactI18next)  // подключаем React-i18next
  .init({
    fallbackLng: 'en',    // язык по умолчанию
    debug: true,          // для отладки
    interpolation: {
      escapeValue: false, // не экранировать HTML
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // путь к файлам переводов
    },
  });

  
