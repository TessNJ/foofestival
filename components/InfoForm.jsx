import React, { useRef } from "react";
import SelectOption from "../components/SelectOption";

export default function InfoForm(props) {
  const inputRef = useRef(null);
  const collectInfo = (event) => {
    /*  if (inputRef.current[4].value != "" && inputRef.current[5].value != "" && inputRef.current[6].value != "" && inputRef.current[7].value != "" && inputRef.current[8].value != "") { */
    event.preventDefault();
    props.getFormInfo([
      {
        type: inputRef.current[0].value,
        extras: {
          parking: inputRef.current[2].checked,
          backstage: inputRef.current[3].checked,
        },
      },
      {
        fullName: inputRef.current[4].value,
        email: inputRef.current[5].value,
        address: {
          street: inputRef.current[6].value,
          city: inputRef.current[7].value,
          country: inputRef.current[8].value,
        },
      },
    ]);
    if (props.aramInfo.amount <= 1) {
      console.log(props.aramInfo.amount);
      props.getCurrentSection("infoConfirm");
    } else if (props.aramInfo.amount >= 2) {
      props.getCurrentSection("infoGuest");
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
        <div>
          <label>
            Full Name
            <input type="text" name="ticket_fullName" id="ticket_fullName" required />
          </label>
          <label>
            Email Address
            <input type="email" name="ticket_email" id="ticket_email" required />
          </label>
        </div>
        <div>
          <label>
            Street and Number
            <input type="text" name="ticket_addressStreet" id="ticket_addressStreet" required />
          </label>
          <label>
            City
            <input type="text" name="ticket_addressCity" id="ticket_addressCity" required />
          </label>
          <label>
            Country
            <input type="text" name="ticket_addressCountry" id="ticket_addressCountry" required />
          </label>
        </div>
        <button onClick={collectInfo}>Next</button>
      </form>
    </>
  );
}
