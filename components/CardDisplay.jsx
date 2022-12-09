import React from "react";

export default function CardDisplay({ data, cardDetails }) {
  let lastDigits = "****";
  let fullPrice = data[0].amount * data[1].type.typePrice;
  if (cardDetails) {
    lastDigits = cardDetails.cardNo.slice(-5);
  }
  console.log(data[0].amount, data[1].type.typePrice);
  return (
    <div>
      <p>Card ending with {lastDigits}</p>
      <p>Price: {fullPrice},- DKK</p>
    </div>
  );
}
