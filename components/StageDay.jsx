import React from "react";
import BandArticle from "./BandArticle";
export default function StageDay({ title, data }) {
  return (
    <article className="">
      <h4>{title}</h4>
      <div className="horizDiv">
        {data.map((e, index) => {
          return <BandArticle key={index} start={e.start} end={e.end} act={e.act} />;
        })}
      </div>
    </article>
  );
}
