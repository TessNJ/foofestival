import React, { useState, useEffect } from "react";
import HeadInfo from "../components/Head";
import DaySchedule from "../components/DaySchedule";
import StageSchedule from "../components/StageSchedule";
import BandInfo from "../components/BandInfo";

export default function Schedule({ data, bands }) {
  console.log(bands);
  return (
    <>
      <HeadInfo title="Schedule">This is currently unavailable</HeadInfo>
      <main className="scheduleMain">
        <section>
          <h1>Bands</h1>
          <section>
            {bands.map((element, index) => {
              return <BandInfo key={index} data={element} />;
            })}
          </section>
        </section>
        <section>
          <h1>Schedules</h1>
          <DaySchedule data={data} />
          <section>
            <StageSchedule title="Midgard" data={data.Midgard} />
            <StageSchedule title="Vanaheim" data={data.Vanaheim} />
            <StageSchedule title="Jotunheim" data={data.Jotunheim} />
          </section>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:8080/schedule");
  // const res = await fetch("https://fooapi.fly.dev/schedule");
  const res2 = await fetch("http://localhost:8080/bands");
  // const res2 = await fetch("https://fooapi.fly.dev/bands");

  const data = await res.json();
  const bands = await res2.json();

  return {
    props: {
      data: data,
      bands: bands,
    },
  };
}
