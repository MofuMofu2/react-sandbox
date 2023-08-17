import React from "react";
import StarRating from "../StarRating";

export type Colors = {
  id: string;
  title: string;
  color: string;
  rating: number;
};

type ColorProps = {
  onRemove: (element: React.MouseEvent<HTMLButtonElement>) => void;
} & Colors;

export default function Color({ ...props }: ColorProps) {
  return (
    <section>
      <h1>{props.title}</h1>
      <button
        onClick={(element) => {
          props.onRemove(element);
        }}
      >
        remove
      </button>
      <div style={{ height: 50, backgroundColor: props.color }}></div>
      <StarRating selectedStars={props.rating} />
    </section>
  );
}
