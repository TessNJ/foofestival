import React, { useEffect, useState } from "react";
import HeadInfo from "../components/Head";
import Extras from "../components/Extras";
import Details from "../components/Details";
import GuestDisplay from "../components/GuestDisplay";
import CardDisplay from "../components/CardDisplay";
import CardForm from "../components/CardForm";
import Timer from "../components/Timer";
import { fillReservation } from "../modules/fullfill";

export default function FinalizePurchase({ allData, timeLeft, orderStatus }) {
  const [cardDetails, setCardDetails] = useState(null);
  const [buyComplete, setBuyComplete] = useState(false);
  const [timerInfo, setTimerInfo] = useState(true);

  if (!allData[0] || !allData[1] || !allData[2]) {
    if (typeof window !== "undefined") {
      window.location.replace("/tickets");
    }
  } else {
    let newTimeLeft = timeLeft.split(":");
    function timedOut() {
      document.querySelector("#infoTimedOut").classList.remove("timerHidden");
    }
    function getCardDetail(props) {
      setCardDetails(props);
      setBuyComplete(true);
    }
    if (buyComplete === true) {
      document.querySelector("#confirmButton").classList.remove("disabled");
    }
    async function orderConfirmed() {
      const response = await fillReservation({
        id: orderStatus.id,
      });
      if (response) {
        document.querySelector("#buyBought").classList.remove("timerHidden");
      }
    }
    return (
      <>
        <HeadInfo>Purchase</HeadInfo>
        <aside id="timer">
          <div className="timerHere">
            <p>
              Timer:&nbsp;&nbsp;
              <Timer newTimeLeft={newTimeLeft} timedOut={timedOut} timerInfo={timerInfo} page="buy" />
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
        <main className="purchaseMain">
          <section className="buyMethod">
            <h4>Payment span</h4>
            <CardForm getCardDetail={getCardDetail} />
          </section>
          <section className="buyDetails">
            <h3>Order Details of Purchase</h3>
            <div className="buyDetailsSmall">
              <Details data={allData} cardDetails={cardDetails} />
              <CardDisplay data={allData} cardDetails={cardDetails} />
              <article>
                <Extras data={allData} title="allDetails" />
                <GuestDisplay data={allData} className="hidden" />
              </article>
            </div>
            <button id="confirmButton" className="disabled" onClick={orderConfirmed}>
              Confirm Purchase
            </button>
          </section>
          <section id="buyBought" className="timerHidden">
            <div>
              <h1>Thank you!</h1>
              <p>Your order has been received and you will get an order confirmation send to your provided email</p>
              <button
                onClick={(e) => {
                  location.replace("/");
                }}
              >
                Home
              </button>
            </div>
          </section>
        </main>
      </>
    );
  }
}
