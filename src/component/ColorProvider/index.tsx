import React, { useState, createContext, useContext } from "react";

import { v4 } from "uuid";

import colorData from "../../assets/color-data.json";
import { type Colors } from "../Color";

const ColorContext = createContext<any>(undefined);
export const useColors = () => useContext(ColorContext);

export default function ColorProvider({ children }: any) {
  const [colors, setColors] = useState<Colors[]>(colorData);
  const addColor = (title: string, color: string) => {
    setColors([
      ...colors,
      {
        id: v4(),
        rating: 0,
        title,
        color,
      },
    ]);
  };

  const rateColor = (id: string, rating: number) => {
    setColors(
      colors.map((color) => (color.id === id ? { ...color, rating } : color))
    );
  };

  const deleteColor = (id: string) => {
    setColors(colors.filter((color) => color.id !== id));
  };

  return (
    <ColorContext.Provider value={{ colors, addColor, rateColor, deleteColor }}>
      {children}
    </ColorContext.Provider>
  );
}
