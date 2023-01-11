import React, { useEffect, useState } from "react";
import DayInvidual from "./DayInvidual";

export default function DaySchedule({ data }) {
  return (
    <div className="actDiv">
      <DayInvidual title="Midgard" data={data.Midgard} />
      <DayInvidual title="Vanaheim" data={data.Vanaheim} />
      <DayInvidual title="Jotunheim" data={data.Jotunheim} />
    </div>
  );
}
