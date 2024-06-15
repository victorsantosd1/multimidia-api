import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js";

const server = fastify();

const database = new DatabaseMemory()

server.get('/times', () => {
    return database.list()
})

server.post('/times', (req, res) => {
    const { nomeTime, posição, pontos, gols, campeonato, vitórias, derrotas } = req.body

    database.create({
        nomeTime,
        posição,
        pontos,
        gols,
        campeonato,
        vitórias,
        derrotas
    })

    return res.status(201).send()
})

server.put('/times/:id', (req, res) => {
   const id = req.params.id
   const { nomeTime, posição, pontos, gols, campeonato, vitórias, derrotas } = req.body

   database.update(id, {
        nomeTime,
        posição,
        pontos,
        gols,
        campeonato,
        vitórias,
        derrotas
   })

   res.status(204).send()
})

server.delete('/times/:id', (req, res) => {
    const id = req.params.id
    database.delete(id)
    return res.status(200).send()
})

server.listen({
    port: 3333
})