import React, { useRef, useEffect, useMemo } from "react";
import Countdown from "react-countdown";

export default function Timer(props) {
  const myTimer = useRef(null);
  //   if (props.timerInfo === false) {
  //     return;
  //   }
  const info = props.timerInfo;
  useEffect(() => {
    if (info === true) {
      myTimer.current.api.start();
    } else if (info === false) {
      myTimer.current.api.stop();
    }
  }, [info]);

  const time = useMemo(() => {
    return Date.now() + 300000;
  }, []);

  function complete() {
    props.timedOut();
  }
  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      complete();
    }
    return (
      <span>
        {minutes}:{seconds}
      </span>
    );
  };

  return <Countdown date={time} renderer={renderer} autoStart={false} ref={myTimer} />;
}
