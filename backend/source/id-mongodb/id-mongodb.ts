import {IIdMongodb} from "./iid-mongodb";
import {database} from "../database";
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

        await database.connect()

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

    async getNextUserId(): Promise<number | boolean> {
       let idDocument = await database.db(this._databaseName).collection(idCollectionName).findOne()
        if(!idDocument)
        {
            return Promise.resolve(false)
        }
        let currentUserId = idDocument["user"]
        await database.db(this._databaseName).collection(idCollectionName).updateOne({_id: idCollectionName}, {$set: {user: currentUserId+1}})
        return Promise.resolve(currentUserId)
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

    getNextCommitId(): Promise<number | boolean> {
        return Promise.resolve(false);
    }

    getNextEvidenceId(): Promise<number | boolean> {
        return Promise.resolve(false);
    }

    getNextHypothesisId(): Promise<number | boolean> {
        return Promise.resolve(false);
    }

    getNextRatingId(): Promise<number | boolean> {
        return Promise.resolve(false);
    }



}

module.exports= {
    IdMongodb
}
