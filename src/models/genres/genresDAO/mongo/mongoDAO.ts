import { CRUD } from "@models/Core/CRUD.interface";
import { GenreDTO } from "@models/genres/genres.interfaces";
import mongoConnection from "@services/mongoDB";
import genreSchema from "./genreSchema";
// import { Logger } from "@utils/logger";
// import genreJSON from "../../../../test/JSON/genres.json"
export class GenreMongoPersistance implements CRUD<GenreDTO>{
    private Genre;

    constructor() {
        const mongoServer = mongoConnection.getConnection()
        this.Genre = mongoServer.model<GenreDTO>('Genres', genreSchema)
    }

    async get(id?: string | undefined): Promise<GenreDTO | GenreDTO[] | null> {
        if(id) return await this.Genre.findById(id)

        return await this.Genre.find();
    }

    async add(object: GenreDTO): Promise<GenreDTO | null> {
        const newGenre = new this.Genre(object)
        return await newGenre.save()
    }

    async update(id: string, object: GenreDTO): Promise<GenreDTO | null> {
        return await this.Genre.findByIdAndUpdate(id , object)
    }

    async delete(id: string): Promise<null> {
        return await this.Genre.findByIdAndDelete(id)
    }

    // call inside constructor
    // private bulk() {
    //     this.Genre.count()
    //         .then( (count: number) => {
    //             if(!count) {
    //                 this.Genre.insertMany(genreJSON)
    //             }
    //         })
    //         .catch(error => Logger.error(error.message))
    // }
}