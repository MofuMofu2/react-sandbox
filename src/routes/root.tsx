import React, { useState } from "react";
import colorData from "../assets/color-data.json";
import ColorList from "../component/ColorList";
import AddColorForm from "../component/AddColorForm";
import { v4 } from "uuid";

export default function Root() {
  const [colors, setColors] = useState(colorData);

  const removeColor = (id: string) => {
    const newColors = colors.filter((color) => color.id !== id);
    setColors(newColors);
  };

  return (
    <>
      <AddColorForm
        onNewColor={(title, color) => {
          const newColors = [...colors, { id: v4(), rating: 0, title, color }];
          setColors(newColors);
        }}
      />
      <ColorList colors={colors} onRemoveColor={removeColor} />
    </>
  );
}
