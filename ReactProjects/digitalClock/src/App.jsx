import { useCallback, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let time = new Date().toLocaleTimeString();
  let [ctime, setCtime] = useState(time);
  let [hour, setHour] = useState(new Date().getHours()+5);
  let [minute, setMinute] = useState(new Date().getMinutes()+30);
  let [second, setSecond] = useState(new Date().getSeconds());

  setInterval(() => {updateTime()}, 1000);

  const updateTime = useCallback(() => {
    setHour((new Date().getUTCHours() + 5).toString().padStart(2, '0'));
    setMinute((new Date().getUTCMinutes() + 30).toString().padStart(2, '0'));
    setSecond((new Date().getUTCSeconds()).toString().padStart(2, '0'));
  }, [hour, minute, second,]);

  


  useEffect(() => {updateTime()}, [hour, minute, second]);

  // function updateTime() {
  //   setHour(new Date().getUTCHours() + 5);
  //   setMinute(new Date().getUTCMinutes() + 30);
  //   setSecond(new Date().getUTCSeconds());
  // }
  // setInterval(() => {
  //   updateTime()
  // }, 1000);

  return (
    <div className="items-center justify-center">
      <div id='clock' className="items-center justify-center bg-amber-400 flex m-10 rounded-2xl" >
        <div id='hour' className='bg-purple-500 flex flex-col m-6 p-3 rounded-3xl'>
          <div className='text-9xl'>{hour}</div>
          <div className='text-4xl text-center'>Hour</div>
        </div>
        
        <span className='text-[10rem] items-center justify-center mb-8'>:</span>
        
        <div id='minutes' className='bg-purple-500 flex flex-col m-6 p-3 rounded-3xl'>
          <div className='text-9xl'>{minute}</div>
          <div className='text-4xl text-center'>Minutes</div>
        </div>

        <span className='text-[10rem] items-center justify-center mb-8'>:</span>
        
        <div id='Seconds' className='bg-purple-500 flex flex-col m-6 p-3 rounded-3xl'>
          <div className='text-9xl'>{second}</div>
          <div className='text-4xl text-center'>Seconds</div>
        </div>

      </div>
    </div>
  )
}

export default App
