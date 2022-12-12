import React, { useEffect } from "react";

export default function Extras({ data, title }) {
  useEffect(() => {
    if (data[1].extras.parking) {
      document.querySelector(`#${title} .parking`).classList.remove("hidden");
    }
    if (data[1].extras.backstage) {
      document.querySelector(`#${title} .backstage`).classList.remove("hidden");
    }
    if (data[1].extras.green) {
      document.querySelector(`#${title} .green`).classList.remove("hidden");
    }
    if (!data[1].extras.backstage && !data[1].extras.parking && !data[1].extras.green) {
      document.querySelector(`#${title} .none`).classList.remove("hidden");
    }
  }, [data, title]);
  return (
    <div id={title}>
      <h5>Extras:</h5>
      <ul>
        <li className="parking hidden">Parking</li>
        <li className="backstage hidden">Backstage</li>
        <li className="green hidden">Backstage</li>
        <li className="none textItalic hidden">None selected</li>
      </ul>
    </div>
  );
}
