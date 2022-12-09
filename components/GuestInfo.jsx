import React from "react";

export default function GuestInfo() {
  var validator = require("email-validator");
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
  return (
    <fieldset>
      <div className="form-group">
        <label htmlFor="guestName">Full Name</label>
        <input
          type="text"
          name="guestName"
          id="guestName"
          onBlur={(e) => {
            focusOut(e.target);
          }}
        />
        <p className="hidden">Invalid</p>
      </div>
      <div className="form-group">
        <label htmlFor="guestEmail">Email</label>
        <input
          type="email"
          name="guestEmail"
          id="guestEmail"
          onBlur={(e) => {
            emailFocusOut(e.target);
          }}
        />
        <p className="hidden">Invalid</p>
      </div>
    </fieldset>
  );
}
