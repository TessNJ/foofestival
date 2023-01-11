import React from "react";
import BandArticle from "./BandArticle";
import StageDay from "./StageDay";

export default function StageSchedule({ title, data }) {
  return (
    <article>
      <h2>{title}</h2>
      <div className="horizDiv bigDiv">
        <StageDay title="Monday" data={data.mon} />
        <StageDay title="Tuesday" data={data.tue} />
        <StageDay title="Wednesday" data={data.wed} />
        <StageDay title="Thursday" data={data.thu} />
        <StageDay title="Friday" data={data.fri} />
        <StageDay title="Saturday" data={data.sat} />
        <StageDay title="Sunday" data={data.sun} />
      </div>
    </article>
  );
}
