import React from "react";

import { useCounterState } from "../../store/atom";

export default function RecoilCounter() {
  const [counter, setCounter] = useCounterState();

  const handleClick = () => {
    setCounter((c) => c + 1);
  };

  return (
    <>
      <button onClick={handleClick}>カウント</button>
      <p>{counter}回クリックされました</p>
    </>
  );
}
