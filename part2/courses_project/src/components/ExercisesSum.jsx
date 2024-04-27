/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
const ExercisesSum = ({ course }) => { //? Import the course object props.
    let exerciseAmount = course.parts.reduce((sum, part) => { //?  navigate to the where the data is, and use reduce.
        return sum + part.exercises; //? Sum the data inside parts.
    }, 0);
    return(
        <p><b>Total amount of exercises in this course:</b> {exerciseAmount}</p>
    )
}

export default ExercisesSum;