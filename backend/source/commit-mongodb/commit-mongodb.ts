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

    putCommit(title: string, date: Date) {
    }


    async postInitCommit() {
        await database.db(this.databaseName).collection<CommitSchema>(commitCollectionName).insertOne({_id: "commit_1", title: "", date: "",hypotheses: [], evidences: []})

    }

    deleteEvidenceInCommit(idString: string) {
    }

    deleteHypothesisInCommit(idString: string) {
    }

    getHypothesisFromCommit(hypoIdString: string, commitIdString: string) {
    }

    postEvidenceToCommit(newEvidence: ArticleSchema | InterviewSchema) {
    }

    postHypothesisToCommit(hypothesis: HypothesisSchema) {

    }

    putEvidenceToCommit(newEvidence: ArticleSchema | InterviewSchema) {
    }

    putHypothesisToCommit(hypothesis: HypothesisSchema) {
    }

    private getCurrentCommitId()
    {

    }



}
