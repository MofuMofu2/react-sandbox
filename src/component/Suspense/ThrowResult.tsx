import React, { useEffect, useState } from "react";

import { wrapPromise } from "./wrapPromise";

export default function ThrowResult() {
  const result = getInfo();
  return <p>{typeof result === "string" ? result : ""}</p>;
}

function getInfo() {
  return wrapPromise(
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve("rejected");
        } else {
          reject("error");
        }
      }, 2000);
    })
  );
}
