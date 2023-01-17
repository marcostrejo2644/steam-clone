import configs from '@config/configs'
import mongoose, { Connection } from 'mongoose'

const mongoURL = `mongodb+srv://${configs.mongoUser}:${configs.mongoPassword}@steam-clone.rkjorbf.mongodb.net/steam-db?retryWrites=true&w=majority`

export default abstract class mongoConnection {
  private static connection?: Connection

  constructor() {}

  static getConnection() {
    if (!this.connection) this.connection = mongoose.createConnection(mongoURL)
    return this.connection
  }

  static closeConnection() {
    mongoose.disconnect()
  }
}
