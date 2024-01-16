import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import About from "./About";
import { NameContext } from "./RouterApp";

describe("初期状態のテスト", () => {
  // Contextのモックを作成
  const mockSetName = jest.fn();
  const mockName = "";

  const content = render(
    <NameContext.Provider value={{ name: mockName, setName: mockSetName }}>
      <About />
    </NameContext.Provider>
  );
  it("h1タグがレンダリングされていること", () => {
    expect(content.getByText("About")).toBeInTheDocument();
  });

  it("初期状態では名前テキストはレンダリングされていない", () => {
    const content = render(
      <NameContext.Provider value={{ name: mockName, setName: mockSetName }}>
        <About />
      </NameContext.Provider>
    );
    expect(content.queryByText("mofu")).toBeNull();
  });

  it("初期状態ではフォーム内の値は存在しない", () => {
    const content = render(
      <NameContext.Provider value={{ name: mockName, setName: mockSetName }}>
        <About />
      </NameContext.Provider>
    );
    expect(content.getByLabelText("Type Your Name")).toHaveValue("");
  });
});
