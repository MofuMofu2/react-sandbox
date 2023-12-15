import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { RecoilRoot } from "recoil";
import RecoilCounter from "./RecoilCounter";

it("初期状態は0回しかクリックされていない", () => {
  const content = render(
    <RecoilRoot>
      <RecoilCounter />
    </RecoilRoot>
  );

  expect(content.getByText("0回クリックされました")).toBeInTheDocument();
});

it("クリックするとカウンターが進む", async () => {
  const event = userEvent.setup();
  const content = render(
    <RecoilRoot>
      <RecoilCounter />
    </RecoilRoot>
  );

  await event.click(content.getByText("カウント"));
  expect(content.getByText("1回クリックされました")).toBeInTheDocument();
});
