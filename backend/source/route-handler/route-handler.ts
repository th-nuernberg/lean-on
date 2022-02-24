import {ITeamMongodb} from "../team-mongodb/iteam-mongodb";
import {IIdMongodb} from "../id-mongodb/iid-mongodb";
import {IdMongodb} from "../id-mongodb/id-mongodb";
import _ from "lodash";

export class RouteHandler{

    async postTeamHandler(req, res, teamMongodb: ITeamMongodb, idGetter: IIdMongodb) {

        let title
        let users

        try{
            title = req.body.title
            users = req.body.user
            for(let user of users)
            {

                let keysOfObject = Object.keys(user)
                let mandatoryKeys = ["firstname","lastname","email"]

                if(!_.isEqual(keysOfObject,mandatoryKeys))
                {
                    throw new Error("user payload not correct")
                }
            }
        }
        catch (e)
        {
            res.sendStatus(400)
            return
        }

        let teamId = await idGetter.getNextTeamId()
        let teamIdString = "team_" + teamId.toString()

        await teamMongodb.postTeam(title, users, teamIdString, new IdMongodb(teamIdString))

    }
}
