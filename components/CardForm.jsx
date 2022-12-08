import React, { useRef } from "react";

export default function CardForm(props) {
  const cardForm = useRef("");
  // const cardForm = useRef(null);
  // const cardForm = useRef(null);
  // console.log(numberInput.current.value);
  const sendCard = (event) => {
    event.preventDefault;
    /*     props.getCardDetail({
      cardNo: cardForm.current[0].value,
      cardDate: cardForm.current[1].value,
      cardSecu: cardForm.current[2].value,
    }); */
  };

  function numberCheck(e) {
    console.log(e.target.value);
    if (e.target.value.length === 4 || e.target.value.length === 9 || e.target.value.length === 14) {
      e.target.value += " ";
    }
    if (e.target.value.length >= 20) {
      // e.target.value.replace(-1, "");
    }
  }

  function monthCheck(e) {
    if (e.target.value.length) {
      console.log("success!!");
    }
  }
  function yearCheck(e) {}
  function securityCheck(e) {}

  // cardForm.current.addEventListener("input", (e) => {
  // });
  /*     if (form.elements.cardnumber.value.length === 19) {
      form.elements.month.focus();
    }
  }); */

  /*  form.elements.month.addEventListener("input", (e) => {
    if (form.elements.month.value.length === 2) {
      form.elements.year.focus();
    }
  });
  form.elements.year.addEventListener("input", (e) => {
    if (form.elements.year.value.length === 2) {
      form.elements.security.focus();
    }
  });
  form.elements.security.addEventListener("input", (e) => {
    console.log(form.elements.security.value);
    if (form.elements.security.value.length === 3) {
      form.elements.submit.focus();
    }
  }); */
  return (
    <>
      <form action="#" /* ref={cardForm} */>
        <div className="form-group">
          <label htmlFor="cardnumber">Card number</label>
          <input
            type="text"
            autoComplete="off"
            name="cardnumber"
            inputMode="numeric"
            id="cardnumber"
            onChange={(e) => {
              numberCheck(e);
            }}
          />
        </div>
        <div className="form-group">
          <div className="date-info">
            <label htmlFor="month">month</label>
            <input
              type="text"
              autoComplete="off"
              inputMode="numeric"
              name="month"
              id="month"
              onChange={(e) => {
                monthCheck(e);
              }}
            />
          </div>
          <div className="date-info">
            <label htmlFor="year">year</label>
            <input
              type="text"
              autoComplete="off"
              inputMode="numeric"
              name="year"
              id="year"
              onChange={(e) => {
                yearCheck(e);
              }}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="security">security</label>
          <input
            type="text"
            autoComplete="off"
            inputMode="numeric"
            name="security"
            id="security"
            onChange={(e) => {
              securityCheck(e);
            }}
          />
        </div>
      </form>
      <button onClick={sendCard}>Submit</button>
    </>
  );
}
