import i18n from 'i18next';
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init(
    {
      interpolation: {
        escapeValue: false, // not needed for react!!
      },
      lng: "it",
      resources: {
        it: {
          translation: {
            "title": "Benvenuti",
            "content": "Benvenuti nel meraviglioso mondo di React!",
            "alt": "Un bellissimo faro in Puglia (Capo Pippo)",
            "mycomponentlabel": "Ecco il mio bel component!"
          }
        },
        en: {
          translation: {
            "title": "Welcome",
            "content": "Welcome in the wonderful world of React!",
            "alt": "A great lighthouse in Puglia (Pippo Cape)",
            "mycomponentlabel": "Here is my super component!"
          }
        }
      },
      fallbackLng: 'en',
      debug: true
    }
  );

export default i18n;