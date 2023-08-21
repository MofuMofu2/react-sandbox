import React, { useContext } from "react";
import { ColorContext } from "../..";
import Color from "../Color";

export default function ColorList() {
  const colors = useContext(ColorContext);

  return colors.length === 0 ? (
    <p>No Colors Listed. (Add a Color)</p>
  ) : (
    <div>
      {colors.map((color) => (
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
