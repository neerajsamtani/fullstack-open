const express = require('express')
const cors = require('cors')
var morgan = require('morgan')
const app = express()

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.static('build'))
// Configure morgan to show request data while logging
morgan.token('data', function (req, res) { return JSON.stringify(req.body) })
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :data'))

let persons = [
    {
        "id": 1,
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": 2,
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": 3,
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": 4,
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
]

app.get('/', (request, response) => {
    response.send("Home Page")
})

app.get('/info', (request, response) => {
    const text = `<p>Phonebook has info for ${persons.length} people</p> <p>${new Date()}</p>`
    response.send(text)
})

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const phonebookEntry = persons.find(person => person.id === Number(id))
    if (phonebookEntry) {
        response.json(phonebookEntry)
    }
    else {
        response.status(404).send()
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)

    response.status(204).send()
})

const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

const generateId = () => {
    return getRandomIntInclusive(1, 3000)
}

const nameInPhonebook = (name) => {
    return persons.filter(person => person.name === name).length > 0
}

app.post('/api/persons', (request, response) => {
    const body = request.body
    if (!body.name) {
        return response.status(400).json({
            error: "name missing"
        })
    }
    else if (!body.number) {
        return response.status(400).json({
            error: "number missing"
        })
    }
    else if (nameInPhonebook(body.name)) {
        return response.status(400).json({
            error: "name must be unique"
        })
    }

    const newPerson = {
        name: body.name,
        number: body.number,
        id: generateId()
    }

    persons = persons.concat(newPerson)
    response.json(newPerson)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})