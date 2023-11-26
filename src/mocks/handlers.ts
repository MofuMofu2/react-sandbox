import { HttpResponse, http } from "msw";

export const handlers = [
  // ユーザー情報の取得用のモック
  http.get("/user", () => {
    return HttpResponse.json(
      {
        username: "miff",
        locale: "en",
      },
      { status: 200 }
    );
  }),
];
