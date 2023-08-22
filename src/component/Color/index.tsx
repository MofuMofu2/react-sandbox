import React from "react";
import StarRating from "../StarRating";
import { useColors } from "../ColorProvider";

export type Colors = {
  id: string;
  title: string;
  color: string;
  rating: number;
};

export default function Color({ id, title, color, rating }: Colors) {
  const { rateColor, removeColor } = useColors();
  return (
    <section>
      <h1>{title}</h1>
      <button
        onClick={() => {
          removeColor(id);
        }}
      >
        remove
      </button>
      <div style={{ height: 50, backgroundColor: color }}></div>
      <StarRating selectedStars={rating} />
    </section>
  );
}
