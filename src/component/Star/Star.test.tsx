import React from "react";
import { render } from "@testing-library/react";
import Star from "./";

it("選択状態のときは赤色でレンダリングされる", () => {
  // イベント検知のモック
  const event = jest.fn();

  const screen = render(<Star selected={true} onSelect={event} />);
  expect(screen.getByTitle("red")).toBeTruthy();
});

it("選択状態のときは灰色でレンダリングされる", () => {
  // イベント検知のモック
  const event = jest.fn();

  const screen = render(<Star selected={false} onSelect={event} />);
  expect(screen.getByTitle("grey")).toBeTruthy();
});
