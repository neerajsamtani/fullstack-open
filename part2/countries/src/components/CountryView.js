import React, { useState, useEffect } from 'react';
import axios from 'axios'

const CountryView = ({ countryData }) => {
    const api_key = process.env.REACT_APP_API_KEY
    const [weather, setWeather] = useState({
      current: {
        temperature: '',
        wind_dir: '',
        wind_speed: '',
        weather_icons: ''
      }
    })
  
    const weatherDataHook = () => {
      axios
        .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${countryData.name}`)
        .then(response => setWeather(response.data))
    }
    useEffect(weatherDataHook, [])
  
    return (
      <div>
        <h1>{countryData.name}</h1>
        <p>capital {countryData.capital}</p>
        <p>population {countryData.population}</p>
        <h3>languages</h3>
        <ul>
          {countryData.languages.map(language => <li key={language.iso639_2} >{language.name}</li>)}
        </ul>
        <img alt="flag" width="200" src={countryData.flag} ></img>
        <h3>Weather in {countryData.name}</h3>
        <p><strong>temperature: </strong> {weather.current.temperature} Celcius </p>
        <img alt="weather icon" width="100" src={weather.current.weather_icons} ></img>
        <p><strong>wind: </strong> {weather.current.wind_speed} mph direction {weather.current.wind_dir} </p>
      </div>
    )
  }

export default CountryView