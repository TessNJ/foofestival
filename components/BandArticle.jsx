import React from "react";

export default function BandArticle({ start, end, act }) {
  return (
    <article className="bandArticle">
      <h4>{act}</h4>
      <p>
        {start} - {end}
      </p>
    </article>
  );
}
