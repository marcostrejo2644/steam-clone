import { Client, estypesWithBody } from '@elastic/elasticsearch'
import { ElasticClient } from '@services/elastic/elasticSearch'
import { Logger } from '@utils/logger'

export default class ElasticIndex {
  private static esClient: Client

  constructor() {
    ElasticIndex.esClient = ElasticClient.getInstance()
  }

  async initIndex(indexConfig: estypesWithBody.IndicesCreateRequest) {
    try {
      await ElasticIndex.esClient?.cat.indices({
        index: indexConfig.index
      })
      Logger.info('The indices exists')
    } catch (error: any) {
      Logger.error(error)
      if (error.body?.error?.reason.includes('no such index')) {
        await ElasticIndex.createIndex(indexConfig)
        Logger.info('The index was created succesfully and charged data')
      }
    }
  }

  static async createIndex(indexConfig: estypesWithBody.IndicesCreateRequest) {
    try {
      await ElasticIndex.esClient.indices.create(indexConfig)
    } catch (error) {
      Logger.error('creating failed', error)
    }
  }
}
