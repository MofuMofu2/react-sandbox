import { useCallback, useSyncExternalStore, type SetStateAction } from "react";

export type TodoList = {
  id: number;
  title: string;
  isDone: boolean;
};

const defaultCounter = 0;
const defaultTodos: TodoList[] = [
  { id: 1, title: "Learn React", isDone: false },
  { id: 2, title: "Learn Recoil", isDone: false },
  { id: 3, title: "Learn Redux", isDone: false },
];

let counterState = defaultCounter;
let todoState = [...defaultTodos];

const listeners = new Set<() => void>();

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};

const emitChange = () => {
  listeners.forEach((listener) => {
    listener();
  });
};

const resolveNextState = <T>(value: SetStateAction<T>, currentValue: T): T =>
  typeof value === "function" ? (value as (prev: T) => T)(currentValue) : value;

export const getTodoLastId = (todos = todoState) =>
  todos.length > 0 ? todos[todos.length - 1].id : 0;

export const resetStore = () => {
  counterState = defaultCounter;
  todoState = [...defaultTodos];
  emitChange();
};

export const useCounterState = () => {
  const counter = useSyncExternalStore(
    subscribe,
    () => counterState,
    () => defaultCounter
  );

  const setCounter = useCallback((value: SetStateAction<number>) => {
    counterState = resolveNextState(value, counterState);
    emitChange();
  }, []);

  return [counter, setCounter] as const;
};

export const useTodoState = () => {
  const todos = useSyncExternalStore(
    subscribe,
    () => todoState,
    () => defaultTodos
  );

  const setTodos = useCallback((value: SetStateAction<TodoList[]>) => {
    todoState = resolveNextState(value, todoState);
    emitChange();
  }, []);

  return [todos, setTodos] as const;
};

export const getTodosSnapshot = () => todoState;
