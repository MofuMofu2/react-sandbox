import React from "react";
import { ColorContext } from "../..";
import Color, { Colors } from "../Color";
import { useColors } from "../ColorProvider";

export default function ColorList() {
  const colors = useColors();
  return colors.length === 0 ? (
    <p>No Colors Listed. (Add a Color)</p>
  ) : (
    <div>
      {colors.map((color: Colors) => (
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
