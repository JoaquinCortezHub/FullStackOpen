/* eslint-disable react/prop-types */
import Header from "./Header";
import Content from "./Content";
import ExercisesSum from "./ExercisesSum";
const Course = ({course}) => {
    return(
        <div>
            <Header course={course} />
            <Content course={course} />
            <ExercisesSum course={course} />
        </div>
    );
}

export default Course;