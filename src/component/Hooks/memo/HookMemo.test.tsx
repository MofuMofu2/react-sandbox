import React from "react";

import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import HookMemo from "./HookMemo";

it("初期値のテスト", () => {
  const content = render(<HookMemo />);
  expect(content.getAllByText("0")).toHaveLength(2);
});

it("-ボタンをクリックするとcount2の値が-1される", async () => {
  const event = userEvent.setup();
  const content = render(<HookMemo />);
  await event.click(content.getByText("-"));
  expect(content.getByText("-1")).toBeInTheDocument();
});
