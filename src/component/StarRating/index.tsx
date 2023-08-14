import React, { useState } from "react";
import Star from "../Star";
export default function StarRating({ totalStars = 5 }): JSX.Element {
  const [selectedStars] = useState(3);
  return (
    <>
      {[...Array(totalStars)].map((n, i) => (
        <Star key={i} selected={selectedStars > i} />
      ))}
    </>
  );
}
