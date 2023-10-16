import React, { useRef } from "react";

export default function StateFormUC() {
  const name = useRef(null);
  const age = useRef(null);

  return (
    <form>
      <div>
        <label htmlFor="name">名前</label>
        <input id="name" name="name" type="text" ref={name} />
      </div>
      <div>
        <label htmlFor="age">名前</label>
        <input id="age" name="age" type="text" ref={age} />
      </div>
      <p>
        こんにちは、{name !== null ? `${name}` : `名前を入力してください`}{" "}
        {`${age} 歳`}さん！
      </p>
    </form>
  );
}
