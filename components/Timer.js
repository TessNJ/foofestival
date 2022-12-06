import React from "react";
import ReactDOM from "react-dom";
import Countdown from "react-countdown";

// Random component
const Completionist = () => <span>You are good to go!</span>;

ReactDOM.render(
  <Countdown date={Date.now() + 5000}>
    <Completionist />
  </Countdown>,
  document.getElementById("root")
);
