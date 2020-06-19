import React from 'react';
import CountryView from './CountryView'

const CountryList = ({ list, expandedCountries, setExpandedCountries }) => {
    return (
      <div>
        {list.map(country => {
          if (expandedCountries.some(expanded => expanded === country)) {
            return (
              <div key={country.name} >
                {country.name}
                <button onClick={() => { setExpandedCountries(expandedCountries.concat(country)) }}>
                  hide
                </button>
                <CountryView countryData={country} />
              </div>)
          }
          return (
            <div key={country.name} >
              {country.name}
              <button onClick={() => { setExpandedCountries(expandedCountries.concat(country)) }}>
                show
              </button>
            </div>)
        })}
      </div>
    )
  }

  export default CountryList