import React from "react";

export default function CardDisplay({ data, cardDetails }) {
  console.log(data);
  console.log(cardDetails);
  return (
    <article>
      <p>Card ending in ****</p>
      <p>Price</p>
    </article>
  );
}
