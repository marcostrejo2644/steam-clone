import dotenv from 'dotenv'

dotenv.config()

export default {
  port: process.env.PORT || 4000,
  mongoUser: process.env.MONGO_USER,
  mongoPassword: process.env.MONGO_PASSWORD,
  elasticUser: process.env.ELASTIC_USER,
  elasticPassword: process.env.ELASTIC_PASSWORD,
}
