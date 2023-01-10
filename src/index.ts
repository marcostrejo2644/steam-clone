import myServer from '@services/server'
import config from '@config/configs'
import { Logger } from '@utils/logger'

myServer.listen(config.port, () => {
  Logger.info(`server on localhost:${config.port}`)
})
