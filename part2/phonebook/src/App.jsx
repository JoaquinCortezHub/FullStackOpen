import { useEffect, useState } from 'react'
import axios from 'axios';
import personsService from './services/persons'
import Notification from './Notification';

const Filter = ({filter, handleFilterChange}) => (
  <div>
    Filter shown with: <input value={filter} onChange={handleFilterChange} />
  </div>
);

const PersonForm = ({addPerson, newName, handleNameChange, newPhone, handlePhoneChange}) => (
  <form onSubmit={addPerson}>
    <div>
      name: <input value={newName} onChange={handleNameChange} /><br />
      number: <input value={newPhone} onChange={handlePhoneChange} />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
);

const PersonDetails = ({person, onDelete}) => (
  <li key={person.id}>
    {person.name}: {person.number}
    <button onClick={() => onDelete(person.id)}>Delete</button>
  </li>
);

const PersonsList = ({ persons, filter, onDelete }) => {
  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredPersons.map(person => (
        <PersonDetails key={person.name} person={person} onDelete={onDelete}/>
      ))}
    </ul>
  );
};

const App = () => {;
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [filter, setFilter] = useState('');
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    personsService
    .getAll()
    .then(initialPersons => {
      setPersons(initialPersons)
    })
  }, [])


  const addPerson = (event) => {
    event.preventDefault();
    
    if (persons.some(person => person.name === newName)) { //* <-- 'some' returns TRUE if at least one of the values exists in the array
      setNotification(`${newName} is already in the list.`);
      setTimeout(() => {
        setNotification(null)
      }, 5000);
    }
    else {
      const newPerson = {name: newName, number: newPhone}; //? <-- To include extra data within the same person, just add to the array
      axios
        .post('http://localhost:3001/persons', newPerson)
        .then(response => {
          setPersons([...persons, response.data]);
          setNewName('');
          setNewPhone('');
          setNotification(`${newName} has been added to the list.`);
          setTimeout(() => {
            setNotification(null)
          }, 5000);
        })
        .catch(error => {
          setNotification(`Error Adding person: ${error.message}`);
          setTimeout(() => {
            setNotification(null)
          }, 5000);
        });
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

  const handleDelete = (id) => {
    const personToDelete = persons.find(person => person.id === id); //? <-- Finds the id to the person to delete
    const confirmed = window.confirm(`Delete ${personToDelete.name}?`);
    if (confirmed) {
      personsService
      .remove(id)
      .then(deletedId => {
        setPersons(persons.filter(person => person.id !== deletedId)); //? <-- new persons array set to all the names except the one deleted
        setNotification(`${personToDelete.name} has been deleted.`)
        setTimeout(() => {
          setNotification(null);
        }, 5000);
      })
      .catch(error => {
        setNotification(`Failed to delete ${personToDelete}. Error: ${error.message}`)
        setTimeout(() => {
          setNotification(null);
        }, 5000);
      })
    }
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={notification} />
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
      <PersonsList persons={persons} filter={filter} onDelete={handleDelete} />
      <br />
    </div>
  );
};

export default App

