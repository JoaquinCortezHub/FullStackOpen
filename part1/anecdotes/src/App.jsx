import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];
  
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const randomAnecdote = () => {
    const anecdoteIndex = Math.floor(Math.random() * anecdotes.length); //? <-- selects random anecdote
    setSelected(anecdoteIndex);
  };

  const anecdoteVote = () => {
    const newVote = [...votes];
    newVote[selected] += 1;
    setVotes(newVote);
  };

  const mostVotedAnecdote = votes.indexOf(Math.max(...votes)); //? <-- Returns the highest value in the 'votes' array

  return (
    <div>
      <div>
        <h2>Anecdote of the day</h2>
        {anecdotes[selected]}
        <br />
        Votes: {votes[selected]}
      </div>
      <br />
      <button onClick={randomAnecdote}>Random Anecdote</button>
      <button onClick={anecdoteVote}>Vote</button>

      {Math.max(...votes) > 0 && (
        <div>
          <h2>Most voted anecdote</h2>
          {anecdotes[mostVotedAnecdote]}
          <br />
          Votes: {votes[mostVotedAnecdote]}
        </div>
      )}
    </div>
  );
};

export default App