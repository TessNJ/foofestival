import React, { useState, useEffect, useCallback } from "react";
import AvailActicle from "../components/AvailActicle";
import InfoForm from "../components/InfoForm";
import Hero from "../components/Hero";
import Confirmation from "../components/Confirmation";
import ReservationInfo from "../components/ReservationInfo";
import HeadInfo from "../components/Head";
import Countdown from "react-countdown";
import Timer from "../components/Timer";

export default function Tickets({ data }) {
  console.log(Countdown.Countdown$1);
  const [currentSection, setCurrentSection] = useState("infoGreet");
  const [aramInfo, setAramInfo] = useState("");
  const [formInfo, setFormInfo] = useState("");
  const [timerInfo, setTimerInfo] = useState(false);
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
    if (currentSection === "infoSelect") {
      setTimerInfo(true);
    }
  }, [currentSection]);

  useEffect(() => {
    if (timerInfo === true) {
      document.querySelector("#timer").classList.remove("timerHidden");
    }
  });

  return (
    <>
      <HeadInfo>Tickets</HeadInfo>
      <main className="ticketMain">
        <aside id="timer" className="timerHidden ">
          <div className="timerHere">
            <p>
              Timer:&nbsp;&nbsp;
              <span>
                <Timer timerInfo={timerInfo} />
              </span>
            </p>
          </div>
        </aside>
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
        <section id="infoReserve" className="hidden">
          <h2>Current Reservation?</h2>
          <p>Please confirm the following information is correct. Afterwards you will have 5 minuts to complete the reservation</p>
          <ReservationInfo aramInfo={aramInfo} getCurrentSection={getCurrentSection} />
        </section>
        <section id="infoSelect" className="hidden">
          <h2>Select Type, Optionals, and Personal Info</h2>
          <InfoForm getFormInfo={getFormInfo} getCurrentSection={getCurrentSection} />
        </section>
        <section id="infoConfirm" className="hidden">
          <h2>Reservation Conformation</h2>
          <Confirmation />
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:8080/available-spots");

  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
}
