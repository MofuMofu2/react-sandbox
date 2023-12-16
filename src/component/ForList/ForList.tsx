import React from "react";

import ForItem from "./ForItem";
interface ForListProps {
  src: BookSrc[];
}

export interface BookSrc {
  isbn: string;
  title: string;
  price: number;
  summary: string;
  download: boolean;
}

export default function ForList({ src }: ForListProps) {
  const lowPrice = src.sort((a, b) => a.price - b.price);
  return (
    <dl>
      {lowPrice.map((element) => (
        <ForItem book={element} key={element.isbn} />
      ))}
    </dl>
  );
}
