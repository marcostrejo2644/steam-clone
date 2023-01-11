export interface gameBase {
  id?: string
  name: string
  price: number
}

export interface gameDB extends gameBase {
  about: string
  releaseData?: string
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
  getGame(gameId?: string): Promise<gameDB | null >
  addGame(game: gameDB): Promise<gameDB> 
  updateGame(game: gameDB): Promise<void>
  deteleGame(id: string): Promise<void>
}
