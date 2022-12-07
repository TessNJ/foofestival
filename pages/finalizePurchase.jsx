import React from "react";
import HeadInfo from "../components/Head";

export default function finalizePurchase() {
  return (
    <>
      <HeadInfo>Purchase</HeadInfo>
      <main className="purchaseMain">
        <section className="buyInfo">
          <h1>Finalize Purchase</h1>
          <article>
            <h5>Basic Details:</h5>
            <p>Area</p>
            <p>Amount</p>
            <p>
              Ticket types <span>x amount</span>
            </p>
          </article>
          <div>
            <article>
              <h5>Extras:</h5>
              <p>None</p>
            </article>
          </div>
          <div>
            <p className="textItalic">
              <strong>Disclaimer:</strong> This information is not saved or shared
            </p>
          </div>
        </section>
        <section className="buyMethod">
          <h4>Please choose payment method:</h4>
          <ul>
            <li>
              <button>Card</button>
            </li>
            <li>
              <button className="disabled">Paypal</button>
            </li>
            <li>
              <button className="disabled">Mobile-Pay</button>
            </li>
          </ul>
        </section>
        <section className="buyDetails">
          <form action="#">
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
        </section>
        <section className="buyConfirm">
          <h2>Please Confirm details and purchase</h2>
          <h4>Full Details:</h4>
          <article>
            <h5>Details:</h5>
            <p>Name</p>
            <p>Area</p>
            <p>Amount</p>
            <p>
              Ticket types <span>x amount</span>
            </p>
          </article>
          <article>
            <h5>Extras:</h5>
            <p>None</p>
          </article>
          <article>
            <h5>Guest info</h5>
            <ul>
              <li>
                <p>Name</p>
              </li>
            </ul>
          </article>
          <article>
            <p>Card ending in ****</p>
            <p>Price</p>
          </article>
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
