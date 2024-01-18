import React from "react";
import { render } from "@testing-library/react";

import ChangeIcon from ".";

it("h2タグが2つ存在する", () => {
  const content = render(<ChangeIcon />);
  // h2タグが2つ存在することを確認
  expect(content.getAllByRole("heading", { level: 2 })).toHaveLength(2);
});
