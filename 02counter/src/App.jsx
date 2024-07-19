import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)

  // let counter = 15;

  const addValue = () => {
    if(counter === 20){
      alert("Maximum limit reached");
    }
    // counter = counter + 1;
    // setCounter(counter);
    else {
      setCounter(counter + 1);
    }
  }

  const removeValue = () => {
    if(counter === 0){
      alert("Minimum limit reached");
    }
    // counter = counter - 1;
    // setCounter(counter);
    else {
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br></br>
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
