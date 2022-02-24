import {User} from "./user";
import {IIdMongodb} from "../id-mongodb/iid-mongodb";

export interface ITeamMongodb
{
    getTeam(teamId: string)

    postTeam(teamTitle: string, users: {firstname: string, lastname: string, email:string }[], teamId: string, idGetter: IIdMongodb)
    deleteUser(teamId: string, userId: string[])

    postUser(teamId: string, user: User)

    putTeamTitle(teamId: string, newTitle: string)

    deleteTeam(teamId: string)


}
