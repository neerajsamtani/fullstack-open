import React, { useState } from 'react';
import CountryView from './CountryView'
import CountryList from './CountryList'

const Countries = ({ countries, filter }) => {
    const [expandedCountries, setExpandedCountries] = useState([])
  
    const shouldShowCountry = (country) => {
      return (country.name.toLowerCase().indexOf(filter.toLowerCase()) >= 0)
    }
    const countriesToShow = () => {
      return countries.filter(country => shouldShowCountry(country))
    }
    const list = countriesToShow()
  
    if (filter.length === 0) {
      return (<div></div>)
    }
    else if (list.length > 10) {
      return (
        <div>
          Too many matches, specify another filter
        </div>
      )
    }
    else if (list.length === 1) {
      return (
        <CountryView countryData={list[0]} />
      )
    }
    else {
      return (
        <CountryList list={list}
          expandedCountries={expandedCountries}
          setExpandedCountries={setExpandedCountries} />
      )
    }
  }

  export default Countries