import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export type Resources = Record<
  string,
  {
    translation: Record<string, string>;
  }
>;

export const resources: Resources = {
  en: {
    translation: {
      welcome: "Welcome to React and react-i18next!",
    },
  },
  ja: {
    translation: {
      welcome: "Reactとreact-i18nextの世界へようこそ！",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
