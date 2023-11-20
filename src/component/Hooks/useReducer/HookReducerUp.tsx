import React, { useReducer } from "react";

type HookReducerUpProps = {
  init: number;
};

type State = {
  count: number;
};

type Action = {
  type: "update" | "reset";
  step: number;
  init: number;
};

export default function HookReducerUp({ init }: HookReducerUpProps) {
  const [state, dispatch] = useReducer(
    (state: State, action: Action) => {
      switch (action.type) {
        case "update":
          return { count: state.count + action.step };
        case "reset":
          return { count: action.init };
      }
    },
    { count: init }
  );

  const handleUp = () => {
    dispatch({ type: "update", step: 1, init });
  };
  const handleDown = () => {
    dispatch({ type: "update", step: -1, init });
  };
  const handleReset = () => {
    dispatch({ type: "reset", step: 0, init: 0 });
  };

  return (
    <>
      <button onClick={handleUp}>カウントアップ</button>
      <button onClick={handleDown}>カウントダウン</button>
      <button onClick={handleReset}>リセット</button>
      <p>{state.count}回クリックされました</p>
    </>
  );
}
