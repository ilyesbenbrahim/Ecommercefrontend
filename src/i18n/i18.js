import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translation from '../translation.json';

i18n
  .use(initReactI18next) // Passer l'instance i18n à react-i18next.
  .init({
     // Spécifie la langue par défaut à utiliser lorsque une traduction n'est pas disponible.
    lng: "en",
    interpolation: {
      escapeValue: false, // Non nécessaire pour React car il échappe déjà par défaut.
    },
    resources: translation,
    defaultNS: 'common', // Définit l'espace de noms par défaut utilisé si non passé à la fonction de traduction.
  });

export default i18n;
