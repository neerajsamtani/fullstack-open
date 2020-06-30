import axios from 'axios'
const url = 'http://localhost:3001/persons'

const getAll = () => (
    axios
        .get(url)
        .then(response => response.data)
)

const create = newPerson => (
    axios
        .post(url, newPerson)
        .then(response => response.data)
)

const update = (person, id) => (
    axios
        .put(`${url}/${id}`, person)
)

const deletePerson = (person) => (
    axios
        .delete(`${url}/${person.id}`)
)

export default { getAll, create, update, deletePerson }