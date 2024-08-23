import React from 'react'

const CountryDetail = ({ country }) => {

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
        </div>
    )
}


export default CountryDetail