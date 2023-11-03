import React from "react";

type HeavyUIProps = {
  delay: number;
};

const sleep = (delay: number) => {
  let start = Date.now();
  while (Date.now() - start < delay);
};

export default function HeavyUI(props: HeavyUIProps) {
  sleep(props.delay);
  return <p>遅延時間は{props.delay}ミリ秒</p>;
}
