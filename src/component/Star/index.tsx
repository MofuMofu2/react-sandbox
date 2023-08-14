import React from "react";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type StarProps = {
  selected?: boolean;
  onSelect: () => void;
};

export default function Star({
  selected = false,
  ...props
}: StarProps): JSX.Element {
  return (
    <button onClick={props.onSelect}>
      <FontAwesomeIcon
        icon={faStar}
        color={selected ? "red" : "grey"}
        title={selected ? "red" : "grey"}
      />
    </button>
  );
}
