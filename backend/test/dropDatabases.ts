import {database} from "../source/database/database";


export async function dropDatabases() {

    let databaseNameList: any = await database.db().admin().listDatabases({nameOnly: true})
    databaseNameList = databaseNameList["databases"]

    for (const databaseName of databaseNameList) {

        if(databaseName["name"].includes("team"))
        {
            await database.db(databaseName["name"]).dropDatabase()
        }
    }
}

module.exports = {
    dropDatabases
}
