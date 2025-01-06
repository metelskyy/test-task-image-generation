'use client';

import { useState, useEffect } from 'react';

const SECOND = 1_000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export function useTimer() {
  const calculateTime = () => {
    const nowDate = new Date();
    const currentDate = new Date();

    currentDate.setHours(23, 59, 59, 59);

    if (nowDate > currentDate) {
      currentDate.setDate(currentDate.getDate() + 1);
    }

    const timeDiff = currentDate.getTime() - nowDate.getTime();

    const days = Math.floor(timeDiff / DAY);
    const hours = Math.floor((timeDiff % DAY) / HOUR);
    const minutes = Math.floor((timeDiff % HOUR) / MINUTE);
    const seconds = Math.floor((timeDiff % MINUTE) / SECOND);

    return { days, hours, minutes, seconds };
  };

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTime());
    }, SECOND);

    return () => clearInterval(timer);
  }, []);

  return time;
}
