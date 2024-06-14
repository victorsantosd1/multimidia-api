import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js";

const server = fastify();

const database = new DatabaseMemory()

server.get('/alunos', () => {
    return database.list()
})

server.post('/alunos', (req, res) => {
    const { nome, idade, matriculado, time } = req.body

    database.create({
        nome,
        idade,
        matriculado,
        time
    })

    return res.status(201).send()
})

server.put('/alunos/:id', (req, res) => {
   const id = req.params.id
   const { nome, idade, matriculado, time } = req.body

   database.update(id, {
       nome,
       idade,
       matriculado,
       time
   })

   res.status(204).send()
})

server.delete('/alunos/:id', (req, res) => {
    const id = req.params.id
    database.delete(id)
    return res.status(200).send()
})

server.listen({
    port: 3333
})