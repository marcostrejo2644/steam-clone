import { model, Schema } from 'mongoose'
import { GameI } from '@models/games/games.interfaces'

const gameSchema = new Schema<GameI>({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  about: {
    type: String,
    required: true
  },
  releaseDate: Date,
  genre:{
    type: String,
    required: true,
    ref: 'Genres'
  },
  shortDescription: {
    type: String,
    required: true
  },
  tags: {
    type: [String],
    ref: 'Tags'
  },
  features: [String],
  images: [String],
  requeriments: {
    os: String,
    processor: String,
    graphics: String
  },
  sells: {
    type: Number,
    required: false,
    default: 0
  },
  reviews: {
    required: false, 
    type: {
      positives: Number,
      negatives: Number
    },
    default: {
      positives: 0,
      negatives: 0
    }
  }
});

export default gameSchema;
