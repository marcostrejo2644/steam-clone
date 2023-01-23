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

export interface GameDTO {
  id?: string
  about: string
  releaseDate?: string
  principalPicture: string
  images: Array<string>
  shortDescription: string
  owner: string
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

export interface GameI extends GameElasticI {
  about: string
  releaseDate?: string
  principalPicture: string
  images: Array<string>
  shortDescription: string
  owner: string
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