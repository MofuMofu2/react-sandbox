import React from "react";

import StarRating from "../StarRating";

export interface Colors {
  id: string;
  title: string;
  color: string;
  rating: number;
}

export default function Color({ id, title, color, rating }: Colors) {
  return (
    <section>
      <h1>{title}</h1>
      <span>色を選ぶ</span>
      <div style={{ height: 50, backgroundColor: color }}></div>
      <StarRating selectedStars={rating} />
    </section>
  );
}
