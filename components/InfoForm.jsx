import React, { useRef, useState } from "react";
import SelectOption from "../components/SelectOption";

export default function InfoForm(props) {
  var validator = require("email-validator");
  const inputRef = useRef(null);
  function checkIfValid(props) {
    if (props.length >= 3) {
      console.log(props);
      return true;
    }
    return false;
  }
  function focusOut(event) {
    if (checkIfValid(event.target.value)) {
      event.target.nextElementSibling.classList.add("hidden");
    } else {
      event.target.nextElementSibling.classList.remove("hidden");
    }
  }
  function emailFocusOut(event) {
    if (validator.validate(event.target.value)) {
      event.target.nextElementSibling.classList.add("hidden");
    } else {
      event.target.nextElementSibling.classList.remove("hidden");
    }
  }

  const CollectInfo = (event) => {
    if (
      validator.validate(inputRef.current[6].value) &&
      checkIfValid(inputRef.current[4].value) &&
      checkIfValid(inputRef.current[5].value) &&
      checkIfValid(inputRef.current[7].value) &&
      checkIfValid(inputRef.current[8].value) &&
      checkIfValid(inputRef.current[9].value)
    ) {
      event.preventDefault();
      let typeName = "Standard Ticket";
      let typePrice = 1499;

      if (inputRef.current[0].value === "extraSpace") {
        typeName = "Extra Space Ticket";
        typePrice = 1999;
      }
      /* props.getFormInfo({
      type: { typeName: typeName, typePrice: typePrice },
      extras: {
        parking: inputRef.current[2].checked,
        backstage: inputRef.current[3].checked,
      },
      fullName: [inputRef.current[4].value,inputRef.current[5].value],
      email: inputRef.current[6].value,
      address: {
        street: inputRef.current[7].value,
        city: inputRef.current[8].value,
        country: inputRef.current[9].value,
      },
    }); */
      /* if (props.aramInfo.amount <= 1) {
      console.log(props.aramInfo.amount);
      props.getCurrentSection("infoConfirm");
    } else if (props.aramInfo.amount >= 2) {
      props.getCurrentSection("infoGuest");
    } */
      console.log("allowed");
      console.log(inputRef.current[6].value);
      console.log(validator.validate("test@email.com"), checkIfValid(inputRef.current[4].value));
    } else {
      console.log(validator.validate(inputRef.current[6]), checkIfValid(inputRef.current[4].value));
      console.log("denied");
    }
  };
  return (
    <>
      <form action="#" id="form_ticketInfo" ref={inputRef}>
        <div>
          <label>
            Choose Ticket Type
            <select name="ticket_type" id="ticket_type">
              <SelectOption value="standard" title="Standard - 1499,-" />
              <SelectOption value="extraSpace" title="Extra Space 1999,-" />
            </select>
          </label>
          <fieldset>
            <legend>Extras</legend>
            <label>
              <input type="checkbox" name="ticket_op_parking" id="ticket_op_parking" value="parking" />
              Assign Parking Space
            </label>
            <label>
              <input type="checkbox" name="ticket_op_backstage" id="ticket_op_backstage" value="backStage" />
              Backstage Pass&apos;s
            </label>
          </fieldset>
        </div>
        <div className="form-group">
          <div className="form-group">
            <label htmlFor="ticket_firstName">First Name</label>
            <input
              type="text"
              name="ticket_firstName"
              id="ticket_firstName"
              onBlur={(e) => {
                focusOut(e);
              }}
            />
            <p className="hidden">Invalid</p>
          </div>
          <div className="form-group">
            <label htmlFor="ticket_lastName">Last Name</label>
            <input
              type="text"
              name="ticket_lastName"
              id="ticket_lastName"
              onBlur={(e) => {
                focusOut(e);
              }}
            />
            <p className="hidden">Invalid</p>
          </div>
          <div className="form-group">
            <label htmlFor="ticket_email">Email Address</label>
            <input
              type="email"
              name="ticket_email"
              id="ticket_email"
              onBlur={(e) => {
                emailFocusOut(e);
              }}
            />
            <p className="hidden">Invalid</p>
          </div>
        </div>
        <div>
          <div className="form-group">
            <label htmlFor="ticket_addressStreet">Street and Number</label>
            <input
              type="text"
              name="ticket_addressStreet"
              id="ticket_addressStreet"
              onBlur={(e) => {
                focusOut(e);
              }}
            />
            <p className="hidden">Invalid</p>
          </div>
          <div className="form-group">
            <label htmlFor="ticket_addressCity">City</label>
            <input
              type="text"
              name="ticket_addressCity"
              id="ticket_addressCity"
              onBlur={(e) => {
                focusOut(e);
              }}
            />
            <p className="hidden">Invalid</p>
          </div>
          <div className="form-group">
            <label htmlFor="ticket_addressCountry">Country</label>
            <input
              type="text"
              name="ticket_addressCountry"
              id="ticket_addressCountry"
              onBlur={(e) => {
                focusOut(e);
              }}
            />
            <p className="hidden">Invalid</p>
          </div>
        </div>
      </form>
      <button onClick={CollectInfo}>Next</button>
    </>
  );
}
