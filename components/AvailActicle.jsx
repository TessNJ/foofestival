import React from "react";

export default function AvailActicle(props) {
  console.log(props.availSpots);
  let buttonClass = props.availSpots === 0 ? "disabled" : "";
  return (
    <article>
      <div>
        <h1>{props.title}</h1>
        <p>All Spots: {props.allSpots}</p>
        <h3>Available Spots: {props.availSpots}</h3>
      </div>
      <button className={buttonClass}>Select</button>
    </article>
  );
}
