// Refactor code in 3 components: Header, Content & Total.
// Consts are still in APP but passed by props to other components.

const Header = (props) => {
  console.log(props)
  return (
    <h1>{props.course}</h1>
  )
};
const Part = (props) => {
  console.log(props)
  return (
    <p>{props.part.name}: {props.part.exercises} exercises</p>
  );
};

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
      
    </div>
  )
};

const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>Total Exercises: {props.Total}</p>
    </div>
  );
};

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  
  const totalExercises = part1.exercises + part2.exercises + part3.exercises;

  return (
    <div>
      <Header course={course} />
      <Content part1={part1}
              part2={part2}
              part3={part3}
      />
      <Total Total={totalExercises} />
    </div>
  )
}


export default App