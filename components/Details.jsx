import React from "react";

export default function Details({ data }) {
  console.log(data[0].area);
  let verb = "people";
  if (data[0].amount === "1") {
    verb = "person";
  }
  return (
    <article>
      <h5>Basic Details:</h5>
      <p>
        {data[0].area} for {data[0].amount} {verb}
      </p>
      <p>
        {data[1].type.typeName} - {data[1].type.typePrice},- x {data[0].amount}
      </p>
    </article>
  );
}
