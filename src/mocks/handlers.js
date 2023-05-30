import { rest } from 'msw'

export const handlers = [
  // ログイン用のモック
  rest.post('/login', (req, res, ctx) => {
    sessionStorage.setItem('is-authenticated', 'true')

    return res(
      ctx.status(200),
    )
  }),

  // ユーザー情報の取得用のモック
  rest.get('/user', (req, res, ctx) => {
    // セッションが存在するか
    const isAuthenticated = sessionStorage.getItem('is-authenticated')

    if (!isAuthenticated) {
      // 未認証ならログイン画面にリダイレクト
      return res(
        ctx.status(302),
        ctx.json({
          errorMessage: 'redirect to login',
        }),
      )
    }

    return res(
      ctx.status(200),
      ctx.json({
        username: 'mofu',
      }),
    )
  }),
]