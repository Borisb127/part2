import { useState } from 'react';
;


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

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567' }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');



  // Handle input changes
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }


  

// Validation function
  const validateInputs = () => {
    const validations = [
      {
        test: !/\S/.test(newName),
        message: 'Name cannot be empty or just space.'
      },
      {
        test: !/\S/.test(newNumber),
        message: 'Number cannot be empty or just space.'
      },
      {
        test: !/^[A-Za-z ]+$/.test(newName),
        message: 'Name can contain only letters.'
      },
      {
        test: !/^[0-9- ]+$/.test(newNumber),
        message: 'Number can contain only digits and dashes'
      },
      {
        test: persons.some(personName => personName.name === newName),
        message: `${newName} is already added to phonebook`
      }
    ]

    const failedValidation = validations.find(validation => validation.test)
    if (failedValidation) {
      alert(failedValidation.message)
      return false
    }
    
    return true
  }




  // Handle form submission
  const addPerson = (event) => {
    event.preventDefault()

    if (validateInputs()) {
      const personObject = { name: newName, number: newNumber } 
      setPersons(prevPersontate => [...prevPersontate, personObject])
      setNewName('');
      setNewNumber('');
    } 


  }



  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons persons={persons}/>
    </div>
  )
}

export default App