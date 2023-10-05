import React from "react";
import ForItem from "./ForItem";
type ForListProps = {
  src: BookSrc[];
};

export type BookSrc = {
  isbn: string;
  title: string;
  price: number;
  summary: string;
  download: boolean;
};

export default function ForList({ src }: ForListProps) {
  const lowPrice = src.filter((book) => book.price < 3500);
  return (
    <dl>
      {lowPrice.map((element) => (
        <ForItem book={element} key={element.isbn} />
      ))}
    </dl>
  );
}
