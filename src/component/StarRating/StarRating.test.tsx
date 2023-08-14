import React from "react";
import { getAllByTitle, render } from "@testing-library/react";
import StarRating from "./";
import userEvent from "@testing-library/user-event";
import exp from "constants";
it("星がレンダリングされている", () => {
  const screen = render(<StarRating />);
  const stars = screen.getAllByTitle("red");
  expect(stars).toHaveLength(3);

  const greyStars = screen.getAllByTitle("grey");
  expect(greyStars).toHaveLength(2);
});

it("クリックするとレーティングの数が変わる", async () => {
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
});
