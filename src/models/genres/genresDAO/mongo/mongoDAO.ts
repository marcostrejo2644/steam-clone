import { CRUD } from "@core/CRUD.interface";
import { GenreI } from "@models/genres/genres.interfaces";
import mongoConnection from "@services/mongoDB";
import genreSchema from "./genreSchema";

export class GenreMongoPersistence implements CRUD<GenreI, string>{
    private Genre;

    constructor() {
        const mongoServer = mongoConnection.getConnection()
        this.Genre = mongoServer.model<GenreI>('Genres', genreSchema)
    }

    async get(id?: string | undefined): Promise<GenreI | GenreI[] | null> {
        try {
            if(id) return await this.Genre.findById(id)
            return await this.Genre.find();
        } catch (error: any) {
            throw new Error(`Model Error -> ${error.message}`)
        }
    }

    async add(entity: GenreI): Promise<GenreI | null> {
        try {
            const newGenre = new this.Genre(entity)
            return await newGenre.save()
        } catch (error: any) {
            throw new Error(`Model Error -> ${error.message}`)
        }
    }

    async update(id: string, entity: GenreI): Promise<GenreI | null> {
        try {
            return await this.Genre.findByIdAndUpdate(id , entity)
        } catch (error: any) {
            throw new Error(`Model Error -> ${error.message}`)
        }
    }

    async delete(id: string): Promise<GenreI | null> {
        try {
            return await this.Genre.findByIdAndDelete(id)
        } catch (error: any) {
            throw new Error(`Model Error -> ${error.message}`)
        }
    }
}