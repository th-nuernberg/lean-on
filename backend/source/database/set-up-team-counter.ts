import {getAllDatabaseNames} from "./getAllUserDatabaseNames";
import {database} from "./database";

require('dotenv').config()


interface databaseCounter{
    _id: string,
    databases: number
}

export async function setUpTeamCounter(){

    let databaseNames = await getAllDatabaseNames()
    let databaseCounter = await checkForDatabaseCounter(databaseNames)

    if(databaseCounter)
    {
        return true
    }
    else
    {
        await postDatabaseCounter()
        return false
    }

}

async function checkForDatabaseCounter(databaseNames: string[])
{
    for(let databaseName of databaseNames)
    {
        if(databaseName === "database_counter")
        {
            return true
        }
    }

    return false
}

async function postDatabaseCounter()
{
    let databaseName = process.env.DATABASE_COUNTER_NAME

    if(databaseName)
    {
        await database.db(databaseName).collection<databaseCounter>(databaseName).insertOne({_id: "database_counter", databases: 1})
        return true
    }
    else
    {
        return false
    }

}
