import {MongoClient} from "mongodb";

export {}

export class IdTestMongodb{

    readonly uri = "mongodb://localhost:27017"

    readonly mongoClient: MongoClient = new MongoClient(this.uri)

    constructor(mongoClient: MongoClient) {
        this.mongoClient = mongoClient
    }


}
