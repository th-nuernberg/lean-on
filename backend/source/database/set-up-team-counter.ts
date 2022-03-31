import {getAllDatabaseNames, getAllUserDatabaseNames} from "./getAllUserDatabaseNames";
import {database} from "./database";

export async function setUpTeamCounter(){

    let databaseNames = await getAllDatabaseNames()
    let checkForDatabaseCounter = await checkForTeamCounter(databaseNames)

    if(checkForDatabaseCounter)
    {
        return true
    }
    else
    {
        
    }

}

async function checkForTeamCounter(databaseNames: string[])
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
