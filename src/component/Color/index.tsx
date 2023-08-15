import React from "react";
import StarRating from "../StarRating";

type ColorProps = {
  title: string;
  color: string;
  rating: number;
};

export default function Color({ ...props }: ColorProps) {
  return (
    <section>
      <h1>{props.title}</h1>
      <div style={{ height: 50, backgroundColor: props.color }}></div>
      <StarRating selectedStars={props.rating} />
    </section>
  );
}
