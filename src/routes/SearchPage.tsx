import React from "react";
import { useParams } from "react-router-dom";

export default function SearchParams() {
  const { "*": keywords } = useParams();
  return <p>検索ワード {keywords} のページです</p>;
}
