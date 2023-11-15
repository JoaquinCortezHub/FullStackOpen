import { useState } from 'react'

const App = () => {;
  const [persons, setPersons] = useState([{ name: 'Arto Hellas', phone: '12345678' }]);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');

  const addPerson = (event) => {
    event.preventDefault();
    
    if (persons.some(person => person.name === newName)) { //*'some' returns TRUE if at least one of the values exists in the array
      alert(`${newName} is already added to the list`)
    }
    else {
      const newPerson = {name: newName, phone: newPhone};
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

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
        name: <input value={newName} onChange={handleNameChange} /> <br />
        phone:<input value={newPhone} onChange={handlePhoneChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => (
          <li key={person.name}>
            {person.name}: {person.phone}
          </li>))}
      </ul>
      ... 
      <br />
      debug name: {newName} 
      <br />
      debug phone: {newPhone}
    </div>
  );
};

export default App