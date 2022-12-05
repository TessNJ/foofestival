import React, { useState, useEffect } from "react";
import AvailActicle from "../components/AvailActicle";
import InfoForm from "../components/InfoForm";
import Hero from "../components/Hero";
import Confirmation from "../components/Confirmation";

export default function Tickets({ data }) {
  const [currentSection, setCurrentSection] = useState("infoGreet");
  const [aramInfo, setAramInfo] = useState(null);
  const [formInfo, setFormInfo] = useState(null);
  function getAramInfo(props) {
    setAramInfo(props);
    console.log(props);
  }
  function getFormInfo(props) {
    setFormInfo(props);
    console.log(props);
  }
  function getCurrentSection(props) {
    setCurrentSection(props);
    console.log(props);
  }

  return (
    <main className="ticket_main">
      <section className="infoGreet">
        <h1>Tickets</h1>
        <Hero getCurrentSection={getCurrentSection} />
      </section>
      <section className="infoAvail">
        <h2>Availability</h2>
        <div>
          {data.map((e) => {
            return <AvailActicle key={`avail-${e.area}`} title={e.area} allSpots={e.spots} availSpots={e.available} getAramInfo={getAramInfo} getCurrentSection={getCurrentSection} />;
          })}
        </div>
      </section>
      <section className="infoSelect">
        <h2>Select Type, Optionals, and Personal Info</h2>
        <InfoForm getFormInfo={getFormInfo} getCurrentSection={getCurrentSection} />
      </section>
      <section className="infoConfirm">
        <h2>Reservation Conformation</h2>
        <Confirmation />
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
