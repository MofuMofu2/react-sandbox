import React from "react";

import { render } from "@testing-library/react";

import HookContext from "./HookContext";

it("MyAppContextの値が子コンポーネントに渡されている", () => {
  const content = render(<HookContext />);

  // MyAppContextの値が子コンポーネントに渡されていることを確認する
  expect(content.getByText("MyApp")).toBeInTheDocument();
  expect(content.getByText("ja")).toBeInTheDocument();
});
