import React, { useReducer } from "react";

type HookReducerProps = {
  init: number;
};

type State = {
  count: number;
};

type Action = {
  type: "update";
};

export default function HookReducer({ init }: HookReducerProps) {
  const [state, dispatch] = useReducer(
    (state: State, action: Action) => {
      switch (action.type) {
        case "update":
          return { count: state.count + 1 };
        default:
          return state;
      }
    },
    { count: init }
  );

  const handleClick = () => {
    dispatch({ type: "update" });
  };

  return (
    <>
      <button onClick={handleClick}>Count</button>
      <p>{state.count}回クリックされました</p>
    </>
  );
}
