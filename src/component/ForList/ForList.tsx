import React, { Fragment } from "react";
type ForListProps = {
  src: BookSrc[];
};

type BookSrc = {
  isbn: string;
  title: string;
  price: number;
  summary: string;
  download: boolean;
};

export default function ForList({ src }: ForListProps) {
  return (
    <dl>
      {src.map((element) => (
        <Fragment key={element.isbn}>
          <dt>
            <a
              href={`https://wings.msn.to/books/${element.isbn}/${element.isbn}.jpg`}
            >
              {element.title} ({element.price}円)
            </a>
          </dt>
          <dd>{element.summary}</dd>
        </Fragment>
      ))}
    </dl>
  );
}
