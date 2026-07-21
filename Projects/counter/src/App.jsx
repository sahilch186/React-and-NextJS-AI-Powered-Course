import { useState } from "react"

export default function App(){
  const[count, setCount] = useState(0);
  const[countStarter, setCountStarter] = useState(0);
  return (
    <>
    <h3>Current count is: </h3>
    <h1>{count}</h1>
    <button onClick={() => setCount((prev) => prev + 1)}>Increase (+)</button>
    <button onClick={() => setCount((prev) => Math.max(prev - 1, 0))}>Decrease (-)</button>
    <button onClick={() => setCount((prev) => 0)}>Reset (0)</button>
    <br/>
    <input type="text" value={countStarter} onChange={(e) => setCountStarter(Number(e.target.value))} />
    <button onClick={() => {setCount((prev) => countStarter); setCountStarter(0) }}>Set count to {countStarter}</button>
    </>
  )
}