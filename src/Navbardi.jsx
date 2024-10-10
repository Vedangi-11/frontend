import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import './Navbardi.css'
export default function Navbardi() {
    const [size,setsize]=useState(false)
    const bardi=()=>{
      setsize(!size)
      
    }
  return (
    <div>
       <div className={size?'nav expanded':'nav'}>
            <div className='cont'>
              <div className='elem'>Home</div>
              <div className='elem'>About</div>
            </div>
            <div className='bardisplay'  onClick={bardi} >
              {size?<button><FaBars/></button>:<button><FaBars/></button>}
            </div>
       </div>
    </div>
  )
}
