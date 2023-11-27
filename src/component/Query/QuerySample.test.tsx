import React from "react";
import { render } from "@testing-library/react";

import QuerySample from "./QuerySample";

it("初期描画時点ではユーザー名と言語情報を表示しない", async () => {
  const content = render(<QuerySample />);
  expect(content.queryByText("miff")).not.toBeTruthy();
  expect(content.queryByText("locale:")).not.toBeTruthy();
});
