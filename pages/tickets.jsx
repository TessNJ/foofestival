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

  useEffect(() => {
    const element = document.querySelector(`#${currentSection}`);
    element.classList.remove("hidden");
    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }, [currentSection]);

  return (
    <main className="ticket_main">
      <section id="infoGreet">
        <h1>Tickets</h1>
        <Hero getCurrentSection={getCurrentSection} />
      </section>
      <section id="infoAvail" className="hidden">
        <h2>Availability</h2>
        <div>
          {data.map((e) => {
            return <AvailActicle key={`avail-${e.area}`} title={e.area} allSpots={e.spots} availSpots={e.available} getAramInfo={getAramInfo} getCurrentSection={getCurrentSection} />;
          })}
        </div>
      </section>
      <section id="infoSelect" className="hidden">
        <h2>Select Type, Optionals, and Personal Info</h2>
        <InfoForm getFormInfo={getFormInfo} getCurrentSection={getCurrentSection} />
      </section>
      <section id="infoConfirm" className="hidden">
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
