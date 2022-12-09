import React, { useEffect, useState } from "react";
import HeadInfo from "../components/Head";
import Extras from "../components/Extras";
import Details from "../components/Details";
import GuestDisplay from "../components/GuestDisplay";
import CardDisplay from "../components/CardDisplay";
import CardForm from "../components/CardForm";
import PaymentMethod from "../components/PaymentMethod";

export default function FinalizePurchase({ allData }) {
  console.log(allData);

  const [cardDetails, setCardDetails] = useState(null);
  if (!allData[0] || !allData[1] || !allData[2]) {
    if (typeof window !== "undefined") {
      console.log("window undefined");
      // window.location.replace("/tickets");
    }
  } else {
    function getCardDetail(props) {
      setCardDetails(props);
    }
    return (
      <>
        <HeadInfo>Purchase</HeadInfo>
        <main className="purchaseMain">
          <section className="buyMethod">
            <PaymentMethod />
            <CardForm getCardDetail={getCardDetail} />
          </section>
          <section className="buyDetails">
            <h3>Order Details of Purchase</h3>
            <div className="buyDetailsSmall">
              <Details data={allData} title="full" />
              <article>
                <div>
                  <CardDisplay data={allData} cardDetails={cardDetails} />
                  <Extras data={allData} title="allDetails" />
                </div>
                <GuestDisplay data={allData} />
              </article>
            </div>
          </section>
          <section className="buyBought hidden">
            <h1>Thank you!</h1>
            <p>Your order has been received and you will get an order confirmation send to your provided email</p>
            <button onClick={(e) => {}}>Home</button>
          </section>
        </main>
      </>
    );
  }
}
