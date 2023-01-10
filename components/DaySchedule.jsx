import React, { useEffect, useState } from "react";
import DayInvidual from "./DayInvidual";

export default function DaySchedule({ data }) {
  return (
    <section>
      <h2>Currently</h2>
      <DayInvidual title="Midgard" data={data.Midgard} />
      <DayInvidual title="Vanaheim" data={data.Vanaheim} />
      <DayInvidual title="Jotunheim" data={data.Jotunheim} />
    </section>
  );
}
