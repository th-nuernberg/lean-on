import {MongoClient} from "mongodb";

const databaseString = "mongodb://localhost:27017"
export const database = new MongoClient(databaseString)

export async function connect() {
    let connectionPromise = database.connect().catch((reason) => {
        console.log("something went wrong with the database connection")

    })

    connectionPromise.then(result => {
        console.log("connection to Database successful")
    })

    await connectionPromise


}

export async function close() {
    await database.close()
}

module.exports = {
    database,
    connect,
    close
}
