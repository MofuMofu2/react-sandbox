import React, { useReducer } from "react";

function initCounter(init: number) {
  console.info("counterが呼ばれたよ");
  return {
    count: Math.floor(Math.random() * init + 1),
  };
}

type HookReducerInitProps = {
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

export default function HookReducerInit({ init }: HookReducerInitProps) {
  const [state, dispatch] = useReducer(
    (state: State, action: Action) => {
      switch (action.type) {
        case "update":
          return { count: state.count + action.step };
        case "reset":
          return { count: action.init };
      }
    },
    init,
    initCounter
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
