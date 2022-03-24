import {IRouteHypothesisHandler} from "./i-route-hypothesis-handler";
import {IHypothesisMongodb} from "../i-hypothesis-mongodb";
import {checkHypothesisBody} from "../check-hypothesis-body";
import {IdMongodb} from "../../id-mongodb/id-mongodb";

export class RouteHypothesisHandler implements IRouteHypothesisHandler{


    async postHypothesis(req, res, hypothesisMongoDb: IHypothesisMongodb) {


        if(checkHypothesisBody(req))
        {
           let result = await hypothesisMongoDb.postHypothesis(req.team, req.body.description, req.body.category, new IdMongodb(req.team))
            if(result)
            {
                res.sendStatus(200)
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
