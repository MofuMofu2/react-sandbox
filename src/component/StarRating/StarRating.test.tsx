import React from "react";
import { render } from "@testing-library/react";
import StarRating from "./";

it("星のアイコンにpropsされたcolorが割り当てられている", () => {
  // デフォルト値はredなので変更した値を渡す
  const content = render(<StarRating color="blue" count={3} />);
  // 星の要素を取得
  const stars = content.getAllByTestId("star");
  // 星の色はblue
  expect(stars[0]).toHaveClass("blue");
});

it("countの数だけ星が描画されている", () => {
  // デフォルト値は3なので変更した値を渡す
  const content = render(<StarRating color="red" count={5} />);
  // 星の要素を取得
  const stars = content.getAllByTitle("star");
  // 要素数は5個
  expect(stars).toHaveLength(5);
});

it("星の数を示すテキストがcountの値を使って描画されている", () => {
  // デフォルト値は3なので変更した値を渡す
  const content = render(<StarRating color="red" count={4} />);
  // 意図通りのテキストになっているか確認
  expect(content.getByText("星の数は4個です")).toBeTruthy();
});
