import React from "react";
import { putReservation } from "../modules/reserve";

export default function ReservationInfo(props) {
  let verb = "people";
  async function nextSec() {
    const response = await putReservation({
      area: props.aramInfo.area,
      amount: props.aramInfo.amount,
    });
    console.log(response.length);
    if (response) {
      props.recieveStatus({ id: response.id });
      console.log(response.id);
      props.getCurrentSection("infoSelect");
    }
  }
  if (props.aramInfo.amount === "1") {
    verb = "person";
  }
  return (
    <div className="reserveDiv">
      <div>
        <p>Please confirm the following information is correct. Afterwards you will have 5 minuts to complete the reservation:</p>
        <p>
          <span className="textImportant">{props.aramInfo.amount}</span> {verb}, at <span className="textImportant">{props.aramInfo.area}</span>
        </p>
      </div>

      <button onClick={nextSec}>Correct</button>
    </div>
  );
}
