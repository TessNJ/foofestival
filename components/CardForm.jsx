import React, { useRef } from "react";

export default function CardForm(props) {
  const cardForm = useRef(null);
  const sendCard = (event) => {
    event.preventDefault;
    props.getCardDetail({
      cardNo: cardForm.current[0].value,
      cardDate: cardForm.current[1].value,
      cardSecu: cardForm.current[2].value,
    });
  };
  return (
    <>
      <form action="#" ref={cardForm}>
        <div>
          <label htmlFor="cardNo">Card Number</label>
          <input type="text" id="cardNo" name="cardNo" />
        </div>
        <div>
          <label htmlFor="cardDate">Experation data</label>
          <input type="text" id="cardDate" name="cardDate" />
        </div>
        <div>
          <label htmlFor="cardSecu">Security Number</label>
          <input type="text" id="cardSecu" name="cardSecu" />
        </div>
      </form>
      <button onClick={sendCard}>Submit</button>
    </>
  );
}
