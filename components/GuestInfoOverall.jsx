import React, { useState } from "react";
import GuestInfo from "./GuestInfo";

export default function GuestInfoOverall(props) {
  function nextSection() {
    console.log("next");
  }

  const [guestList, setGuestList] = useState([]);

  const guest = () => {
    return <GuestInfo />;
  };
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
