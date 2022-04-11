export {}

export interface IIdMongodb{

    getNextTeamId(): Promise<number | boolean>

    postIdInitializeDocument()

    getNextId(entityName: string): Promise<number | boolean>

    getCurrentId(entityName: string) : Promise<number | boolean>


}
