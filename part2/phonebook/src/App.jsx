import { useState } from 'react'

const Filter = ({filter, handleFilterChange}) => (
  <div>
    Filter shown with: <input value={filter} onChange={handleFilterChange} />
  </div>
);

const PersonForm = ({addPerson, newName, handleNameChange, newPhone, handlePhoneChange}) => (
  <form onSubmit={addPerson}>
    <div>
      name: <input value={newName} onChange={handleNameChange} /><br />
      phone: <input value={newPhone} onChange={handlePhoneChange} />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
);

const PersonDetails = ({person}) => (
  <li key={person.name}>
    {person.name}: {person.phone}
  </li>
);

const PersonsList = ({ persons, filter }) => {
  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredPersons.map(person => (
        <PersonDetails key={person.name} person={person}/>
      ))}
    </ul>
  );
};

const App = () => {;
  const [persons, setPersons] = useState([{ name: 'Arto Hellas', phone: '12345678' }]);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [filter, setFilter] = useState('');

  const addPerson = (event) => {
    event.preventDefault();
    
    if (persons.some(person => person.name === newName)) { //* <-- 'some' returns TRUE if at least one of the values exists in the array
      alert(`${newName} is already added to the list`)
    }
    else {
      const newPerson = {name: newName, phone: newPhone}; //? <-- To inlude extra data within the same person, just add to the array
      setPersons([...persons, newPerson]);
      setNewName('');
      setNewPhone('');
    };
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  };

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm
      addPerson={addPerson}
      newName={newName}
      handleNameChange={handleNameChange}
      newPhone={newPhone}
      handlePhoneChange={handlePhoneChange}
      />
      <h2>Numbers</h2>
      <PersonsList persons={persons} filter={filter} />
      <br />
    </div>
  );
};

export default App

