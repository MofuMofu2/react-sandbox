import React from "react";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function StarRating() {
  return (
    <>
      <FontAwesomeIcon icon={faStar} title="rate" color="red" />
      <FontAwesomeIcon icon={faStar} title="rate" color="red" />
      <FontAwesomeIcon icon={faStar} title="rate" color="red" />
      <FontAwesomeIcon icon={faStar} title="rate" color="grey" />
      <FontAwesomeIcon icon={faStar} title="rate" color="grey" />
    </>
  );
}
