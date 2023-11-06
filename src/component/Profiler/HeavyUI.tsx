import React from "react";

interface HeavyUIProps {
  delay: number;
}

const sleep = (delay: number) => {
  const start = Date.now();
  while (Date.now() - start < delay);
};

export default function HeavyUI(props: HeavyUIProps) {
  sleep(props.delay);
  return <p>遅延時間は{props.delay}ミリ秒</p>;
}
