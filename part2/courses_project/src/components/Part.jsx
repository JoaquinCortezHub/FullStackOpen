/* eslint-disable react/prop-types */
const Part = ({ part }) => {
    return(
        <p id={part.id}>{part.name} - Exercises: {part.exercises}</p> 
    );
}

export default Part;