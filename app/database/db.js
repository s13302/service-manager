const mongoose = require('mongoose');
const logger = require('log4js').getLogger('database');

const initialize = () => {
  const user = process.env.DB_USER || 'root';
  const pass = process.env.DB_PASS || '';
  const dbUrl = process.env.DB_URL || 'localhost';
  const dbPort = process.env.DB_PORT || '27017';
  const dbName = process.env.DB_NAME || 'test';
  const connectionString = `mongodb://${dbUrl}:${dbPort}`;
  logger.debug(`Trying to connect database on: ${connectionString}`);
  mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    user,
    pass,
    dbName,
  });

  mongoose.connection.on('error', logger.error.bind(logger, 'Connection Error: '));
  mongoose.connection.once('open', () => {
    logger.info('Database connected');
  });
};

module.exports = initialize;
