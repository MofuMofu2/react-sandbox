import React from "react";
import { getAllByTitle, render } from "@testing-library/react";
import StarRating from "./";
it("星がレンダリングされている", () => {
  const screen = render(<StarRating />);
  const stars = getAllByTitle(screen.container, "red");
  expect(stars).toHaveLength(3);

  const greyStars = getAllByTitle(screen.container, "grey");
  expect(greyStars).toHaveLength(2);
});
