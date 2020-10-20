require('dotenv').config();
const logger = require('log4js').getLogger('general');

const app = require('./app');

const port = process.env.PORT || 8080;

app.listen(port, () => {
  logger.info(`Application is listening at http://localhost:${port}/`);
});
