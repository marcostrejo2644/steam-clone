export interface gameBase {
  _id?: string
  name: string
  price: number
}

export interface gameI extends gameBase {
  about: string
  releaseDate?: string
  genre: string
  tags: Array<string>
  features: Array<string>
  images: Array<string>
  shortDescription: string
  requeriments: {
    os: string
    processor: string
    graphics: string
  }
  sells?: number
  reviews?: {
    positives: number
    negatives: number
  }
}

export interface gameFunctionality {
  getGame(gameId?: string): Promise<gameI | null >
  addGame(game: gameI): Promise<void> 
  updateGame(game: gameI): Promise<void>
  deteleGame(id: string): Promise<void>
}

export enum typePersistance{
  MONGO = 'MONGO'
}
