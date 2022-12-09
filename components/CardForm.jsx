import React, { useRef, useState } from "react";
import Payment from "payment";

export default function CardForm(props) {
  const [cardType, setCardType] = useState(null);
  const cardForm = useRef(null);
  if (typeof document === "undefined") {
    console.log("hi");
  }
  // if (typeof document === "undefined" || typeof window === "undefined") {
  //   console.log("window undefined");
  // } else {
  //   // console.log(document.querySelector("input#cardNo"));
  // Payment.formatCardExpiry(document.querySelector("input#expDate"));
  //   // Payment.formatCardCVC(document.querySelector("input#CVC"));

  function checkCardType(event) {
    console.log(Payment.fns.cardType(event.target.value));
    setCardType(Payment.fns.cardType(event.target.value));
  }
  const chechValidate = (event) => {
    Payment.formatCardNumber(event.target);
  };
  const sendCard = (event) => {
    event.preventDefault;
    if (cardForm.current[0].value.length >= 19 && Payment.fns.validateCardExpiry(cardForm.current[1].value) && Payment.fns.validateCardCVC(cardForm.current[2].value)) {
      console.log("allowed");
      props.getCardDetail({
        cardNo: cardForm.current[0].value,
        cardDate: cardForm.current[1].value,
        cardSecu: cardForm.current[2].value,
      });
    } else {
      console.log("denied");
      console.log(cardForm.current[0].value.length);
    }
    console.log(cardForm.current[1].value.length, Payment.fns.validateCardExpiry(cardForm.current[1].value), Payment.fns.validateCardCVC(cardForm.current[2].value));
  };
  return (
    <>
      <div>
        <p>Type: {cardType}</p>
      </div>
      <form action="#" ref={cardForm}>
        <div className="form-group">
          <label htmlFor="cardNo">Card number</label>
          <input
            type="text"
            name="cardNo"
            inputMode="numeric"
            id="cardNo"
            required
            onChange={(e) => {
              checkCardType(e);
              // chechValidate(e);
              Payment.formatCardNumber(e.target);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="expDate">Experation Date</label>
          <input
            type="text"
            autoComplete="off"
            inputMode="numeric"
            name="expDate"
            id="expDate"
            required
            onChange={(e) => {
              Payment.formatCardExpiry(e.target);
            }}
          />
        </div>
        <div className="form-group" id="divCVC">
          <label htmlFor="CVC">CVC</label>
          <input
            type="text"
            autoComplete="off"
            inputMode="numeric"
            name="CVC"
            id="CVC"
            required
            onChange={(e) => {
              Payment.formatCardCVC(e.target);
            }}
          />
        </div>
      </form>
      <button onClick={sendCard}>Submit</button>
    </>
  );
  // }
}
