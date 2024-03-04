import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const server = fastify()

const database = new DatabaseMemory()


server.post('/videos', (req, res) => {
    const { title, description, duration } = req.body

    database.create({
        title,
        description,
        duration,
    })
    console.log(database.list())

    return res.status(201).send()
})

server.get('/videos', () => {
    const videos = database.list()

    console.log(videos)

    return videos
})

server.put('/videos/:id', () => {
    return 'Hello World'
})

server.delete('/videos', () => {
    return 'Hello World'
})

server.listen({
    port: 3333,
})

