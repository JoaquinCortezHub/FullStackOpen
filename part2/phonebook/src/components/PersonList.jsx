/* eslint-disable react/prop-types */
import Person from "./Person";
const PersonList = ({filteredPersons}) => {
    return(
        <div>
            {filteredPersons.map(person => (
            <Person key={person.id} person={person}/>
            ))}
        </div>
    )
};

export default PersonList;
