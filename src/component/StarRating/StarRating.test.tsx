import React from "react";
import { getAllByTitle, render } from "@testing-library/react";
import StarRating from "./";
import userEvent from "@testing-library/user-event";
import exp from "constants";
it("初期状態", () => {
  const screen = render(<StarRating />);
  const stars = screen.getAllByTitle("red");
  // 赤い星は3つ
  expect(stars).toHaveLength(3);
  // 灰色の星は3つ
  const greyStars = screen.getAllByTitle("grey");
  expect(greyStars).toHaveLength(2);
  // テキスト
  expect(screen.getByText("3 of 5 Stars")).toBeTruthy();
});

it("クリックするとレーティングの数とテキストが変わる", async () => {
  // イベント検知のセットアップ
  const event = userEvent.setup();
  const screen = render(<StarRating />);

  // クリック前の状態を確認
  const Stars = screen.getAllByTitle("red");
  expect(Stars).toHaveLength(3);

  // クリックイベントを発火
  await event.click(Stars[0]);
  // クリックしたindex + 1の数だけ星が赤くなる
  expect(screen.getAllByTitle("red")).toHaveLength(1);
  // テキストの状態も変化する
  expect(screen.getByText("1 of 5 Stars")).toBeTruthy();
});
