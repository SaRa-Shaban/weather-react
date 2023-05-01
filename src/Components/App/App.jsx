import axios from 'axios'
import React, { useState, useEffect } from 'react'

export default function App() {


  const [location, setLocation] = useState('');
  const [data, setData] = useState({});



  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=bb37880f4d31426d17b23abcb70e25af`

  // search no error in console
  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        // console.log(response.data)
      })
      setLocation('')
    }
  }


  // search error in console
  // useEffect(() => {
  //   let getData = async () => {
  //     let response = await axios.get(url)
  //     // console.log(response);
  //     // console.log(response.data);
  //     setData(response.data)
  //   }

  //   if (location) {
  //     getData();
  //   }
  // }, [location])

  // console.log(data.name);
  // console.log(data.main.temp);

  return (
    <>

      <div className='app pt-5'>
        <div className="container">
          
      <input type="text" placeholder='Enter location' className='rounded-5'
            onChange={(e) => { setLocation(e.target.value) }}
            value={location}
            onKeyPress={searchLocation}
          />


          <div className="top">

            <div className="locTemp">
              <div className="location">
                <p>{data.name}</p>

              </div>
              <div className="temp">
                {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
                {/* <h1 className='bold'>{data.main && data.main.temp.toFixed()}°F</h1> */}
              </div>
            </div>

            <div className="description">
              {data.weather ? <p>{data.weather[0].main}</p> : null}
            </div>
          </div>

          {data.name !== undefined &&
            <div className="bottom p-2">

              <div className="feels">
                {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null}
                <p className='text'>Feels Like</p>
              </div>

              <div className="humidity">
                {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
                <p className='text'>Humidity</p>
              </div>

              <div className="wind">
                {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
                <p className='text'>Wind Speed</p>
              </div>
            </div>
          }

        </div>

      </div>
    </>
  )
}
