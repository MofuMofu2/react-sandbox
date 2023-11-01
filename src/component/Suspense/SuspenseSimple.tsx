import React, { Suspense, useState } from "react";

function PromiseComponent() {
  const [flag, setFlag] = useState(false);
  if (flag) {
    return <p>正しく表示できました</p>;
  }

  throw new Promise((resolve, reject) => {
    setTimeout(() => {
      setFlag(true);
      resolve("Success");
    }, 3000);
  });
}

export default function SuspenseSimple() {
  return (
    <Suspense fallback={<p>loading</p>}>
      <PromiseComponent />
    </Suspense>
  );
}
