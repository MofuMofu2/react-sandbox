import { useState } from "react";

export const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  return [
    // フォームの値とonChangeイベントハンドラを返す
    {
      value,
      onChange: (e: React.FormEvent) =>
        setValue((e.target as HTMLInputElement).value),
    },
    // フォームの値を初期化する関数を返す
    () => setValue(initialValue),
  ];
};
