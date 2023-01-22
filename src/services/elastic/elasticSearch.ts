import { Client } from '@elastic/elasticsearch'
import configs from '@config/configs'

// If i have security disabled in my elastic config, only use node, if not use auth object

export abstract class ElasticClient {
  private static clientElastic: Client

  private constructor() {}

  static getInstance() {
    if (ElasticClient.clientElastic) return this.clientElastic
    else {
      this.clientElastic = new Client({
        cloud: {
          id: configs.elasticCloudID
        },
        auth: {
          username: configs.elasticUser,
          password: configs.elasticPassword
        }
      })
      return this.clientElastic
    }
  }
}
