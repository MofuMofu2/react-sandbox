import React, { useRef } from "react";

export default function FormFile() {
  const file = useRef<HTMLInputElement | null>(null);

  function show() {
    // useRefで対象の要素の参照からファイル要素を取得する
    if (file.current) {
      const fs = file.current.files;
      console.log(fs);
    }
  }

  return (
    <form>
      <input type="file" ref={file} multiple />
      <button type="button" onClick={show}>
        送信
      </button>
    </form>
  );
}
