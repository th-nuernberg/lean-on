import {ITeamMongodb} from "../iteam-mongodb";
import {IIdMongodb} from "../../id-mongodb/iid-mongodb";

export interface IRouteTeamHandler{

    postTeam(req, res, teamMongodb: ITeamMongodb, idGetter: IIdMongodb)

    deleteTeam(req, res, teamMongodb: ITeamMongodb)

    getTeams(req, res, teamMongodb: ITeamMongodb)


}
