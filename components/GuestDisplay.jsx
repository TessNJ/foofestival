import React from "react";

export default function GuestDisplay({ data }) {
  //   console.log(data[2].map());

  return (
    <div>
      <h5>Guest info</h5>
      <ul>
        {data[2].map((e, index) => {
          return (
            <li key={index}>
              {e.name}, {e.email}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
