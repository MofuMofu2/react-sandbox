import React, { Suspense, useEffect, useState } from "react";

function PromiseComponent() {
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFlag(true);
    }, 3000);
  }, []);

  return <p>{flag ? "正しく表示できました" : "まだです"}</p>;
}

export default function SuspenseSimple() {
  return (
    <Suspense fallback={<p>loading</p>}>
      <PromiseComponent />
    </Suspense>
  );
}
