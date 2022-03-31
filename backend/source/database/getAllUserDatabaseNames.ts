import {database} from "./database";

export async function getAllTeamDatabaseNames(withAdminTeam: boolean = true): Promise<Array<string>> {
    let databasesObject = await database.db().admin().listDatabases({nameOnly: true})
    let databaseNamesObject = databasesObject["databases"]

    let databaseNames = databaseNamesObject.map(a => {
        return stripNonTeamDatabases(a.name)
    })

    if (withAdminTeam) {
        databaseNames = databaseNames.filter(a => {
            return a !== undefined
        })
    } else {
        databaseNames = databaseNames.filter(a => {
            return a !== undefined && a !== "team_admin"
        })
    }


    if (databaseNames === undefined) {
        return []
    }

    // @ts-ignore
    return databaseNames

}

export async function getAllDatabaseNames(): Promise<Array<string>> {
    let databasesObject = await database.db().admin().listDatabases({nameOnly: true})
    let databaseNamesObject = databasesObject["databases"]

    let databaseNames = databaseNamesObject.map(a => {
        return a.name
    })

    databaseNames = databaseNames.filter(a => {
        return a !== "admin" && a !== "local" && a !== "config"
    })

    if (databaseNames === undefined) {
        return []
    }


    return databaseNames

}

function stripNonTeamDatabases(databaseName: string) {

    if(databaseName.includes("team_"))
        return databaseName
    return undefined
}


module.exports = {
    getAllTeamDatabaseNames,
    getAllDatabaseNames
}
