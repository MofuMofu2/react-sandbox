import React, { useEffect, useState } from "react";

type HookEffectProps = {
  init: number;
};

const sleep = (delay: number) => {
  const start = Date.now();
  while (true) {
    if (Date.now() - start > 1000) {
      break;
    }
  }
};

export default function HookEffect({ init }: HookEffectProps) {
  const [count, setCount] = useState(0);
  const [hoge, setHoge] = useState("hoge");

  useEffect(() => {
    sleep(2000);
    setCount(init);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <button
        onClick={() => {
          setHoge(Date.now().toString());
        }}
      >{`Hoge ${hoge}`}</button>
      <button onClick={handleClick}>カウント</button>
      <p>{`${count} 回クリックされた`}</p>
    </>
  );
}
