export interface CRUD <T> {
    get(id? : string) : Promise<null | T[] | T>
    add(object: T) : Promise<null | T>
    update(id: string, object: T) : Promise<T | null>
    delete(id: string) : Promise<null>
}