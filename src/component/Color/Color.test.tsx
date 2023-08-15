import React from "react";
import Color from ".";
import { render } from "@testing-library/react";
import colorJson from "../../assets/color-data.json";

const props = colorJson[0];

it("Propsされた値が画面にレンダリングされていること", () => {
  const content = render(
    <Color title={props.title} color={props.color} rating={props.rating} />
  );
  // テキストがレンダリングされている
  expect(content.getByText("ocean at dusk")).toBeTruthy();
  // 星に関する値もProps通りレンダリングされている
  expect(content.getByText("5 of 5 Stars")).toBeTruthy();
});
