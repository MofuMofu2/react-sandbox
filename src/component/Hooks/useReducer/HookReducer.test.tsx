import React from "react";
import HookReducer from "./HookReducer";
import { render } from "@testing-library/react";

it("初期状態はpropsの値でpタグのテキストがレンダリングされる", () => {
  const screen = render(<HookReducer init={0} />);
  expect(screen.getByText("0回クリックされました")).toBeInTheDocument();
});
