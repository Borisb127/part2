import React, { useState, useEffect } from 'react'

import weatherSrevice from '../services/weather';

const CountryDetail = ({ country }) => {
  const [weather, setWeather] = useState(null);
  
  // Fetching weather data
  useEffect(() => {
    weatherSrevice
      .getWeather(country.capital[0])
      .then(weatherData  => {
        console.log('weatherData promise fulfilled')
        setWeather(weatherData)
      })
      .catch(error => {
        console.error('Error getching countries:', error);
      })
  }, []);


    return (
        <div>
          <h1>{country.name.common}</h1>
          <div>Capital: {country.capital}</div>
          <div>Area: {country.area} km²</div>

          <h3>Languages</h3>
          <ul>
            {Object.values(country.languages).map(lang => (
              <li key={lang}>{lang}</li>
            ))}
          </ul>
          <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} width="150"/>
          
          { weather && (
            <div>
              <h2>Weather in {country.capital[0]}</h2>
              <div>Temperature: {weather.main.temp} Celcius</div>
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
                alt={weather.weather[0].description}
              />
              <div>Wind: {weather.wind.speed} m/s</div>
            </div>
          )}
        </div>
    )
}


export default CountryDetail