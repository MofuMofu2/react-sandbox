import React from "react";

import Color, { type Colors } from "../Color";
import { useColors } from "../ColorProvider";

export default function ColorList() {
  const colorInfo = useColors();

  return colorInfo.colors.length === 0 ? (
    <p>No Colors Listed. (Add a Color)</p>
  ) : (
    <div>
      {colorInfo.colors.map((color: Colors) => (
        <Color
          key={color.id}
          id={color.id}
          title={color.title}
          color={color.color}
          rating={color.rating}
        />
      ))}
    </div>
  );
}
