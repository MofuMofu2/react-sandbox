import { useState } from "react";

interface StateBasicProps {
  init: number;
}

export default function StateBasic({ init }: StateBasicProps) {
  const [count, setCount] = useState(init);
  const handleClick = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <button onClick={handleClick}>カウント</button>
      <button onClick={reset}>リセット</button>
      <p>{count}回クリックされました。</p>
    </div>
  );
}
