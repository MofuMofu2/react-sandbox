import React from "react";
import ColorList from ".";
import { render } from "@testing-library/react";
import colorJson from "../../assets/color-data.json";

it("Propsされた値の数だけColorsがレンダリングされている", () => {
  const content = render(<ColorList colors={colorJson} onRemove={jest.fn()} />);
  expect(content.getByText("ocean at dusk")).toBeTruthy();
  expect(content.getByText("lawn")).toBeTruthy();
  expect(content.getByText("bright red")).toBeTruthy();
});
