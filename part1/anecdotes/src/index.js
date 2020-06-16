import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  // Create an array of 6 0s. [0, 0, 0, 0, 0, 0]
  const [votes, setVotes] = useState(Array.apply(null, new Array(6)).map(Number.prototype.valueOf, 0))

  const handleClick = () => setSelected(Math.floor(Math.random() * props.anecdotes.length))
  const handleVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  const maxIndex = votes.indexOf(Math.max(...votes));

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <p>has {votes[selected]} votes</p>
      <p><button onClick={handleClick} >next anecdote</button></p>
      <p><button onClick={handleVote} >vote</button></p>
      <h1>Anecdote with the most votes</h1>
      {props.anecdotes[maxIndex]}
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)