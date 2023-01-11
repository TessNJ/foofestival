import React, { useEffect, useState } from "react";
import BandArticle from "./BandArticle";

export default function DayInvidual({ title, data }) {
  let dayPath;
  const [currentAct, setCurrentAct] = useState(null);
  const [nextAct, setNextAct] = useState(null);
  const time = new Date().toLocaleTimeString().split(":");
  const day = new Date().toLocaleString("en-US", { weekday: "short" }).toLowerCase();
  const currentDay = Object.fromEntries(Object.entries(data).filter(([key]) => key === day));
  const dataArray = Object.values(currentDay)[0];

  useEffect(() => {
    for (let index = 0; index < dataArray.length; ++index) {
      const element = dataArray[index];
      const startTime = element.start.split(":");
      const endTime = element.end.split(":");
      if (parseInt(startTime[0]) <= parseInt(time[0]) && parseInt(time[0]) < parseInt(endTime[0])) {
        setCurrentAct(element);
      }
      const nextTime = parseInt(time[0]) + 2;
      if (parseInt(startTime[0]) <= nextTime && parseInt(time[0]) < nextTime) {
        setNextAct(element);
      }
    }
  }, [dataArray, time]);
  if (currentAct) {
    return (
      <article className="currentActDiv">
        <h2>{title}</h2>
        <section>
          <h4>Now</h4>
          <BandArticle start={currentAct.start} end={currentAct.end} act={currentAct.act} />
        </section>
        <section>
          <h4>Next</h4>
          <BandArticle start={nextAct.start} end={nextAct.end} act={nextAct.act} />
        </section>
      </article>
    );
  }
}
