import { Client } from '@elastic/elasticsearch'
import configs from '@config/configs'

// If i have security disabled in my elastic config, only use node, if not use auth object

export abstract class elasticClient {
  private static clientElastic: Client
  
  private constructor(){}

  static getInstance() {
    if(elasticClient.clientElastic) return this.clientElastic
    else {
      this.clientElastic = new Client({
        node: configs.elasticUri,
        auth: {
          username: configs.elasticUser,
          password: configs.elasticPassword
        }
      })
      return this.clientElastic
    }
  }
} 
