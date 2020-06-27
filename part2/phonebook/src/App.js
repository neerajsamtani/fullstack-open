import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import phonebookService from './services/phonebook'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    phonebookService
      .getAll()
      .then(initialData => setPersons(initialData))
  }, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const alreadyInPhonebook = (name) => {
    const samePerson = persons.filter(person => person.name === name)
    return samePerson.length > 0
  }

  const showPerson = (person) => {
    return (person.name.toLowerCase().indexOf(filter.toLowerCase()) >= 0)
  }

  const personsToShow = () => {
    return persons.filter(person => showPerson(person))
  }

  const confirmDelete = (person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      phonebookService
        .deletePerson(person)
        .then(() => setPersons(persons.filter(personFromList => personFromList !== person)))
    }
  }

  const addName = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }

    if (alreadyInPhonebook(newPerson.name)) {
      if (window.confirm(`${newPerson.name} is already added to phonebook, replace the old number with a new one?`)) {
        const oldPersonId = persons.find(p => p.name === newPerson.name).id
        phonebookService
          .update(newPerson, oldPersonId)
          .then(() => setPersons(persons.map(person => person.name !== newPerson.name ? person : newPerson)))
      }
    }
    else {
      phonebookService
        .create(newPerson)
        .then(returnedPerson => setPersons(persons.concat(returnedPerson)))
    }
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm addName={addName} newName={newName} handleNameChange={handleNameChange}
        newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} confirmDelete={confirmDelete} />
    </div>
  )
}

export default App
