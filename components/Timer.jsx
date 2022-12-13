import React, { useRef, useEffect, useMemo } from "react";
import Countdown from "react-countdown";

export default function Timer(props) {
  const toMilliseconds = (min, sec) => min * 60000 + sec * 1000;
  const time = useMemo(() => {
    if (!props.newTimeLeft) {
      return Date.now() + 300000;
    } else {
      return Date.now() + toMilliseconds(props.newTimeLeft[0], props.newTimeLeft[1]);
    }
  }, [props.newTimeLeft]);
  const myTimer = useRef(null);
  const info = props.timerInfo;
  useEffect(() => {
    if (info === true) {
      myTimer.current.api.start();
    } else if (info === false) {
      myTimer.current.api.stop();
    }
  }, [info, props]);

  function complete() {
    props.timedOut();
  }
  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      complete();
    }
    return (
      <span id="timerTime">
        {minutes}:{seconds}
      </span>
    );
  };

  return <Countdown date={time} renderer={renderer} autoStart={false} ref={myTimer} />;
}
