import React, { useRef } from "react";
import Image from "next/image";

export default function AvailActicle(props) {
  const inputRef = useRef(null);
  let buttonClass = props.availSpots === 0 ? "disabled" : "";
  const info = (event) => {
    event.preventDefault();
    if (inputRef.current.value != 0 || "") {
      props.getAramInfo({
        area: props.title,
        amount: inputRef.current.value,
      });
      props.getCurrentSection("infoReserve");
    }
  };
  return (
    <article>
      <div>
        <div className="areaImage">
          <Image src={`/${props.title}.svg`} width={"25"} height={"25"} alt=""></Image>
          <h2>{props.title}</h2>
        </div>
        <h3>Available Spots: {props.availSpots}</h3>

        <p>All Spots: {props.allSpots}</p>
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
