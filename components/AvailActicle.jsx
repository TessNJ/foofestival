import React, { useRef } from "react";
import Image from "next/image";

export default function AvailActicle(props) {
  const inputRef = useRef(null);
  const pRef = useRef(null);
  let buttonClass = props.availSpots < 1 ? "disabled" : "";
  const info = (event) => {
    event.preventDefault();
    if ((inputRef.current.value >= 1 || "") && inputRef.current.value <= props.availSpots) {
      props.getAramInfo({
        area: props.title,
        amount: inputRef.current.value,
      });
      props.getCurrentSection("infoReserve");
      pRef.current.classList.add("hidden");
    } else {
      pRef.current.classList.remove("hidden");
    }
  };
  return (
    <article>
      <div>
        <div className="areaImage">
          <Image src={`/${props.title}.svg`} width={"25"} height={"25"} alt=""></Image>
          <h3>{props.title}</h3>
        </div>
        <h5>Available Spots: {props.availSpots > 0 ? props.availSpots : 0}</h5>

        <p>All Spots: {props.allSpots}</p>
      </div>
      <form action="#" className="form-group">
        <label htmlFor="ticket_amount">Choose Ticket Amount</label>
        <input ref={inputRef} type="number" name="ticket_amount" id={`ticket_amount-${props.title}`} pattern="[0-9]*" inputMode="numeric" />
        <p ref={pRef} className="hidden">
          Invalid
        </p>
      </form>
      <button onClick={info} className={buttonClass}>
        Select
      </button>
    </article>
  );
}
