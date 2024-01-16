import React from "react";
import { useParams } from "react-router-dom";

export default function Article() {
  const { id = "最初" } = useParams();
  return <div>{id}のページです</div>;
}
