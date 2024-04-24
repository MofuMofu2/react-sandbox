import React from "react";

export default function Color() {
  const [color, setColor] = React.useState<string>("#000000");

  return (
    <>
      <section>
        <h2>色を選ぶ</h2>
        <input
          type="text"
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
          }}
        />
      </section>
      <section>
        <h2>選んだ色</h2>
        <span>{color}</span>
        <div
          style={{ height: 50, backgroundColor: color }}
          data-testid="render-color"
        />
      </section>
    </>
  );
}
