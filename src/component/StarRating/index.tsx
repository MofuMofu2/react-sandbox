import React from "react";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type StarRatingProps = {
  color: "red" | "blue" | "yellow";
  count: number;
};

export default function StarRating({
  color = "red",
  count = 3,
}: StarRatingProps): JSX.Element {
  return (
    <>
      {[...Array(count)].map((n, i) => (
        <FontAwesomeIcon key={i} icon={faStar} color={color} title="star" />
      ))}
      <p>{`星の数は${count}個です`}</p>
    </>
  );
}
