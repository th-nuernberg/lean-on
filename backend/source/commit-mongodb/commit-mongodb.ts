import {ICommitMongodb} from "./i-commit-mongodb";
import {database} from "../database/database";
import {ArticleSchema} from "../evidence-mongodb/article-schema";
import {InterviewSchema} from "../evidence-mongodb/interview-schema";
import {HypothesisSchema} from "../hypothesis-mongodb/hypothesis-model";
import {CommitSchema} from "./commit-schema";

const commitCollectionName= "Commit"


export class CommitMongodb implements ICommitMongodb{



    constructor(private databaseName:string) {
    }

    getCommit(id: string) {
    }

    async postCommit(commit: CommitSchema) {
        await database.db(this.databaseName).collection<CommitSchema>(commitCollectionName).insertOne(commit)

    }

    updateCommit(title: string, date: Date) {
    }

    updateEvidenceInCommit(id: string, newEvidence: ArticleSchema | InterviewSchema) {
    }

    updateHypothesisInCommit(id: string, newHypothesis: HypothesisSchema) {
    }

    async postInitCommit() {
        await database.db(this.databaseName).collection<CommitSchema>(commitCollectionName).insertOne({_id: "commit_1", title: "", date: "",hypotheses: [], evidences: []})

    }



}
