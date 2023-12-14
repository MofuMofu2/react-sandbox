import React, { useState } from "react";

const sleep = (delay: number) => {
  const start = Date.now();
  while (Date.now() - start < delay);
};

export default function HookMemo() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const decrement = () => {
    setCount2((c) => c - 1);
  };

  const heavyFunction = () => {
    sleep(3000);
    return count;
  };

  return (
    <div>
      <h1>Hook Memo</h1>
      <button onClick={decrement}>-</button>
      <span>{count2}</span>
      <button onClick={increment}>+</button>
      <span>{count}</span>
    </div>
  );
}
