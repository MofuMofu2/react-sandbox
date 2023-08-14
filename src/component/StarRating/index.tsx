import React from "react";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Star from "../Star";
export default function StarRating({ totalStars = 5 }): JSX.Element {
  return (
    <>
      {[...Array(totalStars)].map((n, i) => (
        <Star key={i} />
      ))}
    </>
  );
}
