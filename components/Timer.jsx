import React, { useRef, useEffect } from "react";
import Countdown from "react-countdown";

export default function Timer(props) {
  const myTimer = useRef(null);
  const info = props.timerInfo;
  if (info === true) {
    console.log(myTimer.current.api.isStarted);
  }
  useEffect(() => {
    if (info === true) {
      myTimer.current.api.start();
    } else if (info === false) {
      myTimer.current.api.stop();
    }
  }, [info]);

  function complete() {
    console.log("done");
  }
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (props.timerInfo === true) {
    }
    return (
      <span>
        {minutes}:{seconds}
      </span>
    );
  };

  return <Countdown date={Date.now() + 100000} renderer={renderer} onComplete={complete} autoStart={false} ref={myTimer} />;
}
