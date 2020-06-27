import React from 'react'

const Persons = ({ personsToShow, confirmDelete }) => {
  return (
    <div>
      {personsToShow().map(person => <p key={person.name} >{person.name} {person.number}
        <button onClick={() => confirmDelete(person)}>delete</button>
      </p>)}
    </div>
  )
}

export default Persons