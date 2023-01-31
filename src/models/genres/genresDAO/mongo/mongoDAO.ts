import { CRUD } from "@core/CRUD.interface";
import { GenreI } from "@models/genres/genres.interfaces";
import mongoConnection from "@services/mongoDB";
import genreSchema from "./genreSchema";

export class GenreMongoPersistence implements CRUD<GenreI>{
    private Genre;

    constructor() {
        const mongoServer = mongoConnection.getConnection()
        this.Genre = mongoServer.model<GenreI>('Genres', genreSchema)
    }

    async get(id?: string | undefined): Promise<GenreI | GenreI[] | null> {
        if(id) return await this.Genre.findById(id)
        return await this.Genre.find();
    }

    async add(object: GenreI): Promise<GenreI | null> {
        const newGenre = new this.Genre(object)
        return await newGenre.save()
    }

    async update(id: string, object: GenreI): Promise<GenreI | null> {
        return await this.Genre.findByIdAndUpdate(id , object)
    }

    async delete(id: string): Promise<null> {
        return await this.Genre.findByIdAndDelete(id)
    }
}