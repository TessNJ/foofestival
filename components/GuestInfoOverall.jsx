import React, { useState } from "react";
import GuestInfo from "./GuestInfo";

export default function GuestInfoOverall(props) {
  const nextSection = (event) => {
    event.preventDefault();
    props.getCurrentSection("infoConfirm");
  };
  const [guestList, setGuestList] = useState([]);

  const add = () => {
    setGuestList(guestList.concat(<GuestInfo key={guestList.length} />));
  };
  return (
    <article>
      <form action="#" className="guestDiv">
        <GuestInfo />
        {guestList}
      </form>
      <div>
        <button onClick={add}>Add Additional Guest</button>
        <button onClick={nextSection}>Go to Confirmation</button>
      </div>
    </article>
  );
}
