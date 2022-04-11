import {CommitSchema, ICommitMongodb} from "./i-commit-mongodb";
import {database} from "../database/database";
import {ArticleSchema} from "../evidence-mongodb/article-schema";
import {InterviewSchema} from "../evidence-mongodb/interview-schema";
import {HypothesisSchema} from "../hypothesis-mongodb/hypothesis-model";
import {IIdMongodb} from "../id-mongodb/iid-mongodb";

const commitCollectionName= "Commit"


export class CommitMongodb implements ICommitMongodb{




    constructor(private databaseName:string) {
    }

    getCommit(id: string) {
    }

    async postCommit(commit: CommitSchema) {
        await database.db(this.databaseName).collection<CommitSchema>(commitCollectionName).insertOne(commit)

    }

    putCommit(title: string, date: Date) {
    }


    async postInitCommit() {
        await database.db(this.databaseName).collection<CommitSchema>(commitCollectionName).insertOne({_id: "commit_1", title: "", date: "",hypotheses: [], evidences: []})

    }

    deleteEvidenceInCommit(idString: string) {
    }

    deleteHypothesisInCommit(idString: string) {
    }


    //set commitIdString to current to get the current commit hypotheses
    async getAllHypothesesInCommit(commitIdString: string) {

        let hypotheses = await database.db(this.databaseName).collection(commitCollectionName).findOne({_id: commitIdString},{projection:{hypotheses: 1, _id: 0}})
        if(hypotheses)
        {
            return hypotheses
        }
        return false
    }

    async getHypothesisFromCommit(hypoIdString: string, commitIdString: string) {

    }

    postEvidenceToCommit(newEvidence: ArticleSchema | InterviewSchema) {
    }

    async postHypothesisToCommit(hypothesis: HypothesisSchema, idGetter: IIdMongodb) {

        let currentCommit = await idGetter.getCurrentId("commit")
        let currentCommitString = "commit_"+currentCommit
        let result = await database.db(this.databaseName).collection(commitCollectionName).updateOne({_id: currentCommitString},{$push:{ hypotheses: hypothesis}})
        return result.modifiedCount === 1

    }

    putEvidenceToCommit(newEvidence: ArticleSchema | InterviewSchema) {
    }

    putHypothesisToCommit(hypothesis: HypothesisSchema) {
    }

    private getCurrentCommitId()
    {

    }



}
