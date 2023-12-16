import React, { Profiler } from "react";

import HeavyUI from "./HeavyUI";

export default function ProfilerBasic() {
  const handleMeasure = (
    id: string,
    phase: string,
    actualDuration: number,
    baseDuration: number,
    startTime: number,
    endTime: number
  ) => {
    console.info({ id });
    console.info({ phase });
    console.info({ actualDuration });
    console.info({ baseDuration });
    console.info({ startTime });
    console.info({ endTime });
  };

  return (
    <Profiler id="heavy" onRender={handleMeasure}>
      <HeavyUI delay={1500} />
      <HeavyUI delay={500} />
      <HeavyUI delay={2000} />
    </Profiler>
  );
}
