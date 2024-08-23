import { useState, useEffect } from 'react';
import axios from 'axios';



function App() {
  const [search, setSearch] = useState('');
  const [countries, setCountries] = useState([]);

  // Fetch countries data when the component mounts
  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
      .catch(error => {
        console.error('Error getching countries:'. error);
      })
  }, []);


  // Handle input changes
  const handleSearch = (event) => {setSearch(event.target.value)};


  // Filter countries based on search input
  const filteredCountries = countries.filter(c => 
    c.name.common.toLowerCase().includes(search.toLowerCase())
  );

  // Function to determine what to display
  const showCoutnries = () => {

    if(filteredCountries.length > 10) {
      return <p>Too many matches, please specify another filter.</p>;
      
    } else if(filteredCountries.length === 1) {
      const country = filteredCountries[0];
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

    } else {
      return (
        <ul>
          {filteredCountries.map(c => (
            <li key={c.name.common}>{c.name.common}</li>
          ))}
        </ul>
      )
    }
  };




  return (
    <div>
      find countries <input value={search} onChange={handleSearch} />

      {/* Display the filtered country names */}
      {showCoutnries()}

    </div>
  )
}

export default App
