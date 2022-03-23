import {ITeamMongodb} from "./iteam-mongodb";
import {User} from "./user";
import {database} from "../database/database"
import {IIdMongodb} from "../id-mongodb/iid-mongodb";
import {ITokenGenerator} from "./token-generator/itoken-generator";
import {TokenGenerator} from "./token-generator/token-generator";
import {getAllDatabaseNames} from "../database/getAllDatabaseNames";

interface teamSchema {
    _id: string,
    team_name: string,
    users: object[]
}

const teamCollectionName = "Team"
const lengthOfToken = 20

export class TeamMongodb implements ITeamMongodb {

    async deleteTeam(teamId: string) {
       return database.db("team_"+teamId).dropDatabase().catch(reason => {
            console.log(reason)
            return false
        }).then(value => {
            return true
        })
    }

    deleteUser(teamId: string, userId: string[]) {
    }

    async getTeams() {

        let databaseNames = await getAllDatabaseNames(false)
        let teamData = []

        for(const databaseName of databaseNames)
        {
           let teamDocument = await database.db(databaseName).collection("Team").findOne({},{projection: {"users.token":0}})

            if(teamDocument)
            {
                // @ts-ignore
                teamDocument['_id'] = teamDocument._id.toString().split("team_")[1]


                // @ts-ignore
                teamData.push(teamDocument)
            }
        }
        return teamData
    }


    postUser(teamId: string, user: User) {
    }

    putTeamTitle(teamId: string, newTitle: string) {
    }

    async postTeam(teamTitle: string, users: { firstname: string, lastname: string, email: string }[], teamId: string, idGetter: IIdMongodb) {

        await idGetter.postIdInitializeDocument()

        let usersWithId = await this.giveUserId(users, idGetter)
        if (!usersWithId) {
            return false
        }
        let usersWithIdAndToken = this.giveUsersToken(usersWithId as {_id: string, firstname: string, lastname: string, email: string }[], new TokenGenerator())
        let document = {_id: teamId, team_name: teamTitle, users: usersWithIdAndToken}


        try {
            await database.db(teamId).collection<teamSchema>(teamCollectionName).insertOne(document)
        } catch (e) {
            console.log(e)
        }


    }

    private async giveUserId(users: { firstname: string, lastname: string, email: string }[], idGetter: IIdMongodb) {
        let usersWithId: object[] = []
        let userId: number | boolean
        for (let user of users) {
            userId = await idGetter.getNextUserId()
            if (userId) {
                usersWithId.push({
                    _id: userId,
                    firstname: user["firstname"],
                    lastname: user["lastname"],
                    email: user["email"]
                })
            } else {
                return false
            }
        }

        return usersWithId
    }

    private giveUsersToken(users: {_id: string, firstname: string, lastname: string, email: string }[], tokenGenerator: ITokenGenerator)
    {
        let userWithToken: object[] = []
        for(let user of users)
        {
            user["token"] = tokenGenerator.generateToken(lengthOfToken)
            userWithToken.push(user)
        }

        return userWithToken

    }

}
