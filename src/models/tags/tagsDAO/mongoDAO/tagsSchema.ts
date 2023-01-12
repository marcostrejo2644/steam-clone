import { model, Schema } from 'mongoose'
import { tagsI } from '@models/tags/tags.interfaces'

const tagsSchema = new Schema<tagsI>({
  id: String,
  name: {
    required: true,
    type: String
  }
})

const Tags = model('Tags', tagsSchema)

export default Tags
