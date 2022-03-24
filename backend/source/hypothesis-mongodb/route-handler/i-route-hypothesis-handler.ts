import {IHypothesisMongodb} from "../i-hypothesis-mongodb";

export interface IRouteHypothesisHandler{

    postHypothesis(res, req, hypothesisMongoDb: IHypothesisMongodb)
}
