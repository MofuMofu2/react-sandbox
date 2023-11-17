import React, { useState, useRef } from "react";

export default function HookRefNg() {
  const [count, setCount] = useState(0);
  const idRef = useRef<NodeJS.Timer | null>(null);

  const handleStart = () => {
    if (idRef.current === null) {
      idRef.current = setInterval(() => {
        setCount((c) => c + 1);
      }, 1000);
    }
  };

  const handleEnd = () => {
    if (idRef.current !== null) {
      clearInterval(idRef.current);
      idRef.current = null;
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
