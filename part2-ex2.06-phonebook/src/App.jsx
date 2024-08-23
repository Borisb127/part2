import { useState } from 'react';

// Persons component
const Persons = ({ persons }) => {
  return (
    <div>
      {persons.map((p, index) => (
        <p key={index}>{p.name}</p>
      ))}
    </div>
  );
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]);
  const [newName, setNewName] = useState('');

  // Handle input changes
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  // Handle form submission using functional update
  const addPerson = (event) => {
    event.preventDefault();
    
    const personObject = { name: newName };
    
    setPersons(prevPersons => [...prevPersons, personObject])
    setNewName('');
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  )
}

export default App