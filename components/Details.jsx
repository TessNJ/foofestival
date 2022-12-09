import React from "react";

export default function Details({ data, title }) {
  let verb = "people";
  if (data[0].amount === "1") {
    verb = "person";
  }

  return (
    <article>
      <h4>{data[1].fullName}</h4>
      <p>{data[1].email}</p>
      <p>
        {data[1].address.street}, {data[1].address.city}, <span className="textItalic">{data[1].address.country}</span>
      </p>
      <h5>
        {data[0].area} for {data[0].amount} {verb}
      </h5>
      <p>
        {data[1].type.typeName} - {data[1].type.typePrice},- x {data[0].amount}
      </p>
    </article>
  );
}