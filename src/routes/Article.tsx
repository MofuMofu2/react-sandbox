import React from "react";
import { useParams } from "react-router-dom";
import { NameContext } from "./RouterApp";
import ChangeIcon from "../component/ChangeIcon";

export default function Article() {
  const nameContext = React.useContext(NameContext);
  const { id = 0 } = useParams();
  if (nameContext === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }

  const { name } = nameContext;

  return (
    <>
      <h1>Article</h1>
      <p>id: {id}</p>
      <p>{name.length === 0 ? "最初" : name}のページです</p>
      <ChangeIcon />
    </>
  );
}
