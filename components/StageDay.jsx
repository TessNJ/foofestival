import React from "react";
import BandArticle from "./BandArticle";
export default function StageDay({ title, data }) {
  return (
    <article>
      <h4>{title}</h4>
      <section>
        {data.map((e, index) => {
          return <BandArticle key={index} start={e.start} end={e.end} act={e.act} />;
        })}
      </section>
    </article>
  );
}
