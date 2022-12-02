import React, { useState, useEffect } from "react";
import AvailActicle from "../components/AvailActicle";
import InfoForm from "../components/InfoForm";

export default function Tickets({ data }) {
  // const [currentSection, setCurrentSection] = useState("")
  const [aramInfo, setAramInfo] = useState(null);
  const [formInfo, setFormInfo] = useState(null);
  function getAramInfo(props) {
    setAramInfo(props);
    console.log(aramInfo);
  }
  function getFormInfo(props) {
    setFormInfo(props);
    console.log(formInfo);
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
        <h2>Select Type, Optionals, and Personal Info</h2>
        <InfoForm getFormInfo={getFormInfo} />
      </section>
      <section>
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
