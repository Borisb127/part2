
import React from 'react';

// Persons component
const Persons = ({ persons }) => {
    return (
        <div>
            {persons.map((p, index) => (
                <div key={index}>{p.name} - {p.number}</div>
                ))}
        </div>
    )
}

export default Persons