import { fastify } from "fastify";
import cors from '@fastify/cors';
import { DatabaseMemory } from "./database/database-memory.js";
import { DatabaseSql } from "./database/database-sql.js"

const server = fastify();

await server.register(cors,{
    origin:'*',
    methods:['GET']
})

const database = new DatabaseSql()

server.get('/times', async () => {
    return await database.list()
})

server.post('/times', async (req, res) => {
    const { nomeTime, posicao, pontos, gols, campeonato, vitorias, derrotas } = req.body

    await database.create({
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

server.put('/times/:id', async (req, res) => {
   const id = req.params.id
   const { nomeTime, posicao, pontos, gols, campeonato, vitorias, derrotas } = req.body

   await database.update(id, {
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

server.delete('/times/:id', async (req, res) => {
    const id = req.params.id
    await database.delete(id)
    return res.status(200).send()
})

server.listen({
    port: 3333
})