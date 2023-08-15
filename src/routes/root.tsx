import React, { useState } from "react";
import colorData from "../assets/color-data.json";
import ColorList from "../component/ColorList";
import StarRating from "../component/StarRating";
export default function Root() {
  const [colors] = useState(colorData);
  return (
    <p>
      <ColorList colors={colors} />
    </p>
  );
}
