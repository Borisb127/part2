import React from 'react'

const Search = ({ searchValue, handleSearch }) => {

    return (
        <div>
            find countries <input value={searchValue} onChange={handleSearch} />
        </div>
    )
}


export default Search