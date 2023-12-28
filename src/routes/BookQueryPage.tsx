import React, { useEffect } from "react";
import { useLocation, useOutletContext } from "react-router-dom";

type UseOutletContextType = () => [
  unknown,
  (update: (c: number) => number) => void,
];
// 型を明示的に指定
const useOutletContextTyped: UseOutletContextType = useOutletContext;

export default function BookQueryPage() {
  const [, setCount] = useOutletContextTyped();
  useEffect(() => {
    setCount((c) => c + 1);
  }, [setCount]);
  const { state: isbn = "978-4-8156-0182-5" } = useLocation();
  return <p> ISBNコード {isbn} のページです</p>;
}
