import {IIdMongodb} from "./iid-mongodb";
import {database} from "../database/database";
import {ObjectId} from "mongodb";

export {}

const idCollectionName = "IdStorage"

export interface IdCount{
    readonly commit: number,
    readonly evidence: number,
    readonly hypothesis: number,
    readonly user: number,
    readonly rating: number,
}

interface customIdIdStorage{
    _id: string,
    commit: number,
    user: number,
    evidence: number,
    hypothesis: number,
    rating: number
}

export class IdMongodb implements IIdMongodb{

    private _databaseName: string;

    constructor(databaseName: string) {
        this._databaseName = databaseName;
    }


    async getNextTeamId(): Promise<number | boolean>  {

        let databaseNames = await database.db().admin().listDatabases({nameOnly: true})
        let teamAmount = this.checkHowManyTeamDatabasesExist(databaseNames["databases"])

        return Promise.resolve(teamAmount);
    }

    private checkHowManyTeamDatabasesExist(databaseNames: Array<{name:string}>){

        let counter = 0

        for(let databases of databaseNames)
        {
            if(databases["name"].includes("team_"))
            {
                counter++;
            }
        }
        return counter

    }

    async postIdInitializeDocument() {
        let collection = await database.db(this._databaseName).collection<customIdIdStorage>(idCollectionName)
        try{
            await collection.insertOne({
                _id:  idCollectionName,
                commit: 1,
                user: 1,
                evidence: 1,
                hypothesis: 1,
                rating: 1,
            },
                {
                    forceServerObjectId: false
                })
        }
        catch (e)
        {
            console.log(e)
        }

    }

    async getCurrentId(entityName: string): Promise<number | boolean> {
        let idObject = await database.db(this._databaseName).collection(idCollectionName).findOne()
        if(idObject)
        {
            return idObject[entityName]
        }

        return false
    }

    async getNextId(entityName: string) : Promise<number | boolean>
    {
        let currentId = await this.getCurrentId(entityName)
        if(currentId)
        {
            let setObject = {$set : {}}
            // @ts-ignore
            setObject["$set"][entityName] = currentId +1
            await database.db(this._databaseName).collection(idCollectionName).updateOne({},setObject)
            return currentId
        }
        return false
    }



}

module.exports= {
    IdMongodb
}
