import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Clock from './pages/Clock';

function App() {
  let [time, setTime] = useState(new Date());
  let today = useRef(new Date());
  useEffect(() => {
    console.log('useEffect called');
    const duration = 1000;
    const id = setInterval(() => {
      setTime(new Date()); // 현재 시각 갱신
      console.log('today', time.toLocaleTimeString());
    }, duration);

    return () => {
      console.log('clearInterval');
      clearInterval(id);
    };
  }, []);

  return (
    <div className="flex flex-row w-screen App">
      <Clock today={today.current} />
      <Clock today={time} />
    </div>
  );
}

export default App;
