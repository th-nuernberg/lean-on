import {IIdMongodb} from "../id-mongodb/iid-mongodb";

export interface IHypothesisMongodb{

    postHypothesis(teamName: string, description: string, category: string, idGetter: IIdMongodb)

    getHypothesis(id: string)

    getAllHypothesis()
}
