import React from "react";

const sleep = (delay: number) => {
  let start = Date.now();
  while (Date.now() - start < delay);
};

export default function HeavyUI(delay: number) {
  sleep(delay);
  return <p>遅延時間は{delay}ミリ秒</p>;
}
