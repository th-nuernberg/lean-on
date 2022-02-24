export {}

export interface IIdMongodb{

    getNextUserId(): Promise<number | boolean>

    getNextEvidenceId(): Promise<number | boolean>

    getNextHypothesisId(): Promise<number | boolean>

    getNextTeamId(): Promise<number | boolean>

    getNextRatingId(): Promise<number | boolean>

    getNextCommitId() : Promise<number | boolean>

    postIdInitializeDocument()
}
