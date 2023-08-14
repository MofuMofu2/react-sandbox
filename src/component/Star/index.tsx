import React from "react";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Star({ selected = false }) {
  return (
    <FontAwesomeIcon
      icon={faStar}
      color={selected ? "red" : "grey"}
      title={selected ? "red" : "grey"}
    />
  );
}
