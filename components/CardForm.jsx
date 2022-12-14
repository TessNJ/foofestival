import React, { useRef, useState } from "react";
import Payment from "payment";

export default function CardForm(props) {
  const [cardType, setCardType] = useState(null);
  const cardForm = useRef(null);

  function checkCardType(event) {
    setCardType(Payment.fns.cardType(event.target.value));
  }

  function sendCard(event) {
    event.preventDefault();
    if (cardForm.current[0].value.length >= 19 && Payment.fns.validateCardExpiry(cardForm.current[1].value) && Payment.fns.validateCardCVC(cardForm.current[2].value)) {
      props.getCardDetail({
        cardNo: cardForm.current[0].value,
        cardDate: cardForm.current[1].value,
        cardSecu: cardForm.current[2].value,
      });
    } else {
      if (cardForm.current[0].value.length < 19) {
        cardForm.current[0].nextElementSibling.classList.remove("hidden");
      }
      if (!Payment.fns.validateCardExpiry(cardForm.current[1].value)) {
        cardForm.current[1].nextElementSibling.classList.remove("hidden");
      }
      if (!Payment.fns.validateCardCVC(cardForm.current[2].value)) {
        cardForm.current[2].nextElementSibling.classList.remove("hidden");
      }
    }
  }
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
              Payment.formatCardNumber(e.target);
            }}
            onBlur={(e) => {
              if (cardForm.current[0].value.length >= 19) {
                e.target.nextElementSibling.classList.add("hidden");
              } else {
                e.target.nextElementSibling.classList.remove("hidden");
              }
            }}
          />
          <p className="hidden">Invalid</p>
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
            onBlur={(e) => {
              if (Payment.fns.validateCardExpiry(e.target.value)) {
                e.target.nextElementSibling.classList.add("hidden");
              } else {
                e.target.nextElementSibling.classList.remove("hidden");
              }
            }}
          />
          <p className="hidden">Invalid</p>
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
            onBlur={(e) => {
              if (Payment.fns.validateCardCVC(e.target.value)) {
                e.target.nextElementSibling.classList.add("hidden");
              } else {
                e.target.nextElementSibling.classList.remove("hidden");
              }
            }}
          />
          <p className="hidden">Invalid</p>
        </div>
      </form>
      <button onClick={sendCard}>Submit</button>
    </>
  );
  // }
}
