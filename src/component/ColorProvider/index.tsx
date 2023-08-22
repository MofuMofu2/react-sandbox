import React, { createContext, useState } from "react";
import colorData from "../../assets/color-data.json";

export const ColorContext = createContext();

export default function ColorProvider({ children }: any) {
  const [colors, setColors] = useState(colorData);

  return (
    <ColorContext.Provider value={{ colors, setColors }}>
      {children}
    </ColorContext.Provider>
  );
}
