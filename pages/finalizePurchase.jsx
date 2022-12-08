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
          <section className="buyInfo">
            <h1>Finalize Purchase</h1>
            <h4>Basic Details:</h4>
            <Details data={allData} title="basic" />
            <Extras data={allData} title="basicDetails" />
            <div>
              <p className="textItalic">
                <strong>Disclaimer:</strong> This information is not saved or shared
              </p>
            </div>
          </section>
          <section className="buyMethod">
            <h4>Please choose payment method:</h4>
            <PaymentMethod />
          </section>
          <section className="buyDetails">
            <CardForm getCardDetail={getCardDetail} />
          </section>
          <section className="buyConfirm">
            <h2>Please Confirm details and purchase</h2>
            <h4>Full Details:</h4>
            <Details data={allData} title="full" />
            <Extras data={allData} title="allDetails" />
            <GuestDisplay data={allData} />
            <CardDisplay data={allData} cardDetails={cardDetails} />
          </section>
          <section className="buyBought">
            <h1>Thank you!</h1>
            <p>Your order has been received and you will get an order confirmation send to your provided email</p>
            <button>Home</button>
          </section>
        </main>
      </>
    );
  }
}
