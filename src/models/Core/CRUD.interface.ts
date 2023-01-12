export interface CRUD <T> {
    get(id? : string) : Promise<null | T[] | T>
    add(object: T) : Promise<null | T>
    update(object: T, id: string) : Promise<T>
    delete(id: string) : Promise<void>
}