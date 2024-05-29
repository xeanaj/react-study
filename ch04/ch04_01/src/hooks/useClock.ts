import { useEffect, useState } from 'react';
import { useInterval } from './useInterval';

export const useClock = () => {
  const [time, setTime] = useState(new Date());
  useInterval(() => {
    console.log('hook', time.toLocaleTimeString());
    setTime(new Date());
  });
  return time;
};
