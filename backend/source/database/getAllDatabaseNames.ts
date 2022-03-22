import {database} from "./database";

export async function getAllDatabaseNames(withAdminTeam: boolean = true) : Promise<Array<string>>
{
    let databasesObject = await database.db().admin().listDatabases({nameOnly: true})
    let databaseNamesObject = databasesObject["databases"]

    let databaseNames = databaseNamesObject.map(a => { return stripDefaultDatabases(a.name)
    })

    if(withAdminTeam)
    {
        databaseNames = databaseNames.filter(a => {
            return a !== undefined
        })
    }
    else
    {
        databaseNames = databaseNames.filter(a => {
            return a !== undefined && a !== "team_admin"
        })
    }



    if(databaseNames === undefined)
    {
        return []
    }

    // @ts-ignore
    return databaseNames

}

function stripDefaultDatabases(databaseName: string)
{
        if(databaseName.includes("team_"))
        {return databaseName}
}

module.exports={
    getAllDatabaseNames
}
