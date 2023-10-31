import React, { Suspense } from "react";

function throwPromise() {
  throw new Promise((resolve, reject) => {});
}

function PromiseComponent() {
  throwPromise();
  return null;
}

export default function SuspenseSimple() {
  return (
    <Suspense fallback={<p>loading</p>}>
      <PromiseComponent />
    </Suspense>
  );
}
