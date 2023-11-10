import React from "react";
import HookTimer from "./HookTimer";
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";

it("Propsで渡された値から1秒ずつカウントが減ること", async () => {
  const screen = render(<HookTimer init={10} />);
  expect(screen.getByText("現在のカウント10")).toBeInTheDocument();

  await act(async () => {
    // 1秒待つ
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // 9になっていることを確認する
    expect(screen.getByText("現在のカウント9")).toBeInTheDocument();
  });
});
