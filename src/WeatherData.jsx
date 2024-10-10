import React ,{useState}from 'react'
import './WeatherData.css'
import axios from 'axios'
export default function WeatherData() {

 const [data,setData]=useState([])
  let Display=(e)=>{
    e.preventDefault()
    let cityname=e.target.cityname.value
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=4d8fb5b93d4af21d66a2948710284366&units=metric`)
    .then((res)=>{
       setData([...data,res.data])
    })
    .catch((error)=>{
        console.log(error)
    })
  }
  return (
    <div className='weather'>
        <h2>Weather App</h2>
        <form onSubmit={Display}>
            <input type='text' placeholder='enter city' name='cityname'></input>
            <button type='submit'>Show</button> 
        </form>
        <div className='grid grid-cols-4 gap-4 py-2'>
        {data.map((v,i)=>{
            return(
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <img src={`https://api.openweathermap.org/img/w/${v.weather[0].icon}.png`} alt='ph'/>
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{v.name}</h5>
    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{v.main.temp}</p>
    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{v.weather[0].description}</p>
</div>
            )
        })}
        </div>
    </div>
  )
}
