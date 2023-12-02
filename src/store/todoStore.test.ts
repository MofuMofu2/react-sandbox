import { useEffect } from "react";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { renderHook } from "@testing-library/react-hooks";
import { todoAtom } from "./atom";
import { todoLastIdSelector } from "./selector";

describe("グローバルステートの初期値に関するテスト", () => {
  it("ステートの初期値が意図通りにセットされていること", () => {
    const { result } = renderHook(() => useRecoilValue(todoAtom));
    expect(result.current).toEqual([
      { id: 1, title: "Learn React", isDone: false },
      { id: 2, title: "Learn Recoil", isDone: false },
      { id: 3, title: "Learn Redux", isDone: false },
    ]);
  });
});

describe("selectorに関するテスト", () => {
  it("selectorでグローバルステート末尾の値を取り出せる", () => {
    const { result } = renderHook(() => useRecoilValue(todoLastIdSelector), {
      wrapper: RecoilRoot,
    });
    expect(result.current).toBe(3);
  });

  it("グローバルステートの中身が空配列の場合は0を返す", async () => {
    const { result, waitForNextUpdate } = renderHook(
      () => {
        const setTodo = useSetRecoilState(todoAtom);
        useEffect(() => {
          setTodo([]);
        }, [setTodo]);
        return useRecoilValue(todoLastIdSelector);
      },
      { wrapper: RecoilRoot }
    );
    await waitForNextUpdate();
    expect(result.current).toBe(0);
  });
});
