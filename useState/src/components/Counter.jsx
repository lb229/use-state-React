import { useState } from "react"
import { CounterDisplay } from "./CounterDisplay"

export function Counter ({initialValue = 0, incrementBy = 1}){
  const [counter, setCount] = useState(initialValue)

  useEffect(() => {console.log(`Counter Value: ${counter}`)}, [counter, initialValue])

  function handleIncrementCounter (){
    setCount((c) => c + incrementBy)
  }
  function handleDecrementCounter (){
    setCount((c) => c - incrementBy)
  }
  function handleResetCounter (){
    setCount(initialValue)
  }
  return (
    <div>
      <CounterDisplay counter={counter}/>

      <button onClick={handleIncrementCounter}>Increment</button>
      <button onClick={handleDecrementCounter}>Decrement</button>
      <button onClick={handleResetCounter}>Reset</button>
    </div>
  )
}