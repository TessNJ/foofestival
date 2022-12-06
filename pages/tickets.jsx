import React, { useState, useEffect } from "react";
import AvailActicle from "../components/AvailActicle";
import InfoForm from "../components/InfoForm";
import Hero from "../components/Hero";
import Confirmation from "../components/Confirmation";
import ReservationInfo from "../components/ReservationInfo";
import HeadInfo from "../components/Head";
import Ticket from "../components/Ticket";
import ReactDOM from "react-dom";
import Countdown from "react-countdown";

export default function Tickets({ data }) {
  const [currentSection, setCurrentSection] = useState("infoGreet");
  const [aramInfo, setAramInfo] = useState("");
  const [formInfo, setFormInfo] = useState("");
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

  useEffect(() => {
    if (currentSection === "infoSelect") {
      document.querySelector("#timer").classList.remove("hidden");
    }
    // if(currentSection ==="")
  });

  const Completionist = () => <span>You are good to go!</span>;
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <span>
          {minutes}:{seconds}
        </span>
      );
    }
  };
  return (
    <>
      <HeadInfo>Tickets</HeadInfo>
      <main className="ticketMain">
        <section id="timer" className="hidden">
          <h1>Timer</h1>
          <Countdown date={Date.now() + 300000} renderer={renderer} />
          <div className="timerHere"></div>
        </section>
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

  // console.log(data);
  return {
    props: {
      data: data,
    },
  };
}
