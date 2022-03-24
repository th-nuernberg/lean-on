import {database} from "../database/database"
import {IHypothesisMongodb} from "./i-hypothesis-mongodb";
import {IIdMongodb} from "../id-mongodb/iid-mongodb";

const collectionName = "Hypothesis"

interface hypothesisSchema{
    _id: string,
    category: string,
    description: string,
    ratings: []
}

export class HypothesisMongodb implements IHypothesisMongodb{


    getAllHypothesis() {
    }

    getHypothesis(id: string) {
    }

    async postHypothesis(teamName: string,description: string, category: string, idGetter: IIdMongodb) {
        try{
            let id = await idGetter.getNextHypothesisId()
            let idString = "hypo_"+id
            let result =  await database.db(teamName).collection<hypothesisSchema>(collectionName).insertOne({_id: idString, category: category, description: description, ratings: []}).catch(reason => {
                return false
            })
            return true
        }
        catch (e)
        {
            return false
        }

    }


}

module.exports = {
    HypothesisMongodb
}
