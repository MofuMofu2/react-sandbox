import React from "react";
import { render, screen } from "@testing-library/react";
import { About } from "./About";

it("h1ヘッダーテキストが存在すること", () => {
  // render関数を使ってAboutコンポーネントをレンダリング
  const content = render(<About />);
  // レンダリングされたコンポーネントの中にテキストが存在するか確認
  expect(content.getByText("About")).toBeInTheDocument();
});

it("h1ヘッダーテキストが存在すること", () => {
  // render関数を使ってAboutコンポーネントをレンダリング
  render(<About />);
  // screen APIを使ってDOMにアクセスし、テキストが存在するか確認
  expect(screen.getByText("About")).toBeInTheDocument();
});

it("h1ヘッダーテキストが存在すること", () => {
  // デストラクチャリングを使いrender関数で取得したオブジェクトからgetByTextメソッドを取得する
  const { getByText } = render(<About />);
  // 取得してあるのでgetByTextが直接使える
  expect(getByText("About")).toBeInTheDocument();
});
