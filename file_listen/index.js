import log4js from 'log4js'

const logger = log4js.getLogger()
logger.level = 'all'

logger.trace('Some trace messages')
logger.debug('Some debug messages')
logger.info('Some info messages')
logger.warn('Some warn messages')
logger.error('Some error messages')
logger.fatal('Some fatal messages')

log4js.shutdown((err) => {
  if (err) throw err
  process.exit(0)
})