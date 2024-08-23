import { useState, useEffect } from 'react';

import countryServcie from './services/country.js';

import CountryDetail from './components/CountryDetail.jsx';
import CountryList from './components/CountryList.jsx';
import Search from './components/Search.jsx';


function App() {
  const [search, setSearch] = useState('');
  const [countries, setCountries] = useState([]);
  const [countryDisplay, setCountryDisplay] = useState(null);

  // Fetching initial data
  useEffect(() => {
    countryServcie
      .getAll()
      .then(initialCountry => {
        console.log('promise fulfilled')
        setCountries(initialCountry)
      })
      .catch(error => {
        console.error('Error getching countries:', error);
      })
  }, []);



  // Handle input changes
  const handleSearch = (event) => {
    const searchValue = event.target.value;
    setSearch(searchValue)
    renderDisplay(searchValue);
  };

  


  // Function to determine what to display
  const renderDisplay = (searchValue) => {

    // Filter countries based on search input
    const filteredCountries = countries.filter(c => 
    c.name.common.toLowerCase().includes(searchValue.toLowerCase())
  );

    if(!searchValue) return setCountryDisplay(null);
    if(filteredCountries.length > 10) { setCountryDisplay ( <p>Too many matches, please specify another filter.</p> ) }
    else if(filteredCountries.length === 1) { setCountryDisplay  ( <CountryDetail country={filteredCountries[0]} /> ) }
    else if(filteredCountries.length === 0) { setCountryDisplay  ( <p>{`No mathes`}</p> ); }
    else { setCountryDisplay  ( <CountryList country={filteredCountries} onShowDetail={onShowDetail} /> ) }
  }

  // Function to show coutnry daetails
  const onShowDetail = (country) => {
    setCountryDisplay(<CountryDetail country={country} />)
    setSearch('');
  }


  return (
    <div>

      <Search searchValue={search} handleSearch={handleSearch} />
      
      {/* Display content */}
      {countryDisplay}

    </div>
  )
}

export default App
