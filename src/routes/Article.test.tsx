import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Article from "./Article";
import { NameContext } from "./RouterApp";

describe("初期状態のテスト", () => {
  const mockSetName = jest.fn();
  it("ステートが存在する場合はステート + 固定テキストがレンダリングされていること", () => {
    // Contextのモックを作成
    const mockName = "name";
    const content = render(
      <NameContext.Provider value={{ name: mockName, setName: mockSetName }}>
        <Article />
      </NameContext.Provider>
    );
    expect(content.getByText("nameのページです")).toBeInTheDocument();
  });

  it("ステートが存在しない場合は固定テキストのみがレンダリングされていること", () => {
    // Contextのモックを作成
    const mockName = "";
    const content = render(
      <NameContext.Provider value={{ name: mockName, setName: mockSetName }}>
        <Article />
      </NameContext.Provider>
    );
    expect(content.getByText("最初のページです")).toBeInTheDocument();
  });
});
