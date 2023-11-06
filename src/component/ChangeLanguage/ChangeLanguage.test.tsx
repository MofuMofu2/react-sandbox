import React, { ComponentType, useTransition } from "react";
import ChangeLanguage from "./ChangeLanguage";
import { render } from "@testing-library/react";
import i18n from "../../i18n";
import { initReactI18next } from "react-i18next";

beforeEach(() => {
  i18n.use(initReactI18next).init({
    resources: {
      en: {
        translation: {
          welcome: "Welcome to React and react-i18next!",
          // 他の翻訳もここに追加します
        },
      },
      // 他の言語の翻訳もここに追加します
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

  jest.mock("react-i18next", () => ({
    useTranslation: () => ({ t: (key: string) => key }),
    withTranslation: () => (Component: ComponentType) => Component,
  }));
});

describe("英語ロケールenを指定したとき", () => {
  it("Welcome to Reactが表示される", () => {
    const screen = render(<ChangeLanguage />);
    expect(
      screen.getByText("Welcome to React and react-i18next!")
    ).toBeInTheDocument();
  });
});

// 日本語ロケールjaを指定したときは、"Reactへようこそ"が表示される
