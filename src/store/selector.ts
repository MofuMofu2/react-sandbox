import { getTodoLastId, useTodoState } from "./atom";

export const useTodoLastId = () => {
  const [todos] = useTodoState();
  return getTodoLastId(todos);
};

export const todoLastIdSelector = getTodoLastId;
