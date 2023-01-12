import { CRUD } from "@models/Core/CRUD.interface";
import { GenreI } from "@models/genres/genres.interfaces";
import mongoConnection from "@services/mongoDB";
import genreSchema from "./genreSchema";

export class GenreMongoPersistance implements CRUD<GenreI>{
    private Genre;

    constructor() {
        const mongoServer = mongoConnection.getConnection()
        this.Genre = mongoServer.model<GenreI>('Genre', genreSchema)
    }
    get(id?: string | undefined): Promise<GenreI | GenreI[] | null> {
        throw new Error("Method not implemented.");
    }
    add(object: GenreI): Promise<GenreI | null> {
        throw new Error("Method not implemented.");
    }
    update(object: GenreI, id: string): Promise<GenreI> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}