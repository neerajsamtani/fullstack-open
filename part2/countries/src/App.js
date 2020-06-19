import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Countries from './components/Countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  const countryDataHook = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => setCountries(response.data))
  }

  useEffect(countryDataHook, [])

  const changeFilter = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <form onSubmit={event => event.preventDefault()}>
        find countries <input value={filter} onChange={changeFilter} ></input>
      </form>
      <Countries countries={countries} filter={filter} />
    </div>
  )
}
export default App;
