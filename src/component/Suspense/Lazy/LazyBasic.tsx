import React, { Suspense, lazy } from "react";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const LazyButton = lazy(() => sleep(2000).then(() => import("../../Star")));
const LazyText = lazy(() =>
  sleep(2000).then(() => import("../../MyHello/MyHello"))
);

export default function LazyBasic() {
  return (
    <Suspense fallback={<p>This is fallback.</p>}>
      <LazyButton onSelect={() => {}} />
      <LazyText myName="mofu" />
    </Suspense>
  );
}
