import React, { useState, useEffect } from "react";
import AvailActicle from "../components/AvailActicle";
import InfoForm from "../components/InfoForm";
import Hero from "../components/Hero";
import Confirmation from "../components/Confirmation";
import ReservationInfo from "../components/ReservationInfo";
import HeadInfo from "../components/Head";
import Countdown from "react-countdown";
import Timer from "../components/Timer";
import GuestInfoOverall from "../components/GuestInfoOverall";
import Anchor from "../components/Anchor";

export default function Tickets({ data, recieveData, allData }) {
  console.log(allData);
  const [currentSection, setCurrentSection] = useState("infoGreet");
  const [aramInfo, setAramInfo] = useState("");
  const [formInfo, setFormInfo] = useState("");
  const [guestInfo, setGuestInfo] = useState();
  const [timerInfo, setTimerInfo] = useState(false);
  function getAramInfo(props) {
    setAramInfo(props);
  }
  function getFormInfo(props) {
    setFormInfo(props);
  }
  function getGuestInfo(props) {
    setGuestInfo(props);
    console.log(guestInfo);
  }
  function getCurrentSection(props) {
    setCurrentSection(props);
  }

  function timedOut() {
    document.querySelector("#infoTimedOut").classList.remove("timerHidden");
  }

  useEffect(() => {
    const element = document.querySelector(`#${currentSection}`);
    element.classList.remove("hidden");
    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });

    if (currentSection === "infoSelect" && timerInfo != true) {
      setTimerInfo(true);
    }
  }, [currentSection, timerInfo, aramInfo]);

  useEffect(() => {
    if (timerInfo === true) {
      document.querySelector("#timer").classList.remove("timerHidden");
    }
  });

  function moveToPurchase() {
    console.log("move");
    recieveData([aramInfo, formInfo, guestInfo]);
  }

  return (
    <>
      <HeadInfo>Tickets</HeadInfo>
      <main className="ticketMain">
        <aside id="timer" className="timerHidden ">
          <div className="timerHere">
            <p>
              Timer:&nbsp;&nbsp;
              <span>
                <Timer timedOut={timedOut} timerInfo={timerInfo} />
              </span>
            </p>
          </div>
        </aside>
        <aside id="infoTimedOut" className="timerHidden">
          <div>
            <h1>Timed Out</h1>
            <p>The current sesstion have timed out.</p>
            <p>To proceed, please close this window.</p>
            <button
              onClick={() => {
                location.reload();
              }}
            >
              Close
            </button>
          </div>
        </aside>
        <section id="infoGreet">
          <h1>Tickets</h1>
          <Hero getCurrentSection={getCurrentSection} />
        </section>
        <section id="infoAvail" className="hidden">
          <h1>Availability</h1>
          <div className="availDiv">
            {data.map((e) => {
              return <AvailActicle key={`avail-${e.area}`} title={e.area} allSpots={e.spots} availSpots={e.available} getAramInfo={getAramInfo} getCurrentSection={getCurrentSection} />;
            })}
          </div>
        </section>
        <section id="infoReserve" className="hidden">
          <article>
            <h1>Current Reservation?</h1>
            <ReservationInfo aramInfo={aramInfo} getCurrentSection={getCurrentSection} />
          </article>
        </section>
        <section id="infoSelect" className="hidden">
          <h2>Select Type, Optionals, and Personal Info</h2>
          <InfoForm getFormInfo={getFormInfo} getCurrentSection={getCurrentSection} aramInfo={aramInfo} />
        </section>
        <section id="infoGuest" className="hidden">
          <div className="guestCopy">
            <h2>Guest Information</h2>
            <p>It appears there is multiple people attached to this order. Please add at least 1 additional guests name and email</p>
          </div>
          <GuestInfoOverall getCurrentSection={getCurrentSection} getGuestInfo={getGuestInfo} />
        </section>
        <section id="infoConfirm" className="hidden">
          <h1>Reservation Conformation</h1>
          <div>
            <p> Your order has been reserved. To Claim the spot, please continue to payment, to finish the transaction.</p>
            <Anchor href={"/finalizePurchase"}>
              <button onClick={moveToPurchase}>Go To Payment</button>
            </Anchor>
          </div>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  // const res = await fetch("http://localhost:8080/available-spots");
  const res = await fetch("https://fooapi.fly.dev/available-spots");

  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
}
