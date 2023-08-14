import React from "react";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function StarRating() {
  return (
    <>
      <FontAwesomeIcon icon={faStar} title="red" color="red" />
      <FontAwesomeIcon icon={faStar} title="red" color="red" />
      <FontAwesomeIcon icon={faStar} title="red" color="red" />
      <FontAwesomeIcon icon={faStar} title="grey" color="grey" />
      <FontAwesomeIcon icon={faStar} title="grey" color="grey" />
    </>
  );
}
