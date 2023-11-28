import React from "react";
import { render } from "@testing-library/react";
import QuerySample from "./QuerySample";
import { server } from "../../mocks/server";

describe("APIレスポンスパラメータの取得状態に応じてレンダリング結果が変わること", () => {
  // mswのモックサーバーを起動
  beforeAll(() => {
    server.listen();
  });
  // テストケース実行後にモックサーバーを閉じる
  afterAll(() => {
    server.close();
  });
  // 各テストケース実行前にモックサーバーのリクエスト履歴をリセット
  afterEach(() => {
    server.resetHandlers();
  });

  it("画面の初期レンダリング時にAPIリクエストを行い、結果が取得できればユーザー名とロケールを表示する", async () => {
    const content = render(<QuerySample />);
    expect(await content.findByText("miff")).toBeTruthy();
    expect(await content.findByText("en")).toBeTruthy();
  });

  it("結果が取得できない場合はユーザー名と言語情報を表示しない", async () => {
    const content = render(<QuerySample />);
    expect(content.queryByText("miff")).not.toBeTruthy();
    expect(content.queryByText("locale:")).not.toBeTruthy();
  });
});
