import { model, Schema } from 'mongoose'
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
// const Genre = model('Genres', genreSchema)

// export default Genre
