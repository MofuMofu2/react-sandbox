import React from "react";
import Color, { type Colors } from "../Color";

type ColorListProps = {
  colors: Colors[];
  onRemove: (element: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function ColorList({ ...props }: ColorListProps) {
  return props.colors.length === 0 ? (
    <p>No Colors Listed. (Add a Color)</p>
  ) : (
    <div>
      {props.colors.map((color) => (
        <Color
          key={color.id}
          id={color.id}
          title={color.title}
          color={color.color}
          rating={color.rating}
          onRemove={() => {}}
        />
      ))}
    </div>
  );
}
