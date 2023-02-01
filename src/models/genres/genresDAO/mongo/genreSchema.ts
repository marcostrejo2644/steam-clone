import { Schema } from 'mongoose'
import { GenreI } from '@models/genres/genres.interfaces'

const genreSchema = new Schema<GenreI>({
  id: {
    type: String
  },
  name: {
    required: true,
    type: String
  }
},{
  collection: "Genres"
})

export default genreSchema;