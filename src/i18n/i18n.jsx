import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          welcome: "Welcome to our Book App",
          bookDescription: {
            book1: "This is a great book about...",
            book2: "An intriguing story of...",
          },
        },
      },
      es: {
        translation: {
          welcome: "Bienvenido a nuestra aplicación de libros",
          bookDescription: {
            book1: "Este es un gran libro sobre...",
            book2: "Una historia intrigante de...",
          },
        },
      },
      // Add more languages as needed
    },
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;