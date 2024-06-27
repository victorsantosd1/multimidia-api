import { randomUUID } from 'node:crypto'
import { db } from './sql.js'

export class DatabaseSql {
    async list() {
        const times = await db.query`select * from times`
        return times.recordset
    }

    async create(times) {
        const timesId = randomUUID()

        const { nomeTime, posicao, pontos, gols, campeonato, vitorias, derrotas } = times

        await db.query`insert into times values (
            ${timesId}, ${nomeTime}, ${posicao}, ${pontos}, ${gols}, ${campeonato},${vitorias},${derrotas}
        )`
    }

    async update(id, time) {
        const { nomeTime, posicao, pontos, gols, campeonato, vitorias, derrotas } = times

        console.log(`update times
        set nameTime = '${nomeTime}', posicao = ${posicao}, pontos = ${Number(pontos)}, gols = '${gols}', campeonato = '${campeonato}', vitorias = '${vitorias}', derrotas = '${derrotas}'
        where id = '${id}'`)

        await db.query`update times
        set nameTime = '${nomeTime}', posicao = ${posicao}, pontos = ${Number(pontos)}, gols = '${gols}', campeonato = '${campeonato}', vitorias = '${vitorias}', derrotas = '${derrotas}'            
        where id = '${id}'`
    }

    async delete(id) {
        await db.query`delete from times where id = ${id}`
    }
}