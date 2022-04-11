import {HypothesisSchema} from "../hypothesis-mongodb/hypothesis-model";
import {ArticleSchema} from "../evidence-mongodb/article-schema";
import {InterviewSchema} from "../evidence-mongodb/interview-schema";
import {IIdMongodb} from "../id-mongodb/iid-mongodb";

export interface CommitSchema{
    _id: string,
    date: string,
    title: string,
    hypotheses: [],
    evidences: []
}


export interface ICommitMongodb{


    postCommit(commit: CommitSchema)

    postInitCommit()

    putCommit(title: string, date: Date)

    getCommit(id: string)

    getAllHypothesesInCommit(commitIdString: string)

    postHypothesisToCommit(hypothesis: HypothesisSchema, idGetter: IIdMongodb)

    putHypothesisToCommit(hypothesis: HypothesisSchema)

    deleteHypothesisInCommit(idString: string)

    putEvidenceToCommit(newEvidence: ArticleSchema | InterviewSchema)

    postEvidenceToCommit(newEvidence: ArticleSchema | InterviewSchema)

    deleteEvidenceInCommit(idString: string)

    getHypothesisFromCommit(hypoIdString: string, commitIdString: string)










}
