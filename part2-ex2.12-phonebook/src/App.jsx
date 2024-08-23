import { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';



const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filterName, setFilterName] = useState('');


  // Fetch initial persons data from server
  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, []);



  // Handle input changes
  const handleNameChange = (event) => {setNewName(event.target.value)}
  const handleNumberChange = (event) => {setNewNumber(event.target.value)}
  const handleFilterChange = (event) => {setFilterName(event.target.value)}


  

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
      axios
        .post('http://localhost:3001/persons', personObject)
        .then(response => {
          setPersons(prevPersontate => [...prevPersontate, response.data]);
          setNewName('');
          setNewNumber('');
        })
        
    } 
  }


  const filteredPersons = persons.filter(person => 
    person.name.toLowerCase().includes(filterName.toLocaleLowerCase())

  )


  return (
    <div>

      <h2>Phonebook</h2>
      <Filter filterName={filterName} handleFilterChange={handleFilterChange}/>
  

      <h2>Add a new</h2>
      <PersonForm addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}/>    

      <h2>Numbers</h2>
      <Persons persons={filteredPersons}/>
      
    </div>
  )
}

export default App