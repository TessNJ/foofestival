import React from "react";

export default function PaymentMethod() {
  return (
    <article>
      <h4>Please choose payment method:</h4>
      <div>
        <button>Card</button>
        <button className="disabled">Paypal</button>
        <button className="disabled">Mobile-Pay</button>
      </div>
      <p className="textItalic">Supports American CVC formatting (4-digts)</p>
    </article>
  );
}
