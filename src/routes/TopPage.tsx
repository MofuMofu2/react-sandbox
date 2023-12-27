import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

type UseOutletContextType = () => [
  unknown,
  (update: (c: number) => number) => void,
];
// 型を明示的に指定
const useOutletContextTyped: UseOutletContextType = useOutletContext;

export default function TopPage() {
  const [, setCount] = useOutletContextTyped();
  useEffect(() => {
    setCount((c) => c + 1);
  }, [setCount]);
  return <div>TopPage</div>;
}
