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

const update = (person, id) => {
    return (
        axios
            .put(`${url}/${id}`, person)
            .catch(response => console.log(response.data))
    )
}

const deletePerson = (person) => (
    axios
        .delete(`${url}/${person.id}`)
        .catch(response => console.log(response.data))
)

export default { getAll, create, update, deletePerson }