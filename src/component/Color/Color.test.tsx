import React from "react";
import Color from ".";
import { render } from "@testing-library/react";

it("色を選ぶテキストがレンダリングされていること", () => {
  const content = render(<Color id="1" title="red" color="#f00" rating={3} />);
  expect(content.getByText("色を選ぶ")).toBeInTheDocument();
});

it("spanタグの中に色を選ぶテキストがレンダリングされていること", () => {
  const content = render(<Color id="1" title="red" color="#f00" rating={3} />);
  // spanタグを取得
  const span = content.container.querySelector("span");
  expect(span).toHaveTextContent("色を選ぶ");
});
