import {ITeamMongodb} from "./iteam-mongodb";
import {User} from "./user";
import {database} from "../database"
import {IIdMongodb} from "../id-mongodb/iid-mongodb";

export class TeamMongodb implements ITeamMongodb{

    deleteTeam(teamId: string) {
    }

    deleteUser(teamId: string, userId: string[]) {
    }

    getTeam(teamId: string) {
    }


    postUser(teamId: string, user: User) {
    }

    putTeamTitle(teamId: string, newTitle: string) {
    }

    async postTeam(teamTitle: string, users: {firstname: string, lastname: string, email:string }[], teamId: string, idGetter: IIdMongodb) {

        await idGetter.postIdInitializeDocument()

        let usersWithId = await this.giveUserId(users, idGetter)
        if(!usersWithId)
        {
            return false
        }
        let document = {_id: teamId, team_name: teamTitle, users}




    }

    private async giveUserId(users: {firstname: string, lastname: string, email:string }[], idGetter: IIdMongodb)
    {
        let usersWithId: object[] = []
        let userId: number | boolean
        for (let user of users)
        {
            userId = await idGetter.getNextUserId()
            if(userId)
            {
                usersWithId.push({_id: userId, firstname: user["firstname"], lastname:user["lastname"], email: user["email"] })
            }
            else
            {
                return false
            }
        }

        return usersWithId
    }

    private giveUser

}
