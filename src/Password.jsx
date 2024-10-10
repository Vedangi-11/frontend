import React, { useState } from 'react'

export default function Password() {
    const[passowrds,setpasswords]=useState(false)
    let changeinput=()=>{
        setpasswords(!passowrds)
    }
  return (
    <div>
        <input type={passowrds===true?"password":"text"}></input>
        <button onClick={changeinput}>{passowrds===true?"Show":"Hide"}</button>
    </div>
  )
}
