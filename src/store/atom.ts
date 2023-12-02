import { atom } from "recoil";

export const counterAtom = atom({
  key: "counterAtom",
  default: 0,
});

type Todo = {
  id: number;
  title: string;
  isDone: boolean;
};

export const todoAtom = atom<Todo[]>({
  key: "todosAtom",
  default: [
    { id: 1, title: "Learn React", isDone: false },
    { id: 2, title: "Learn Recoil", isDone: false },
    { id: 3, title: "Learn Redux", isDone: false },
  ],
});
