import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <div>
       <h1>Counter Example</h1>
       <button  onClick={()=>{
        setCount(count+1)}
        }>+</button>
       count is {count}
       <button  onClick={()=>{
        setCount(count-1)}
        }>-</button>
      </div>
      <div>
        <button onClick={()=>{
        setCount(count+1)}
        }>Button clicked  {count} times</button>
      </div>
    </>
  )
}

export default App
