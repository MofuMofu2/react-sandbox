import React from "react";

import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import RecoilCounter from "./RecoilCounter";
import { resetStore } from "../../store/atom";

beforeEach(() => {
  resetStore();
});

it("初期状態は0回しかクリックされていない", () => {
  const content = render(<RecoilCounter />);

  expect(content.getByText("0回クリックされました")).toBeInTheDocument();
});

it("クリックするとカウンターが進む", async () => {
  const event = userEvent.setup();
  const content = render(<RecoilCounter />);

  await event.click(content.getByText("カウント"));
  expect(content.getByText("1回クリックされました")).toBeInTheDocument();
});
