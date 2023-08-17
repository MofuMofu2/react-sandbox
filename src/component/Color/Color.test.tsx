import React from "react";
import Color from ".";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import colorJson from "../../assets/color-data.json";

const props = colorJson[0];

it("Propsされた値が画面にレンダリングされていること", () => {
  const content = render(
    <Color
      id={props.id}
      title={props.title}
      color={props.color}
      rating={props.rating}
      onRemove={jest.fn()}
    />
  );
  // テキストがレンダリングされている
  expect(content.getByText("ocean at dusk")).toBeTruthy();
  // 星に関する値もProps通りレンダリングされている
  expect(content.getByText("5 of 5 Stars")).toBeTruthy();
});

it("削除ボタンをクリックするとイベント発火する", async () => {
  // イベントのモックアップ
  const handleEvent = jest.fn();
  // イベント検知のモックアップ
  const event = userEvent.setup();

  const content = render(
    <Color
      id={props.id}
      title={props.title}
      color={props.color}
      rating={props.rating}
      onRemove={handleEvent}
    />
  );

  // ボタンコンポーネントをクリック
  const button = content.getByRole("button", { name: "remove" });
  await event.click(button);

  // イベント発火するか
  expect(handleEvent).toHaveBeenCalled();
});
