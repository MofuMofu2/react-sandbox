import React from "react";
import { render } from "@testing-library/react";

import ChangeIcon from ".";

it("h2タグが2つ存在する", () => {
  const content = render(<ChangeIcon />);
  // h2タグが2つ存在することを確認
  expect(content.getAllByRole("heading", { level: 2 })).toHaveLength(2);
});

it("アイコン要素が存在することを確認する", () => {
  const content = render(<ChangeIcon />);
  // アイコン要素が存在することを確認
  expect(content.getByTestId("icon")).toBeInTheDocument();
});
