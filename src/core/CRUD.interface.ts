export interface CRUD < T, Identifier > extends IsReadeable < T, Identifier >, IsWriteable < T, Identifier > { }

interface IsReadeable < T, Identifier >{
    get(id? : Identifier) : Promise< T[] | T | null>
}
interface IsWriteable < T, Identifier >{
    add(entity: T) : Promise< T | null>
    update(id: Identifier, entity: T) : Promise<T | null>
    delete(id: Identifier) : Promise<T | null>
}