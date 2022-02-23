import {database} from "../database";

require('dotenv').config({path: `${__dirname}\\.env`})


export class JwtToken{

    private static readonly jwt = require('jsonwebtoken')


    async createToken(req:any, database)
    {

        const token =  req.body.token

        if(!token)
        {return false}

        const teamName = await this.checkTokenWithUsers(token,database)
        if(teamName == false)
        {return false}

        let admin = (teamName === "team_admin") ? "true" : "false"


        let userData = await this.findUsernameToToken(teamName as string,token)
        if(userData == false)
        { return false }



        const jwtData = {firstname: userData["firstname"],surname: userData["surname"], team: teamName, admin: admin}

        const accessToken =  JwtToken.jwt.sign(jwtData, process.env.ACCESS_TOKEN_SECRET)



        return {accessToken : accessToken}
    }


    static authenticateToken(req:any, res:any, next:any) {


        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]

        if(token == null) return res.sendStatus(401)

        JwtToken.jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,(err, payload) => {

            if (err) return res.sendStatus(403)

            req.firstname = payload["firstname"]
            req.surname = payload["surname"]
            req.team = payload["team"]
            req.admin = payload["admin"]
            next()
        })


    }

    private async checkTokenWithUsers(token: string, database): Promise<string | boolean>
    {


        let databaseNameList: any = await database.db().admin().listDatabases({nameOnly: true})
        databaseNameList = databaseNameList["databases"]


        for (const databaseName of databaseNameList) {

            let databaseNameString : string = databaseName["name"]

            if(!databaseNameString.includes("team_"))
            {
                continue
            }

            let collection = await database.db(databaseNameString).collection("Team")
            let teamName = await collection.findOne({"users.token": token})
            if(teamName)
            {
                return databaseName["name"]
            }

        }

        return false



    }

    private async findUsernameToToken(teamname: string, token: string)
    {

                let teamDocument = await database.db(teamname).collection("Team").findOne()
                if (teamDocument) {
                    let users = teamDocument["users"]
                    for (let user of users)
                    {

                        if(token === user["token"])
                            return {firstname: user["firstname"], surname: user["surname"]}
                    }
                }

                return false


    }


}



module.exports = {
    JwtToken,

}
