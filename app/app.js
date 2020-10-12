const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const helmet = require('helmet');

const api = require('./api');

const app = express();

app.use(morgan('tiny'));
app.use(compression());
app.use(helmet());
app.use(express.json());

app.use('/api', api);

app.use((req, res, next) => {
  const error = new Error(`404 - Page was not found. Requested URL: ${req.originalUrl}`);
  res.status(404);
  next(error);
});

app.use((error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    status: statusCode,
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? undefined : error.stack,
  });
});

module.exports = app;
