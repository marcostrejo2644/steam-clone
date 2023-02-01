interface GameBaseI {
  _id?: string
  name: string
  price: number
}

// Contains Game relationships with other Docuents
interface GameRelationshipsI {
  genre: string
  tags: Array<string>
  features: Array<string>
}

export interface GameI extends GameBaseI, GameRelationshipsI{
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

export interface GameElasticI extends GameBaseI, GameRelationshipsI {}