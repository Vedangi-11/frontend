import React, { useState } from 'react'
import { MdOutlineContentCopy } from "react-icons/md";
import { CiLock } from "react-icons/ci";
function Passwordgener() {
    const [irange,setIrange]=useState(8)
    const [lowercase,setLowercase]=useState(false)
    const [number,setNumber]=useState(false)
    const [symbol,setSymbol]=useState(false)
    const [fvalue,setFvalue]=useState()
    let [v,setV]=useState(false)
    let copytext=()=>{
        let cp=document.getElementById("pcopy")
        cp.select()
        document.execCommand("copy")
    }
    let handlepassword=(e)=>{
        e.preventDefault()
        let up="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        let lc="abcdefghijklmnopqrstuvwxyz"
        let n="1234567890"
        let sb="~!@#$%&*?/\|"
        let p=''
        let fp=''
        if(v==false&& lowercase==false&& number==false && symbol==false){
            alert("select atleast one option")
        }
        else{
            if(v==true){
                p=up
            }
            if(lowercase==true){
                p=p+lc
            }
            if(number==true){
                p=p+n
            }
            if(symbol==true){
                p=p+sb
            }
            for(let i=0;i<irange;i++){
               fp=fp+p.charAt(Math.floor(Math.random(p)*(p.length)))
                setFvalue(fp)
            }
        }
    }
    return (
        <>
            <div className='w-[600px] text-white bg-black mx-auto my-[30px] rounded-4 '>
                <h6 className='text-center mx-[270px] pt-[16px] pb-[2px]'><CiLock size={38} /></h6>
                <h4 className='text-center py-4 pt-[0px] '>Password Generator</h4>
                <div className='flex mx-2'>
                    <input type='text' className='fs-4 w-[80%] text-black rounded-2 rounded-end-0 ms-4' id='pcopy' value={fvalue} />
                    <button className='bg-yellow w-[44px] px-[6px] h-[37px] py-1 my-0 rounded-2 rounded-start-0 ' onClick={copytext}><MdOutlineContentCopy size={29} /></button>
                </div>
                <div className='mx-[18px]'>
                    <form onSubmit={handlepassword}>
                        <label className='my-1 mb-[0px] pb-0 ms-4'>Range:{irange}</label>
                        <input type='range' onChange={(e)=>{setIrange(e.target.value)}} min={8} max={18} defaultValue={8} className='w-[88%] my-1 ms-4  my-4'></input>
                        <div className='flex py-2 ms-4'>
                            <label>Uppercase</label>
                            <input type='checkbox' onChange={(e)=>{setV(e.target.checked)}} className='mx-4'></input>
                        </div>
                        <div className='flex py-2 ms-4'>
                            <label>Lowercase</label>
                            <input type='checkbox'  onChange={(e)=>{setLowercase(e.target.checked)}}  className='mx-4'></input>
                        </div>
                        <div className='flex py-2 ms-4'>
                            <label>Numbers</label>
                            <input type='checkbox'  onChange={(e)=>{setNumber(e.target.checked)}}  className='mx-4'></input>
                        </div>
                        <div className='flex py-2 ms-4'>
                            <label>Symbols</label>
                            <input type='checkbox'onChange={(e)=>{setSymbol(e.target.checked)}}   className='mx-4'></input>
                        </div>
                        <div className='mx-[200px] w-[400px] py-4 my-1'>
                            <button className='h-[40px]'>Generate Password</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Passwordgener