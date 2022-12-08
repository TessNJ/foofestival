import React from "react";

export default function PaymentMethod() {
  return (
    <div>
      <button>Card</button>

      <button className="disabled">Paypal</button>

      <button className="disabled">Mobile-Pay</button>
    </div>
  );
}
