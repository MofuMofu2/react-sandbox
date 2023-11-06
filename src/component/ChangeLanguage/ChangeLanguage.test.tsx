import React, { ComponentType, useTransition } from "react";
import ChangeLanguage from "./ChangeLanguage";
import { render } from "@testing-library/react";

jest.mock("react-i18next", () => ({
  withTranslation: () => (Component: ComponentType) => {
    Component.defaultProps = {
      ...Component.defaultProps,
      t: (key: string) => key,
    };
    return Component;
  },
}));

describe("英語ロケールenを指定したとき", () => {
  it("Welcome to Reactが表示される", () => {
    const screen = render(<ChangeLanguage />);
    expect(
      screen.getByText("Welcome to React and react-i18next!")
    ).toBeInTheDocument();
  });
});

// 日本語ロケールjaを指定したときは、"Reactへようこそ"が表示される
