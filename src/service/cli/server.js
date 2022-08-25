'use strict';

const express = require(`express`);
const http = require(`http`);
const routes = require(`../api`);
const {getLogger} = require(`../lib/logger`);
const sequelize = require(`../lib/sequelize`);
const socket = require(`../lib/socket`);

const {
  API_PREFIX,
  REST_API_DEFAULT_PORT,
  HttpCode,
  ExitCode,
} = require(`../../constants`);

const logger = getLogger({name: `api`});

const app = express();
const server = http.createServer(app);

const io = socket(server);
app.locals.socketio = io;

app.use(express.json());

app.use((req, res, next) => {
  logger.debug(`Request on route ${req.url}`);
  res.on(`finish`, () => logger.info(`Response code ${res.statusCode}`));
  next();
});

app.use(API_PREFIX, routes);

app.use((req, res) => {
  res.status(HttpCode.NOT_FOUND).send(`Not found`);
  logger.error(`Route not found: ${req.url}`);
});

app.use((err, _req, _res, _next) => {
  logger.error(`An error occurred on processing request: ${err.message}`);
});

module.exports = {
  name: `--server`,
  async run(args) {
    try {
      logger.info(`Trying to connect to database...`);
      await sequelize.authenticate();
    } catch (err) {
      logger.error(`An error occurred: ${err.message}`);
      process.exit(ExitCode.error);
    }

    logger.info(`Connection to database established`);

    const [customPort] = args;
    const port = Number.parseInt(customPort, 10) || REST_API_DEFAULT_PORT;

    try {
      server.listen(port, () => {
        logger.info(`Listening to connections on ${port}`);
      });
    } catch (err) {
      logger.error(`An error occurred: ${err.message}`);
      process.exit(ExitCode.error);
    }
  },
};
