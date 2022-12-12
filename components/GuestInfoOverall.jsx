import React, { useState, useRef, useEffect, useCallback } from "react";
import GuestInfo from "./GuestInfo";

export default function GuestInfoOverall(props) {
  var validator = require("email-validator");
  const formEl = useRef(null);
  function checkIfValid(props) {
    if (props.length >= 3) {
      return true;
    }
    return false;
  }
  function focusOut(event) {
    if (checkIfValid(event.value)) {
      event.nextElementSibling.classList.add("hidden");
    } else {
      event.nextElementSibling.classList.remove("hidden");
    }
  }
  function emailFocusOut(event) {
    if (validator.validate(event.value)) {
      event.nextElementSibling.classList.add("hidden");
    } else {
      event.nextElementSibling.classList.remove("hidden");
    }
  }
  const getGuests = (guests) => {
    let content = [];

    for (let i = 0; i < guests; i++) {
      content.push(<GuestInfo key={`guest-${i}`} />);
    }

    return content;
  };
  const nextSection = (event) => {
    let guestConcat = [];
    event.preventDefault();
    const formLength = formEl.current.children.length;
    for (let i = 0; i < formLength; i++) {
      if (checkIfValid(formEl.current.children[i].children[0].children[1].value) && validator.validate(formEl.current.children[i].children[1].children[1].value)) {
        guestConcat.push({
          name: formEl.current.children[i].children[0].children[1].value,
          email: formEl.current.children[i].children[1].children[1].value,
        });
      }
    }
    if (formEl.current.children.length != guestConcat.length) {
      for (let i = 0; i < formLength; i++) {
        focusOut(formEl.current.children[i].children[0].children[1]);
        emailFocusOut(formEl.current.children[i].children[1].children[1]);
      }
    } else {
      props.getGuestInfo(guestConcat);
      setTimeout(props.getCurrentSection("infoConfirm"), 1000);
    }
  };
  return (
    <article>
      <form action="#" className="guestDiv" ref={formEl}>
        {getGuests(props.aramInfo.amount)}
      </form>
      <div>
        <button /* className="disabled" */ onClick={nextSection}>Go to Confirmation</button>
      </div>
    </article>
  );
}
