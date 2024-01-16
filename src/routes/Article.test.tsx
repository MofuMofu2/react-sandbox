import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Article from "./Article";
import { NameContext } from "./RouterApp";

describe("初期状態のテスト", () => {
  // Contextのモックを作成
  const mockSetName = jest.fn();
  const mockName = "name";
  it("ステートが存在する場合はステート + 固定テキストがレンダリングされていること", () => {
    const content = render(
      <NameContext.Provider value={{ name: mockName, setName: mockSetName }}>
        <Article />
      </NameContext.Provider>
    );
    expect(content.getByText("nameのページです")).toBeInTheDocument();
  });
});
