import React, { type ComponentType, useTransition } from "react";

import { render } from "@testing-library/react";

import { initReactI18next } from "react-i18next";

import ChangeLanguage from "./ChangeLanguage";

import i18n from "../../i18n/i18n";

beforeEach(() => {
  i18n.use(initReactI18next).init({
    resources: {
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
    },
    lng: "ja",
    fallbackLng: "ja",
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
  it("多言語対応したテキストが表示される", () => {
    i18n.changeLanguage("en");
    const screen = render(<ChangeLanguage />);
    expect(
      screen.getByText("Welcome to React and react-i18next!")
    ).toBeInTheDocument();
  });
});

describe("日本語ロケールjaを指定したとき", () => {
  it("多言語対応したテキストが表示される", () => {
    i18n.changeLanguage("ja");
    const screen = render(<ChangeLanguage />);
    expect(
      screen.getByText("Reactとreact-i18nextの世界へようこそ！")
    ).toBeInTheDocument();
  });
});
