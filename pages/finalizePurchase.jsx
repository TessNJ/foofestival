import React, { useEffect, useState } from "react";
import HeadInfo from "../components/Head";
import Extras from "../components/Extras";
import Details from "../components/Details";
import GuestDisplay from "../components/GuestDisplay";
import CardDisplay from "../components/CardDisplay";
import CardForm from "../components/CardForm";

export default function FinalizePurchase({ allData }) {
  const [cardDetails, setCardDetails] = useState(null);
  const [buyComplete, setBuyComplete] = useState(false);
  if (!allData[0] || !allData[1] || !allData[2]) {
    if (typeof window !== "undefined") {
      console.log(allData);
      // window.location.replace("/tickets");
    }
  } else {
    function getCardDetail(props) {
      setCardDetails(props);
      setBuyComplete(true);
    }
    if (buyComplete === true) {
      document.querySelector("#confirmButton").classList.remove("disabled");
    }
    return (
      <>
        <HeadInfo>Purchase</HeadInfo>
        <main className="purchaseMain">
          <section className="buyMethod">
            <h4>Payment span</h4>
            <CardForm getCardDetail={getCardDetail} />
          </section>
          <section className="buyDetails">
            <h3>Order Details of Purchase</h3>
            <div className="buyDetailsSmall">
              <Details data={allData} cardDetails={cardDetails} />
              <article>
                <Extras data={allData} title="allDetails" />
                <GuestDisplay data={allData} />
              </article>
              <CardDisplay data={allData} cardDetails={cardDetails} />
            </div>
            <button
              id="confirmButton"
              className="disabled"
              onClick={(e) => {
                document.querySelector("#buyBought").classList.remove("timerHidden");
              }}
            >
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
