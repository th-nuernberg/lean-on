export {}

export interface IIdMongodb{

    getNextUserId(databaseName: string): Promise<number>

    getNextEvidenceId(databaseName: string): Promise<number>

    getNextHypothesisId(databaseName: string): Promise<number>

    getNextTeamId(): Promise<number>

    getNextRatingId(databaseName: string): Promise<number>

    getNextCommitId(databaseName: string) : Promise<number>
}
