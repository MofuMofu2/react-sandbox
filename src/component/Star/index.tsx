import React from "react";

import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface StarProps {
  selected?: boolean;
  onSelect: () => void;
}

export default function Star({
  selected = false,
  ...props
}: StarProps): React.ReactElement {
  return (
    <button onClick={props.onSelect}>
      <FontAwesomeIcon
        icon={faStar}
        color={selected ? "red" : "grey"}
        className=""
        title={selected ? "red" : "grey"}
      />
    </button>
  );
}
