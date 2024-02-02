import React from "react";
import { render } from "@testing-library/react";
import AlertModal from "./index";

describe("アラートコンポーネント要素に関するテスト", () => {
  it("アラート内テキストがデグレードしていない", () => {
    const content = render(<AlertModal />);
    expect(content.getByText("アラートテキストを表示")).toBeTruthy();
  });

  it("open propsがtrueであればアラートが表示される", () => {
    const content = render(<AlertModal open={true} />);
    expect(content.queryByText("アラートテキストを表示")).toBeTruthy();
  });

  it("open propsがfalseでもダイアログ要素はレンダリングされている", () => {
    const content = render(<AlertModal open={false} />);
    // HTML側の切り替えになるのでレンダリングはされている。
    expect(content.queryByText("アラートテキストを表示")).toBeTruthy();
  });
});
