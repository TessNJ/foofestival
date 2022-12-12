import { IMAGES_MANIFEST } from "next/dist/shared/lib/constants";
import React, { useEffect, useState } from "react";

export default function CardDisplay({ data }) {
  let parking = 0;
  let backStage = 0;
  let green = 0;
  let tent = 0;
  // let fullPrice = data[0].amount * data[1].type.typePrice;
  // const [fullPrice, setFullPrice] = useState(99 + data[0].amount * data[1].type.typePrice);
  if (data[1].extras.parking) {
    parking = 199;
  }
  if (data[1].extras.backstage) {
    backStage = 299;
  }
  if (data[1].extras.green) {
    green = 249;
  }
  if (data[1].tent) {
    tent = 99 + data[0].amount * 100;
  }
  useEffect(() => {
    if (data[1].extras.parking) {
      document.querySelector(`#priceInfo .parking`).classList.remove("hidden");
    }
    if (data[1].extras.backstage) {
      document.querySelector(`#priceInfo .backstage`).classList.remove("hidden");
    }
    if (data[1].extras.green) {
      document.querySelector(`#priceInfo .green`).classList.remove("hidden");
    }
    if (data[1].tent) {
      document.querySelector(`#priceInfo .tent`).classList.remove("hidden");
    }
  }, [data]);
  return (
    <div id="priceInfo">
      <ul>
        <li>Booking Fee - 99,- dkk</li>
        <li>
          {data[1].type.typeName} - {data[0].amount} x {data[1].type.typePrice}
        </li>
        <li className="parking hidden">Parking - +199,-</li>
        <li className="backstage hidden">Backstage - +299,-</li>
        <li className="green hidden">Green - +249,-</li>
        <li className="tent hidden">
          {data[0].amount}-Person Tent Setup - {99 + data[0].amount * 100},-
        </li>
      </ul>
      <p>Price: {99 + data[0].amount * data[1].type.typePrice + parking + backStage + green + tent},- DKK</p>
    </div>
  );
}
