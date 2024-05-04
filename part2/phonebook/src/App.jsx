/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import axios from 'axios';
import FilterBar from './components/FilterBar';
import PersonForm from './components/PersonForm';
import PersonList from './components/PersonList';
const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => { //? Fetches the data from the server.
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };
  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const addName = (e) => {
    e.preventDefault(); //? Prevents the page from refreshing.
    const existingName = persons.find(person => person.name === newName);
    const existingNumber = persons.find(person => person.number === newNumber);
    if (existingName) { 
      alert(`${newName} is already in the list.`) //? Checks if the new name is already in the phonebook.
      return;
    }
    else if (existingNumber) { 
      alert(`${newNumber} is already in the list.`) //? Checks if the new number is already in the phonebook.
      return;
    }
    const personObject = { //? Adds the new info to the person object.
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  };

  const filteredPersons = persons.filter(person => //? Filters the persons array to match what's being written by the user.  
  person.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <h2>Add a new person</h2>
      <PersonForm addName={addName} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <FilterBar filter={filter} setFilter={setFilter} />
      <ul>
        <PersonList filteredPersons={filteredPersons} />
      </ul>
    </div>
  )
}

export default App