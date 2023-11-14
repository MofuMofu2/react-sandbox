import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationJA from "./translation/ja.json";
import translationEN from "./translation/en.json";

export type Resources = Record<
  string,
  {
    translation: Record<string, string>;
  }
>;

export const resources: Resources = {
  en: {
    translation: translationEN,
  },
  ja: {
    translation: translationJA,
  },
};

void i18n.use(initReactI18next).init({
  resources,
  lng: "ja",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
