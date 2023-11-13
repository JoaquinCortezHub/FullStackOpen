import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state (destructuring)
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral+ bad

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <br />
      <h2>Statistics</h2>
      good: {good}<br />
      neutral: {neutral}<br />
      bad: {bad}<br />
      all: {all}<br />
      average: {(good * 1 + neutral * 0 + bad * -1) / all}<br />
      positive percent: {((good * 100) / all).toFixed(2)}%<br/>
    </div>
  )
}

export default App