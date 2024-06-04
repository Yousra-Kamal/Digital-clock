import { useEffect, useState } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    //when we mount, we start an interval that updates the time every second
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    //when we unmount, we clear the interval to stop updating the time every second and prevent memory leaks
    return () => {
      clearInterval(interval);
    };
  }, []);

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const amPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;

    return `${padZero(hours)} : ${padZero(minutes)} : ${padZero(
      seconds
    )} ${amPm}`;
  }

  function padZero(num) {
    return num < 10 ? `0${num}` : num;
  }

  return (
    <div className="clock-container">
      <div className="clock">
        <span>{formatTime()}</span>
      </div>
    </div>
  );
}

export default DigitalClock;
