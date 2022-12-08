import React from "react";

export default function ReservationInfo(props) {
  let verb = "people";
  function nextSec() {
    props.getCurrentSection("infoSelect");
  }
  if (props.aramInfo.amount === "1") {
    verb = "person";
  }
  return (
    <>
      <h5>
        For <span>{props.aramInfo.amount}</span> {verb}, at <span>{props.aramInfo.area}</span>
      </h5>
      <button onClick={nextSec}>Correct</button>
    </>
  );
}
