import {User} from "./user";
import {IIdMongodb} from "../id-mongodb/iid-mongodb";
import {ICommitMongodb} from "../commit-mongodb/i-commit-mongodb";

export interface ITeamMongodb
{
    getTeams()

    postTeam(teamTitle: string, users: {firstname: string, lastname: string, email:string }[], teamId: string, idGetter: IIdMongodb, commitMongoDb: ICommitMongodb)
    deleteUser(teamId: string, userId: string[])

    postUser(teamId: string)

    putTeamTitle(teamId: string, newTitle: string)

    deleteTeam(teamId: string)


}
