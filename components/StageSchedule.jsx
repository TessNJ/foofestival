import React from "react";
import BandArticle from "./BandArticle";

export default function StageSchedule({ title, data }) {
  console.log(data);

  return (
    <>
      <h2>Stage Name</h2>
      <article>
        <BandArticle />
        <BandArticle />
        <BandArticle />
        <BandArticle />
        <BandArticle />
        <BandArticle />
      </article>
    </>
  );
}
