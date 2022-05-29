'use strict';

const chalk = require(`chalk`);
const express = require(`express`);
const routes = require(`../api`);

const {
  API_PREFIX,
  HttpCode,
} = require(`../../constants`);

const DEFAULT_PORT = 3000;

const app = express();
app.use(express.json());

app.use(API_PREFIX, routes);

app.use((req, res) => res.status(HttpCode.NOT_FOUND).send(`Not found`));

module.exports = {
  name: `--server`,
  run(args) {
    const [customPort] = args;
    const port = Number.parseInt(customPort, 10) || DEFAULT_PORT;

    app.listen(port, (err) => {
      if (err) {
        return console.error(chalk.red(`Ошибка при создании сервера`), err);
      }
      return console.info(chalk.green(`Ожидаю соединений на ${port}`));
    });
  },
};
