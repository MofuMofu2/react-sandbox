import { selector } from "recoil";
import { todoAtom } from "./atom";

export const todoLastIdSelector = selector({
  key: "todoLastIdSelector",
  get: ({ get }) => {
    const todos = get(todoAtom);
    return todos.length > 0 ? todos[todos.length - 1].id : 0;
  },
});
