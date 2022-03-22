import React, { useState } from 'react'
import axios from 'axios'
import ShowTemp from './ShowTemp'

function App() {
    const [city, setCity] = useState("delhi")
    const [data, setData] = useState({
        description: "",
        temp: 0,
        temp_max: 0,
        temp_min: 0,
        humidity: 0,
        sunrise: 0,
        sunset: 0,
        country: "",
        timezone:0,
        lat:0,
        long:0,

    })

    const handleClick = () => {
        //API and data fetch...!!   
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=87cfa6b73d0fa2d7271feb7f97f98027#`)
            .then((response) => {
                setData({
                    description: response.data.weather[0].description,
                    temp: response.data.main.temp,
                    temp_max: response.data.main.temp_max,
                    temp_min: response.data.main.temp_min,
                    humidity: response.data.main.humidity,
                    sunrise: response.data.sys.sunrise,
                    sunset: response.data.sys.sunset,
                    country: response.data.sys.country,
                    city:response.data.name,
                    timezone:response.data.timezone,
                    lat:response.data.coord.lat,
                    long:response.data.coord.lon

                })
                setCity("")
            })
    }

    return (
        <>
            <div className='container text-center my-2'>
                <h1>Weather-App</h1>
                <input type="text" className='from-control' value={city} onChange={(e) => {
                    setCity(e.target.value) ;
                }} />
                <button className='btn btn-primary mx-2' type='submit' onClick={handleClick}>Get Weather</button>

            </div>

            <ShowTemp text ={data}m ></ShowTemp>
        </>
    )
}

export default App