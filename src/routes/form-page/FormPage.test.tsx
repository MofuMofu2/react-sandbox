import React from "react";
import { render } from "@testing-library/react";
import FormPage from "./FormPage";

it("コンポーネントが表示できる", () => {
  const content = render(<FormPage />);
  expect(content.getByText("フォームページ")).toBeTruthy();
});
