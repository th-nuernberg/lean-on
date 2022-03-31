import {IHypothesisMongodb} from "../i-hypothesis-mongodb";
import {ICommitMongodb} from "../../commit-mongodb/i-commit-mongodb";

export interface IRouteHypothesisHandler{

    postHypothesis(res, req, hypothesisMongoDb: IHypothesisMongodb, commitMongoDb: ICommitMongodb)
}
