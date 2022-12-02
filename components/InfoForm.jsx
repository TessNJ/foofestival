import React from "react";
import SelectOption from "../components/SelectOption";

export default function InfoForm(props) {
  //   console.log(props);
  function collectInfo(data) {
    props.getFormInfo({
      title: "hi",
    });
  }
  return (
    <form action="#" id="form_ticketInfo">
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
          <input type="text" name="ticket_fullName" id="ticket_fullName" />
        </label>
        <label>
          Email Address
          <input type="email" name="ticket_email" id="ticket_email" />
        </label>
      </div>
      <div>
        <label>
          Street and Number
          <input type="text" name="ticket_addressStreet" id="ticket_addressStreet" />
        </label>
        <label>
          City
          <input type="text" name="ticket_addressCity" id="ticket_addressCity" />
        </label>
        <label>
          Country
          <input type="text" name="ticket_addressCountry" id="ticket_addressCountry" />
        </label>
      </div>
      <button onClick={collectInfo}>Next</button>
    </form>
  );
}
