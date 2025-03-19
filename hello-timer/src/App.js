
import React, { useState } from 'react';
import Timer from './Timer';

function App() {
  const currDate = new Date();
  const [isRunning, setIsRunning] = useState(false);

 const handleStart = () => {
   setIsRunning(true);
 };

 const handleStop = () => {
   setIsRunning(false);
 };

const toggleTimer = () => {setIsRunning(!isRunning)}

 return (
   <div>
     <h1>Hello, Paulo Henrique BS!</h1>
     <h2>The time now is {currDate.toLocaleTimeString()}.</h2>
     <h2>The time now is {currDate.toLocaleDateString()}.</h2>
     <Timer isRunning={isRunning} />
     <button onClick={handleStart}>Start</button>
     <button onClick={handleStop}>Stop</button>
     <button onClick={toggleTimer}>Start/Stop</button>
   </div>
 );
}

export default App;