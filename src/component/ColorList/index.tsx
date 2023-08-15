import React from "react";
import Color from "../Color";

type Colors = {
  id: string;
  title: string;
  color: string;
  rating: number;
};

type ColorListProps = {
  colors: Colors[];
};

export default function ColorList({ ...props }: ColorListProps) {
  return props.colors.length === 0 ? (
    <p>No Colors Listed. (Add a Color)</p>
  ) : (
    <div>
      {props.colors.map((color) => (
        <Color
          key={color.id}
          title={color.title}
          color={color.color}
          rating={color.rating}
        />
      ))}
    </div>
  );
}
