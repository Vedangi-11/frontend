import React,{useState} from 'react'
import './Modal.css'
export default function Modal() {
    const [modal,setmodal]=useState(true)
  return (
    <div>
        <div className={`main ${modal==false?'active':'main'}` }>

        </div>
        <button onClick={()=>{setmodal(!modal)}}>{modal==false?"Hide":"Show"}</button>
    </div>
  )
}
