import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  );
};

const StatisticLine = ({text, value}) => {
  return (
    <>
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
    </>
  );
};

const Statistics = ({good, neutral, bad, all}) => {  //* <--  Remember to use {} when passing specific name props
  const average = ((good * 1 + neutral * 0 + bad * -1) / all).toFixed(2);
  const positivePercentage = ((good * 100) / all).toFixed(2); //? <-- toFixed(x) shows the amount of numbers after decimal

  if (all == 0) {
    return (
      <div>
        <h1>Statistics</h1>
        No feedback given
      </div>
    );
  };
  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive percentage" value={`${positivePercentage}%`} />
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state (destructuring)
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <br />
      <Statistics good={good} neutral={neutral} bad={bad} all={all} />
    </div>
  );
};

export default App