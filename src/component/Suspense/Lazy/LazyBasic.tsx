import React, { Suspense, lazy } from "react";

const sleep = async (ms: number) =>
  await new Promise((resolve) => setTimeout(resolve, ms));

const LazyButton = lazy(
  async () => await sleep(2000).then(async () => await import("../../Star"))
);
const LazyText = lazy(
  async () =>
    await sleep(2000).then(async () => await import("../../MyHello/MyHello"))
);

export default function LazyBasic() {
  return (
    <Suspense fallback={<p>This is fallback.</p>}>
      <LazyButton onSelect={() => {}} />
      <LazyText myName="mofu" />
    </Suspense>
  );
}
