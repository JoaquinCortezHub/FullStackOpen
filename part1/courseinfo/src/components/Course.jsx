const Header = ({courseName}) => {
    return <h2>{courseName}</h2>;
};

const Part = ({part}) => {
    return (
        <p>{part.name}: {part.exercises} exercises</p>
    );
};

const Content = ({parts}) => {
    return (
        <div>
            {parts.map((part) => (
            <Part key={part.id} part={part} /> //? <-- Goes over the 'part' array and returns key and content
        ))}
        </div>
    );
};

const Course = ({course}) => {
    return (
        <div>
            <Header courseName={course.name}/>
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    );
};

const Total = ({parts}) => {
    const totalExercises = parts.reduce( //? <-- Goes over the amount of exercises and returns the sum
    (total, part) => total + part.exercises, 0);
    return (
        <div>
            <p>Total Exercises: {totalExercises}</p>
        </div>
    );
};

export default Course