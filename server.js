import { fastify } from "fastify";
import cors from '@fastify/cors';
import { DatabaseMemory } from "./database-memory.js";

const server = fastify();

await server.register(cors,{
    origin:'*',
    methods:['GET']
})

const database = new DatabaseMemory()

server.get('/times', () => {
    return database.list()
})

server.post('/times', (req, res) => {
    const { nomeTime, posicao, pontos, gols, campeonato, vitorias, derrotas } = req.body

    database.create({
        nomeTime,
        posicao,
        pontos,
        gols,
        campeonato,
        vitorias,
        derrotas
    })

    return res.status(201).send()
})

server.put('/times/:id', (req, res) => {
   const id = req.params.id
   const { nomeTime, posicao, pontos, gols, campeonato, vitorias, derrotas } = req.body

   database.update(id, {
        nomeTime,
        posicao,
        pontos,
        gols,
        campeonato,
        vitorias,
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