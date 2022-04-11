import {IHypothesisMongodb} from "../i-hypothesis-mongodb";
import {ICommitMongodb} from "../../commit-mongodb/i-commit-mongodb";
import {IdMongodb} from "../../id-mongodb/id-mongodb";
import {IIdMongodb} from "../../id-mongodb/iid-mongodb";

export interface IRouteHypothesisHandler{

    postHypothesis(req, res, hypothesisMongoDb: IHypothesisMongodb, commitMongoDb: ICommitMongodb)

    getAllCurrentHypotheses(req, res, commitMongoDb: ICommitMongodb, idGetter: IIdMongodb)
}
