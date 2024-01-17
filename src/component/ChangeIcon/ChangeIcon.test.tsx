import React from "react";
import { render } from "@testing-library/react";

import ChangeIcon from ".";

it("コンポーネントが表示できる", () => {
  // テスト対象のコンポーネントをレンダリングする
  const { container } = render(<ChangeIcon />);
  // テスト対象のコンポーネントが存在することを確認する
  expect(container).toBeInTheDocument();
});
