import React from "react";
import { faMusic, faImage, faTent } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ChangeIcon() {
  return (
    <section>
      <h2>アイコンを選ぶ</h2>
      <div className="icon">
        <FontAwesomeIcon icon={faMusic} />
        <FontAwesomeIcon icon={faImage} />
        <FontAwesomeIcon icon={faTent} />
      </div>
    </section>
  );
}
