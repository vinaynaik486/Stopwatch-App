import './index.css'
import { useState, useEffect } from 'react';

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
    else if (!running) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [running]);

  return (
    <div className='flex flex-col justify-center items-center scroll-py-9 '>
      <h1 className='text-2xl font-semibold'>Stopwatch</h1>
      <div className='text-xl font-semibold py-4' >
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div className='w-1/3 max-w-sm flex flex-row justify-evenly'>
        {
          running ?
            (<button className='border border-black  bg-red-400 rounded-sm px-4 py-1 hover:bg-red-500' onClick={() => { setRunning(false) }} >Stop</button>)
            :
            (<button className='border border-black  bg-red-400  rounded-sm px-4 py-1 hover:bg-red-500' onClick={() => { setRunning(true) }} >Start</button>)
        }

        <button className='border border-black bg-red-400 rounded-sm px-2.5 py-1 hover:bg-red-500 ' onClick={() => { setTime(0), setRunning(false) }} >Reset</button>
      </div>
    </div>
  )
}

export default App
