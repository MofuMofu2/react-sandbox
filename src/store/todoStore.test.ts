import { useEffect } from "react";
import { renderHook, waitFor } from "@testing-library/react";

import { getTodosSnapshot, resetStore, useTodoState } from "./atom";
import { todoLastIdSelector, useTodoLastId } from "./selector";

beforeEach(() => {
  resetStore();
});

describe("グローバルステートの初期値に関するテスト", () => {
  it("ステートの初期値が意図通りにセットされていること", () => {
    expect(getTodosSnapshot()).toEqual([
      { id: 1, title: "Learn React", isDone: false },
      { id: 2, title: "Learn Recoil", isDone: false },
      { id: 3, title: "Learn Redux", isDone: false },
    ]);
  });
});

describe("selectorに関するテスト", () => {
  it("selectorでグローバルステート末尾の値を取り出せる", () => {
    const { result } = renderHook(() => useTodoLastId());
    expect(result.current).toBe(3);
  });

  it("グローバルステートの中身が空配列の場合は0を返す", async () => {
    const { result } = renderHook(() => {
      const [, setTodo] = useTodoState();
      useEffect(() => {
        setTodo([]);
      }, [setTodo]);
      return useTodoLastId();
    });
    await waitFor(() => {
      expect(result.current).toBe(0);
    });
  });

  it("selector関数で末尾のIDを取り出せる", () => {
    expect(todoLastIdSelector(getTodosSnapshot())).toBe(3);
  });
});
