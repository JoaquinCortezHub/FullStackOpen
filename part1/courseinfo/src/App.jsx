// Refactor code in 3 components: Header, Content & Total.
// Consts are still in APP but passed by props to other components.

const Header = ({courseName}) => {
  return <h1>{courseName}</h1>;
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
        <Part key={part.id} part={part} />
      ))}
    </div>
  );
};

const Course = ({course}) => {
  return (
    <div>
      <Header courseName={course.name}/>
      <Content parts={course.parts} />
    </div>
  );
};

// const Total = (props) => {
//   console.log(props)
//   const totalExercises = props.parts.reduce(
//     (total, part) => total + part.exercises, 0
//   );
//   return (
//     <div>
//       <p>Total Exercises: {totalExercises}</p>
//     </div>
//   );
// };

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}


export default App