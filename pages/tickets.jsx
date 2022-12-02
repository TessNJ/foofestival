import React, { useState, useEffect } from "react";
import AvailActicle from "../components/AvailActicle";

export default function Tickets({ data }) {
  // const [currentSection, setCurrentSection] = useState("")
  const [aramInfo, setAramInfo] = useState(null);
  function getAramInfo(props) {
    setAramInfo(props);
  }

  return (
    <main>
      <section className="infoGreet">
        <h1>Tickets</h1>
        <p>See availablity, select your perfered area, and buy your tickets here for this years FooFestival!</p>
      </section>
      <section className="infoAvail">
        <h2>Availability</h2>
        <div>
          {data.map((e) => {
            return <AvailActicle key={`avail-${e.area}`} title={e.area} allSpots={e.spots} availSpots={e.available} getAramInfo={getAramInfo} />;
          })}
        </div>
      </section>
      <section>
        {/* <article>
          <h2>Select Type, Optionals, and Personal Info</h2>
          <form action="#" id="form_ticketInfo">
            <div>
              <label>
                <select name="ticket_type" id="ticket_type">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
                Choose Ticket Type
              </label>
              <fieldset>
                <legend>Extras</legend>
                <label>
                  <input type="checkbox" name="ticket_op_parking" id="ticket_op_parking" />
                  meep
                </label>
                <label>
                  <input type="checkbox" name="ticket_op_backstage" id="ticket_op_backstage" />
                  morp
                </label>
              </fieldset>
            </div>
          </form>
          <form action="#" id="form_personInfo">
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
          </form>
        </article> */}
        {/* <article>
          <h2>Reservation Conformation</h2>
        </article> */}
      </section>
      <section></section>
    </main>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:8080/available-spots");

  const data = await res.json();

  // console.log(data);
  return {
    props: {
      data: data,
    },
  };
}
