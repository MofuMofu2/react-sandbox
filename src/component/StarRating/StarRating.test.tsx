import { render } from "@testing-library/react";
import React from "react";
import StarRating from "./";

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
