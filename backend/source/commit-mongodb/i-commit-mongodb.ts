import {HypothesisSchema} from "../hypothesis-mongodb/hypothesis-model";
import {ArticleSchema} from "../evidence-mongodb/article-schema";
import {InterviewSchema} from "../evidence-mongodb/interview-schema";
import {CommitSchema} from "./commit-schema";

export interface ICommitMongodb{


    postCommit(commit: CommitSchema)

    postInitCommit()

    putCommit(title: string, date: Date)

    getCommit(id: string)

    postHypothesisToCommit(hypothesis: HypothesisSchema)

    putHypothesisToCommit(hypothesis: HypothesisSchema)

    deleteHypothesisInCommit(idString: string)

    putEvidenceToCommit(newEvidence: ArticleSchema | InterviewSchema)

    postEvidenceToCommit(newEvidence: ArticleSchema | InterviewSchema)

    deleteEvidenceInCommit(idString: string)

    getHypothesisFromCommit(hypoIdString: string, commitIdString: string)










}
