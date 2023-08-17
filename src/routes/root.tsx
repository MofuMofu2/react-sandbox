import React, { useState } from "react";
import colorData from "../assets/color-data.json";
import ColorList from "../component/ColorList";
export default function Root() {
  const [colors, setColors] = useState(colorData);

  const removeColor = (id: string) => {
    const newColors = colors.filter((color) => color.id !== id);
    setColors(newColors);
  };

  return (
    <>
      <ColorList colors={colors} onRemoveColor={removeColor} />
    </>
  );
}
