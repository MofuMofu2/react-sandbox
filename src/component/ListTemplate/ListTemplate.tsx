import React from "react";
import { BookSrc } from "../ForList/ForList";

type ListTemplateProps = {
  children: JSX.Element;
  src: BookSrc[];
};

export default function ListTemplate({ src, children }: ListTemplateProps) {
  return (
    <dl>
      {src.map((element) => (
        <React.Fragment key={element.isbn}>{children}</React.Fragment>
      ))}
    </dl>
  );
}
