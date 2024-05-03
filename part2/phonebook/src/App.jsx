/* eslint-disable no-unused-vars */
import { useState } from 'react'
import FilterBar from './components/FilterBar';
import PersonForm from './components/PersonForm';
import PersonList from './components/PersonList';
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    ])
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

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