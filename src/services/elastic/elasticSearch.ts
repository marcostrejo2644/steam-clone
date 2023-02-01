import { Client } from '@elastic/elasticsearch'
import configs from '@config/configs'

// If i have security disabled in my elastic config, only use node, if not use auth object

export abstract class ElasticClient {
  private static ElasticClientIns: Client

  private constructor() {}

  static getInstance() {
    if(!ElasticClient.ElasticClientIns) {
      return new Client({
        cloud: {
          id: configs.elasticCloudID
        },
        auth: {
          username: configs.elasticUser,
          password: configs.elasticPassword
        }
      }) 
    }

    return this.ElasticClientIns
  }
}
