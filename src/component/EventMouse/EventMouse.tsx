import React, { useState } from "react";

import { faGrinStars } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function EventMouse() {
  const [current, setCurrent] = useState<"blue" | "red">("blue");
  const handleEnter = () => {
    setCurrent("red");
  };
  const handleLeave = () => {
    setCurrent("blue");
  };

  return (
    <>
      <div onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
        <FontAwesomeIcon
          icon={faGrinStars}
          color={current}
          title="happy-face"
        />
        ここに出るよ
        {current === "red" ? (
          <div>
            <a href="https://example.com/">example.com</a>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
