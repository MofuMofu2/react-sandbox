import React from "react";

type ArticleProps = {
  id: string;
};

export default function Article({ ...props }: ArticleProps) {
  return <div>{props.id} のページです</div>;
}
