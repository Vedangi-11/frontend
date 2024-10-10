import React, { useState } from 'react'

export default function Count() {
    const [count,setCount]=useState(0)
    let addData=()=>{
        setCount(count+1)
    }
  return (
    <div>
        <button onClick={addData}>+</button>
        <h1>{count}</h1>
        <button onClick={()=>{setCount(count-1)}}>-</button>
    </div>
  )
}
