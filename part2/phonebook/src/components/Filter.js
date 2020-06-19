import React from 'react'

const Filter = ({ value, onChange }) => (
  <form onSubmit={event => event.preventDefault()}>
    <div>
      filter shown with <input value={value} onChange={onChange} />
    </div>
  </form>
)

export default Filter