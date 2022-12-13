import React, { useRef, useState } from "react";
import SelectOption from "../components/SelectOption";

export default function InfoForm(props) {
  var validator = require("email-validator");
  const inputRef = useRef(null);
  function checkIfValid(props) {
    if (props.length >= 3) {
      return true;
    }
    return false;
  }
  function focusOut(event) {
    // if (checkIfValid(event.target.value)) {
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

  const CollectInfo = (event) => {
    if (
      validator.validate(inputRef.current[8].value) &&
      checkIfValid(inputRef.current[6].value) &&
      checkIfValid(inputRef.current[7].value) &&
      checkIfValid(inputRef.current[9].value) &&
      checkIfValid(inputRef.current[10].value) &&
      checkIfValid(inputRef.current[11].value)
    ) {
      event.preventDefault();
      let typeName = "Standard Ticket";
      let typePrice = 799;

      if (inputRef.current[0].value === "extraSpace") {
        typeName = "VIP Ticket";
        typePrice = 1299;
      }
      props.getFormInfo({
        type: { typeName: typeName, typePrice: typePrice },
        tents: inputRef.current[1].checked,
        extras: {
          parking: inputRef.current[3].checked,
          backstage: inputRef.current[4].checked,
          green: inputRef.current[5].checked,
        },
        fullName: [inputRef.current[6].value, inputRef.current[7].value],
        email: inputRef.current[8].value,
        address: {
          street: inputRef.current[9].value,
          city: inputRef.current[10].value,
          country: inputRef.current[11].value,
        },
      });
      if (props.aramInfo.amount <= 1) {
        props.getCurrentSection("infoConfirm");
      } else if (props.aramInfo.amount >= 2) {
        props.getCurrentSection("infoGuest");
      }
    } else {
      focusOut(inputRef.current[6]);
      focusOut(inputRef.current[7]);
      emailFocusOut(inputRef.current[8]);
      focusOut(inputRef.current[9]);
      focusOut(inputRef.current[10]);
      focusOut(inputRef.current[11]);
    }
  };
  return (
    <div>
      <form action="#" id="form_ticketInfo" ref={inputRef}>
        <div className="form-group-small">
          <div className="formType">
            <label>
              Choose Ticket Type
              <select name="ticket_type" id="ticket_type">
                <SelectOption value="standard" title="Standard - 799,-" />
                <SelectOption value="extraSpace" title="VIP 1299,-" />
              </select>
            </label>
          </div>
          <div className="formTent">
            <label>
              <input type="checkbox" name="ticket_tent" id="ticket_tent" value="tent" />
              Have crew set up tents
            </label>
            <p>* Crew setup starts at 299 for 2-person tent and increases by 100,- per additional guest</p>
          </div>
          <fieldset>
            <legend>Extras</legend>
            <label>
              <input type="checkbox" name="ticket_op_parking" id="ticket_op_parking" value="parking" />
              Assign Parking Space +199,-
            </label>
            <label>
              <input type="checkbox" name="ticket_op_backstage" id="ticket_op_backstage" value="backStage" />
              Backstage Pass&apos;s +299,-
            </label>
            <label>
              <input type="checkbox" name="ticket_op_green" id="ticket_op_green" value="green" />
              Green Camping option +249,-
            </label>
          </fieldset>
        </div>
        <div className="form-group-big">
          <div className="form-group">
            <label htmlFor="ticket_firstName">First Name</label>
            <input
              type="text"
              name="ticket_firstName"
              id="ticket_firstName"
              onBlur={(e) => {
                focusOut(e.target);
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
                focusOut(e.target);
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
                emailFocusOut(e.target);
              }}
            />
            <p className="hidden">Invalid</p>
          </div>
        </div>
        <div className="form-group-big">
          <div className="form-group">
            <label htmlFor="ticket_addressStreet">Street and Number</label>
            <input
              type="text"
              name="ticket_addressStreet"
              id="ticket_addressStreet"
              onBlur={(e) => {
                focusOut(e.target);
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
                focusOut(e.target);
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
                focusOut(e.target);
              }}
            />
            <p className="hidden">Invalid</p>
          </div>
        </div>
      </form>
      <button onClick={CollectInfo}>Next</button>
    </div>
  );
}
