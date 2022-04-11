import {database} from "../database/database"
import {IHypothesisMongodb} from "./i-hypothesis-mongodb";
import {IIdMongodb} from "../id-mongodb/iid-mongodb";
import {HypothesisSchema} from "./hypothesis-model";

const collectionName = "Hypothesis"



export class HypothesisMongodb implements IHypothesisMongodb{


    getAllHypothesis() {


    }

    getHypothesis(id: string) {
    }

    async postHypothesis(teamName: string,description: string, category: string, idGetter: IIdMongodb) {
        try{
            let id = await idGetter.getNextId("hypothesis")
            let idString = "hypo_"+id
            let hypothesisDocument = {_id: idString, category: category, description: description, ratings: [], base_hypothesis: idString}
            // @ts-ignore
            let result =  await database.db(teamName).collection<HypothesisSchema>(collectionName).insertOne(hypothesisDocument).catch(reason => {
                return false
            })
            return hypothesisDocument
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
