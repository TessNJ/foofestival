import React, { useState, useEffect } from "react";
import HeadInfo from "../components/Head";
import DaySchedule from "../components/DaySchedule";
import StageSchedule from "../components/StageSchedule";

export default function Schedule({ data }) {
  return (
    <>
      <HeadInfo title="Schedule">This is currently unavailable</HeadInfo>
      <main className="scheduleMain">
        <h1>Schedules</h1>
        <section>
          <StageSchedule title="Midgard" data={data.Midgard} />
          <StageSchedule title="Vanaheim" data={data.Vanaheim} />
          <StageSchedule title="Jotunheim" data={data.Jotunheim} />
        </section>
        <DaySchedule data={data} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:8080/schedule");
  // const res = await fetch("https://fooapi.fly.dev/schedule");

  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
}
