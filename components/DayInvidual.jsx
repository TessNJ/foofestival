import React, { useEffect, useState } from "react";
import BandArticle from "./BandArticle";

export default function DayInvidual({ title, data }) {
  let dayPath;
  const [currentAct, setCurrentAct] = useState(null);
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
        console.log("hi");
      }
    }
  }, [dataArray, time]);
  if (currentAct) {
    return (
      <article>
        <h2>{title}</h2>
        <BandArticle start={currentAct.start} end={currentAct.end} act={currentAct.act} />
      </article>
    );
  }
}
