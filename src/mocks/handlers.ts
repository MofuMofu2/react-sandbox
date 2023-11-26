import { rest } from "msw";

export const handlers = [
  // ログイン用のモック
  rest.post("/login", async (req, res, ctx) => {
    sessionStorage.setItem("is-authenticated", "true");

    return await res(ctx.status(200));
  }),

  // ユーザー情報の取得用のモック
  rest.get("/user", async (req, res, ctx) => {
    return await res(
      ctx.status(200),
      ctx.json({
        username: "miff",
        locale: "en",
      })
    );
  }),
];
