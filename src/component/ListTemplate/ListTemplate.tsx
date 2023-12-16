import React from "react";

import { type BookSrc } from "../ForList/ForList";

interface ListTemplateProps {
  children: (src: BookSrc) => JSX.Element;
  src: BookSrc[];
}

export default function ListTemplate({ src, children }: ListTemplateProps) {
  return (
    <dl>
      {src.map((element) => (
        <React.Fragment key={element.isbn}>{children(element)}</React.Fragment>
      ))}
    </dl>
  );
}
