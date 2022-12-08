import React, { useState, useRef } from "react";
import GuestInfo from "./GuestInfo";

export default function GuestInfoOverall(props) {
  const formEl = useRef(null);
  const [guestList, setGuestList] = useState([]);

  const add = () => {
    setGuestList(guestList.concat(<GuestInfo key={guestList.length} />));
  };
  const nextSection = (event) => {
    let guestConcat = [];
    event.preventDefault();
    const formLength = formEl.current.children.length;
    for (let i = 0; i < formLength; i++) {
      guestConcat.push({
        name: formEl.current.children[i].children[0].children[0].value,
        email: formEl.current.children[i].children[1].children[0].value,
      });
    }
    if (guestConcat.length != 0) {
      props.getGuestInfo(guestConcat);
      setTimeout(props.getCurrentSection("infoConfirm"), 1000);
    } else {
      console.log("at least 1");
    }
  };
  return (
    <article>
      <form action="#" className="guestDiv" ref={formEl}>
        {guestList}
      </form>
      <div>
        <button onClick={add}>Add Additional Guest</button>
        <button onClick={nextSection}>Go to Confirmation</button>
      </div>
    </article>
  );
}
