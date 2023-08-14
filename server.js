const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 8005

app.use(express.json())
app.use(express.static('public'))
app.use(cors())

const agents = [
    {
        "id": 1,
        "name": "Brimstone",
        "role": "Controller",
    },
    {
        "id": 2,
        "name": "Viper",
        "role": "Controller",
    },
    {
        "id": 3,
        "name": "Omen",
        "role": "Controller",
    },
    {
        "id": 4,
        "name": "Killjoy",
        "role": "Sentinel",
    },
    {
        "id": 5,
        "name": "Cypher",
        "role": "Sentinel",
    },
    {
        "id": 6,
        "name": "Sova",
        "role": "Initiator",
    },
    {
        "id": 7,
        "name": "Sage",
        "role": "Sentinel",
    },
    {
        "id": 8,
        "name": "Phoenix",
        "role": "Duelist",
    },
    {
        "id": 9,
        "name": "Jett",
        "role": "Duelist",
    },
    {
        "id": 10,
        "name": "Reyna",
        "role": "Duelist",
    },
    {
        "id": 11,
        "name": "Raze",
        "role": "Duelist",
    },
    {
        "id": 12,
        "name": "Breach",
        "role": "Initiator",
    },
    {
        "id": 13,
        "name": "Skye",
        "role": "Initiator",
    },
    {
        "id": 14,
        "name": "Yoru",
        "role": "Duelist",
    },
    {
        "id": 15,
        "name": "Astra",
        "role": "Controller",
    },
    {
        "id": 16,
        "name": "KAY/O",
        "role": "Initiator",
    },
    {
        "id": 17,
        "name": "Chamber",
        "role": "Sentinel",
    },
    {
        "id": 18,
        "name": "Neon",
        "role": "Duelist",
    },
    {
        "id": 19,
        "name": "Fade",
        "role": "Initiator",
    },
    {
        "id": 20,
        "name": "Harbor",
        "role": "Controller",
    },
    {
        "id": 21,
        "name": "Gekko",
        "role": "Initiator",
    },
    {
        "id": 22,
        "name": "Deadlock",
        "role": "Sentinel",
    },
]

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/agents', (request, response) => {
    response.json(agents)
})

app.get('/api/agents/:agent', (request, response) => {
    const agentName = request.params.agent.toLowerCase()
    const filteredList = agents.filter(agent => agent.name.toLowerCase() === agentName)
    response.json(filteredList)
})

app.get('/api/roles/:role', (request, response) => {
    const roleName = request.params.role.toLowerCase()
    const filteredList = agents.filter(agent => agent.role.toLowerCase() === roleName)
    response.json(filteredList)
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

