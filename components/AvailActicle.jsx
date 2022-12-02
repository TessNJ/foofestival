import React, { useRef } from "react";

export default function AvailActicle(props) {
  const inputRef = useRef(null);
  let buttonClass = props.availSpots === 0 ? "disabled" : "";
  const info = (event) => {
    event.preventDefault;
    if (inputRef.current.value != 0 || "")
      props.getAramInfo({
        area: props.title,
        amount: inputRef.current.value,
      });
  };
  return (
    <article>
      <div>
        <h1>{props.title}</h1>
        <p>All Spots: {props.allSpots}</p>
        <h3>Available Spots: {props.availSpots}</h3>
      </div>
      <form action="#">
        <label htmlFor="ticket_amount">Choose Ticket Amount</label>
        <input ref={inputRef} type="number" name="ticket_amount" id="ticket_amount" pattern="[0-9]*" inputMode="numeric" />
      </form>
      <button onClick={info} className={buttonClass}>
        Select
      </button>
    </article>
  );
}
