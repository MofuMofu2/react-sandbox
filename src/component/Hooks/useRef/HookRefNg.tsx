import React, { useState } from "react";

export default function HookRefNg() {
  const [count, setCount] = useState(0);
  let id: NodeJS.Timer | null = null;

  const handleStart = () => {
    if (id !== null) {
      return;
    }
    id = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
  };

  const handleEnd = () => {
    if (id !== null) {
      clearInterval(id);
      id = null;
    }
  };

  return (
    <>
      <button onClick={handleStart}> 開始 </button>
      <button onClick={handleEnd}>終了</button>
      <p>{count}秒経過</p>
    </>
  );
}
