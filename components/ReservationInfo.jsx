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
      <p>
        <span className="textImportant">{props.aramInfo.amount}</span> {verb}, at <span className="textImportant">{props.aramInfo.area}</span>
      </p>
      <button onClick={nextSec}>Correct</button>
    </>
  );
}
