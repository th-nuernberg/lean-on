import {IRouteHypothesisHandler} from "./i-route-hypothesis-handler";
import {IHypothesisMongodb} from "../i-hypothesis-mongodb";
import {checkHypothesisBody} from "../check-hypothesis-body";
import {IdMongodb} from "../../id-mongodb/id-mongodb";
import {ICommitMongodb} from "../../commit-mongodb/i-commit-mongodb";

export class RouteHypothesisHandler implements IRouteHypothesisHandler{


    async postHypothesis(req, res, hypothesisMongoDb: IHypothesisMongodb, commitMongoDb: ICommitMongodb) {


        if(checkHypothesisBody(req))
        {
           let result = await hypothesisMongoDb.postHypothesis(req.team, req.body.description, req.body.category, new IdMongodb(req.team))
            if(result)
            {
                let commitHypoResult = await commitMongoDb.postHypothesisToCommit(result, new IdMongodb(req.team))
                if(commitHypoResult)
                {
                    res.sendStatus(200)
                }
                else
                {
                    return false
                }
            }
        }
        else
        {
            res.sendStatus(403)
        }

    }





}

module.exports= {
    RouteHypothesisHandler
}
