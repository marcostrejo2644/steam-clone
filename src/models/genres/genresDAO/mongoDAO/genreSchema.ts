import { model, Schema } from 'mongoose'
import { genreI } from '@models/genres/genres.interfaces'

const genreSchema = new Schema<genreI>({
  id: {
    type: String
  },
  name: {
    required: true,
    type: String
  }
})

const Genre = model('Genres', genreSchema)

export default Genre
