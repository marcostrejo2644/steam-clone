import myServer from '@services/server'
import config from '@config/configs'
import { Logger } from '@utils/logger'
// import ElasticIndexsClass from '@services/elastic/elastic.indexs'
// import gamesConfig from '@config/elasticIndexs/games'
// import usersConfig from '@config/elasticIndexs/users'


myServer.listen(config.port, () => {
  Logger.info(`server on localhost:${config.port}`)
  
  // Create indexs in ElasticSearch
  // const ElasticIndexs = new ElasticIndexsClass()

  // ElasticIndexs.initIndex(gamesConfig)
  // .catch(error => Logger.error(error))
  // ElasticIndexs.initIndex(usersConfig)
  // .catch(error => Logger.error(error))
})
