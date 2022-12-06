import React from "react";
import ReactDOM from "react-dom";
import Countdown from "react-countdown";

export default function Ticket() {
  // Random component
  const Completionist = () => <span>You are good to go!</span>;

  // Renderer callback with condition
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <span>
          {hours}:{minutes}:{seconds}
        </span>
      );
    }
  };

  ReactDOM.render(<Countdown date={Date.now() + 5000} renderer={renderer} />, document.querySelector());
}
