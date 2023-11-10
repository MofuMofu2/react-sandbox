import React, { useEffect, useState } from "react";
import "./HookTimer.css";

type HookTimerProps = {
  init: number;
};

export default function HookTimer({ init }: HookTimerProps) {
  const [count, setCount] = useState(init);

  useEffect(() => {
    const t = setInterval(() => {
      setCount((c: number) => c - 1);
    }, 1000);
    return () => {
      clearInterval(t);
    };
  }, []);

  return <div className={count < 0 ? "warn" : ""}>現在のカウント{count}</div>;
}
