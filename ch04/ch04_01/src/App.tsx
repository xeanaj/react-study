import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Clock from './pages/Clock';
import { useClock } from './hooks';
import CreateOrUseTest from './pages/useOrCreateTest';
import Memo from './pages/Memo';
import { Title } from './components';
import Callback from './pages/Callback';
import { ResponsiveProvider } from './contexts';
import ResponsiveContextTest from './pages/ResponsiveContextTest';

function App() {
  let chTime = useClock();
  let [time, setTime] = useState(new Date());
  let today = useRef(new Date());

  useEffect(() => {
    console.log('useEffect called');
    const duration = 2000;
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
    <ResponsiveProvider>
      <>
        <div className="flex flex-row w-screen App">
          <Clock today={today.current} />
          <Clock today={time} />
          <Clock today={chTime} />
        </div>
        <CreateOrUseTest />
        <Title>메모</Title>
        <Memo />
        <Callback />
        <ResponsiveContextTest />
      </>
    </ResponsiveProvider>
  );
}

export default App;
