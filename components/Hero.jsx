import React from "react";

export default function Hero(props) {
  const change = (e) => {
    e.preventDefault();
    props.getCurrentSection("infoAvail");
  };
  return (
    <div>
      <p>See availablity, select your perfered area, and buy your tickets here for this years FooFestival!</p>
      <button onClick={change}>See Availability</button>
    </div>
  );
}
