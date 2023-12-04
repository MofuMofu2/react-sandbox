import { atom, atomFamily, selector } from "recoil";
import { type TodoList } from "./atom";

export const idsAtom = atom<number[]>({
  key: "idsAtom",
  default: [],
});

export const todoAtom = atomFamily<TodoList | null, number>({
  key: "todoAtom",
  default: null,
});

type SetArgType = {
  type: string;
  id: number;
  newItem: TodoList;
};

export const todoListSelector = selector({
  key: "todoListSelector",
  get: ({ get }) => {
    const ids = get(idsAtom);
    return ids.map((id) => get(todoAtom(id)));
  },
  set: ({ get, set }, args: SetArgType) => {
    const ids = get(idsAtom);
    switch (args.type) {
      case "add":
        set(todoAtom(args.newItem.id), args.newItem);
        set(idsAtom, (ids: number[]) => [...ids, args.newItem.id]);
        break;
      case "delete":
        set(
          idsAtom,
          ids.filter((i) => i !== args.id)
        );
        set(todoAtom(args.id), null);
        break;
      case "update":
        set(todoAtom(args.id), args.newItem);
        break;
      default:
        break;
    }
  },
});
