const log4js = require('log4js');

const isDevelop = process.env.NODE_ENV === 'develop';

module.exports = () => {
  log4js.configure({
    appenders: {
      general: {
        type: 'file',
        filename: '/logs/general.log',
      },
      database: {
        type: 'file',
        filename: '/logs/database.log',
      },
    },
    categories: {
      default: {
        appenders: ['general', 'database'],
        level: (isDevelop) ? 'all' : 'info',
      },
    },
  });
};
