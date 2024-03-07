// import React from 'react'
import { useState } from 'react'

const Counter = () => {
    let [counter, setCounter]=useState(0)

  const addvalue=()=>{
    console.log("clicked",counter);
    setCounter(counter+1)
  }
  const removeValue=()=>{
    console.log("clicked",counter);
    setCounter(counter-1)
  }
  return (
    <div>
      <h1>Chai aur React</h1>
      <h1>Counter App</h1>
      <h2>Count : {counter}</h2>
      <button onClick={addvalue}>Add</button>
      <br/>
      <button onClick={removeValue}>Remove</button>
    
    </div>
  )
}

export default Counter
