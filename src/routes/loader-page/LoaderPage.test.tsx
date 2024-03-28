import React from "react";
import { render, waitFor } from "@testing-library/react";
import {
  type LoaderFunctionArgs,
  type RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import LoaderPage from "./LoaderPage";

// 画面遷移してくるところを再現するためrouterを設定
const routes: RouteObject[] = [
  {
    path: "/loader",
    element: <LoaderPage />,
    loader: async (args: LoaderFunctionArgs<any>) => {
      return {
        username: "miff",
        locale: "en",
      };
    },
  },
];

const router = createMemoryRouter(routes, { initialEntries: ["/loader"] });

it("コンポーネントが表示できるか", async () => {
  const content = render(<RouterProvider router={router} />);
  // コンポーネントがレンダリングされるまで待つ
  await waitFor(() => {
    expect(content).toBeTruthy();
  });
});
