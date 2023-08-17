import React from "react";
import StarRating from "../StarRating";

type ColorProps = {
  id: string;
  title: string;
  color: string;
  rating: number;
  onRemove: (element: React.MouseEvent<HTMLButtonElement>) => void;
};

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
