import React from "react";

export default function GuestDisplay({ data }) {
  console.log(data[0].amount >= 2);
  let showNoShow = "hidden";
  if (data[0].amount >= 2) {
    showNoShow = "";
  }
  return (
    <div id="guestDisplays" className={showNoShow}>
      {/* <div> */}
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
