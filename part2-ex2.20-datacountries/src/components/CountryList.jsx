import React from 'react'



const CountryList = ({ country, onShowDetail }) => {

    return (
        <div>
            <ul>
                {country.map(c => (
                    <li key={c.name.common}>
                        {c.name.common}
                        <button onClick={() => onShowDetail(c)}>show</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}


export default CountryList