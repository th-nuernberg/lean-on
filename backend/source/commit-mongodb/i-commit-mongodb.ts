import {HypothesisSchema} from "../hypothesis-mongodb/hypothesis-model";
import {ArticleSchema} from "../evidence-mongodb/article-schema";
import {InterviewSchema} from "../evidence-mongodb/interview-schema";
import {CommitSchema} from "./commit-schema";

export interface ICommitMongodb{


    postCommit(commit: CommitSchema)

    postInitCommit()

    updateCommit(title: string, date: Date)

    getCommit(id: string)

    updateHypothesisInCommit(id: string, newHypothesis: HypothesisSchema)

    updateEvidenceInCommit(id: string, newEvidence: ArticleSchema | InterviewSchema)





}
