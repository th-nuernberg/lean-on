import {database} from "../database"
import {TokenGenerator} from "./token-generator/token-generator";


interface teamSchema {
    _id: string,
    team_name: string,
    users: [{token: string}]
}

export async function  setTeamAdmin(){

    let databaseNameList: any = await database.db().admin().listDatabases({nameOnly: true})
    databaseNameList = databaseNameList["databases"]

    for(const databaseName of databaseNameList)
    {
        if(databaseName["name"] === "team_admin")
        {
            return
        }
    }

    let tokenGenerator = new TokenGenerator()
    let token = tokenGenerator.generateToken(40)

    await database.db("team_admin").collection<teamSchema>("Team").insertOne({
        _id: "team_admin",
        team_name: "team_admin",
        users: [{
            token: token
        }]
    })
}

module.exports = {
    setTeamAdmin

}