import React from "react";

export default function ReservationInfo(props) {
  function nextSec() {
    console.log("hi");
    props.getCurrentSection("infoSelect");
  }
  if (props.aramInfo.amount === "1") {
    return (
      <>
        <h5>
          For <span>{props.aramInfo.amount}</span> person, at <span>{props.aramInfo.area}</span>
        </h5>
        <button onClick={nextSec}>Correct</button>
      </>
    );
  } else {
    return (
      <>
        <h5>
          For <span>{props.aramInfo.amount}</span> people, at <span>{props.aramInfo.area}</span>
        </h5>
        <button onClick={nextSec}>Correct</button>
      </>
    );
  }
}
