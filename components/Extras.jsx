import React, { useEffect } from "react";

export default function Extras({ data, title }) {
  let tentDevide = "";
  if (data[0].amount === 1 || data[0].amount === 2) {
    tentDevide = `1 x 2-person tent`;
  } else if (data[0].amount === 3) {
    tentDevide = `1 x 3-person tents`;
  } else if (data[0].amount % 2 == 0) {
    tentDevide = `${data[0].amount % 2} x 2-person tents`;
  } else {
    tentDevide = `${data[0].amount % 2} x 2-person tents and 1 x 3-person tent`;
  }
  useEffect(() => {
    if (data[1].tents) {
      document.querySelector(`#${title} .tents`).classList.remove("hidden");
    }
    if (data[1].extras.parking) {
      document.querySelector(`#${title} .parking`).classList.remove("hidden");
    }
    if (data[1].extras.backstage) {
      document.querySelector(`#${title} .backstage`).classList.remove("hidden");
    }
    if (data[1].extras.green) {
      document.querySelector(`#${title} .green`).classList.remove("hidden");
    }
    if (!data[1].tents && !data[1].extras.backstage && !data[1].extras.parking && !data[1].extras.green) {
      document.querySelector(`#${title} .none`).classList.remove("hidden");
    }
  }, [data, title]);
  return (
    <div id={title}>
      <h5>Optionals:</h5>
      <ul>
        <li className="tents hidden">Tent Rental and set-up: {tentDevide}</li>
        <li className="parking hidden">Parking</li>
        <li className="backstage hidden">Backstage</li>
        <li className="green hidden">Backstage</li>
        <li className="none textItalic hidden">None selected</li>
      </ul>
    </div>
  );
}
