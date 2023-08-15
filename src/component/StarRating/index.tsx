import React from "react";
import Star from "../Star";
export default function StarRating({
  totalStars = 5,
  selectedStars = 3,
}): JSX.Element {
  return (
    <>
      {[...Array(totalStars)].map((n, i) => (
        <Star key={i} selected={selectedStars > i} onSelect={() => i + 1} />
      ))}
      <p>{`${selectedStars} of ${totalStars} Stars`}</p>
    </>
  );
}
