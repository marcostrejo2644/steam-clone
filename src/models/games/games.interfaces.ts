export interface GameBase {
  _id?: string
  name: string
  price: number
}

export interface GameElasticI extends GameBase{
  genre: string
  tags: Array<string>
  features: Array<string>
}

export interface GameI extends GameElasticI {
  about: string
  releaseDate?: string
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