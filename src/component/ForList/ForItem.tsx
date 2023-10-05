import React from "react";
import { BookSrc } from "./ForList";

type ForItemProps = {
  book: BookSrc;
};

export default function ForItem({ book }: ForItemProps) {
  return (
    <>
      <dt>
        <a href={`https://wings.msn.to/books/${book.isbn}/${book.isbn}.jpg`}>
          {book.title} ({book.price}円)
        </a>
      </dt>
      <dd>{book.summary}</dd>
    </>
  );
}
