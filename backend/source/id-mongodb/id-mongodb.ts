import {IIdMongodb} from "./iid-mongodb";
import {database} from "../database";

export {}

export interface IdCount{
    readonly commit: number,
    readonly evidence: number,
    readonly hypothesis: number,
    readonly user: number,
    readonly rating: number,
}

export class IdMongodb implements IIdMongodb{

    constructor() {
    }

    getNextCommitId(databaseName: string): Promise<number> {
        return Promise.resolve(0);
    }

    getNextEvidenceId(databaseName: string): Promise<number> {
        return Promise.resolve(0);
    }

    getNextHypothesisId(databaseName: string): Promise<number> {
        return Promise.resolve(0);
    }

    getNextRatingId(databaseName: string): Promise<number> {
        return Promise.resolve(0);
    }

    async getNextTeamId(): Promise<any> {

        await database.connect()

        let databaseNames = await database.db().admin().listDatabases({nameOnly: true})
        let teamAmount = this.checkHowManyTeamDatabasesExist(databaseNames["databases"])

        return Promise.resolve(teamAmount.toString());
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

    getNextUserId(databaseName: string): Promise<number> {
        return Promise.resolve(0);
    }


}

module.exports= {
    IdMongodb
}
