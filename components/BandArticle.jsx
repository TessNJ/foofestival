import React from "react";

export default function BandArticle({ start, end, act }) {
  return (
    <article>
      <h4>{act}</h4>
      <p>{start}</p>
      <p>{end}</p>
    </article>
  );
}
