import {ITeamMongodb} from "../team-mongodb/iteam-mongodb";
import {IIdMongodb} from "../id-mongodb/iid-mongodb";
import {IdMongodb} from "../id-mongodb/id-mongodb";
import _ from "lodash";

export class RouteTeamHandler {

    async postTeamHandler(req, res, teamMongodb: ITeamMongodb, idGetter: IIdMongodb) {

        let title
        let users

        try {
            if (req.admin !== "true") {
                res.sendStatus(401)
            }
            title = req.body.teamName
            users = req.body.users
            for (let user of users) {

                let keysOfObject = Object.keys(user)
                let mandatoryKeys = ["firstname", "lastname", "email"]

                if (!_.isEqual(keysOfObject, mandatoryKeys)) {
                    throw new Error("user payload not correct")
                }
            }
        } catch (e) {
            res.sendStatus(400)
            return
        }

        let teamId = await idGetter.getNextTeamId()
        let teamIdString = "team_" + teamId.toString()

        try {
            await teamMongodb.postTeam(title, users, teamIdString, new IdMongodb(teamIdString))
        } catch (e) {
            console.log(e)
            res.sendStatus(500)
        }

        res.sendStatus(200)

    }

    async deleteTeamHandler(req, res, teamMongodb: ITeamMongodb) {

        try
        {
            const teamId = req.params.id
            let teamDeleted = await teamMongodb.deleteTeam(teamId)
            if(teamDeleted)
            {res.sendStatus(200)}
            else
            {
                res.sendStatus(500)
            }

        }
        catch(e)
        {
            res.sendStatus(400)
        }

    }

    async getTeamsHandler(req, res, teamMongodb: ITeamMongodb) {

        try
        {
            let teams = await teamMongodb.getTeams()
            res.send(teams)

        }
        catch(e)
        {
            res.sendStatus(400)
        }

    }


}
