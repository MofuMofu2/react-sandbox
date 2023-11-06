import React, { useTransition } from "react";
import ChangeLanguage from "./ChangeLanguage";
import { render } from "@testing-library/react";

jest.mock("react-i18next", () => {
  useTransition: jest.fn();
});

describe("英語ロケールenを指定したとき", () => {
  it("Welcome to Reactが表示される", () => {
    const screen = render(<ChangeLanguage />);
    expect(screen.getByText("Welcome to React")).toBeInTheDocument();
  });
});

// 日本語ロケールjaを指定したときは、"Reactへようこそ"が表示される
