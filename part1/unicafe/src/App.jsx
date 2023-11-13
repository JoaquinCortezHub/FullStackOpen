import { useState } from 'react'

const Statistics = ({good, neutral, bad, all}) => {  //* <--  Remember to use {} when passing specific name props
  const average = (good * 1 + neutral * 0 + bad * -1) / all;
  const positivePercentage = ((good * 100) / all).toFixed(2); //? <-- toFixed(x) shows the amount of numbers after decimal

  if (all == 0) {
    return (
      <div>
        <h1>Statistics</h1>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <h1>Statistics</h1>
      good: {good}<br />
      neutral: {neutral}<br />
      bad: {bad}<br />
      all: {all}<br />
      average: {average}<br />
      positive percentage: {positivePercentage}%<br />
    </div>
  )
}

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
  )
}
export default App