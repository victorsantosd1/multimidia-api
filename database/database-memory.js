import { randomUUID } from 'node:crypto'

export class DatabaseMemory {
    #times = new Map()

    list() {
        return Array.from(this.#times.entries())
            .map((timesArray) => {
                const id = timesArray[0]
                const data = timesArray[1]

                return {
                    id,
                    ...data
                }
            })
    }

    create(time) {
        const timesId = randomUUID()

        this.#times.set(timesId, time)
    }

    update(id, time) {
        this.#times.set(id, time)
    }

    delete(id) {
        this.#times.delete(id)
    }
}