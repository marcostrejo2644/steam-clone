import { Schema } from 'mongoose'
import { TagI } from '@models/tags/tags.interfaces'

const tagSchema = new Schema<TagI>({
  id: String,
  name: {
    required: true,
    type: String
  }
},{
  collection: "Tags"
});

export default tagSchema;