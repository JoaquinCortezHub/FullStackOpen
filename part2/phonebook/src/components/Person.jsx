/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
const Person = ({person}) => {
    return(
        <div>
            <li>
                {person.name} - {person.number}
            </li>
        </div>
    )
};

export default Person;