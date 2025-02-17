'use strict';

const chalk = require(`chalk`);
const readContent = require(`../lib/read-content`);
const sequelize = require(`../lib/sequelize`);
const initDatabase = require(`../lib/init-db`);
const generateArticles = require(`../lib/generate-articles`);
const passwordUtils = require(`../lib/password`);
const getArticleCount = require(`../lib/get-article-count`);
const {ExitCode} = require(`../../constants`);
const {getRandomValue} = require(`../../utils`);
const {FilePath} = require(`./data`);

module.exports = {
  name: `--filldb`,
  async run(args) {
    const [count] = args;
    const articleCount = getArticleCount(count);

    try {
      console.info(chalk.green(`Trying to connect to database...`));
      await sequelize.authenticate();
    } catch (err) {
      console.error(chalk.red(`An error occurred: ${err.message}`));
      process.exit(ExitCode.error);
    }
    console.info(chalk.green(`Connection to database established`));

    const titles = await readContent(FilePath.TITLES);
    const sentences = await readContent(FilePath.SENTENCES);
    const categories = await readContent(FilePath.CATEGORIES);
    const comments = await readContent(FilePath.COMMENTS);

    const users = [
      {
        name: `Иван Иванов`,
        email: `ivanov@example.com`,
        passwordHash: await passwordUtils.hash(`ivanov`),
        avatar: `avatar-1.png`,
      },
      {
        name: `Пётр Петров`,
        email: `petrov@example.com`,
        passwordHash: await passwordUtils.hash(`petrov`),
        avatar: `avatar-2.png`,
      },
      {
        name: `Зураби Беридзе`,
        email: `beridze@example.com`,
        passwordHash: await passwordUtils.hash(`beridze`),
        avatar: `avatar-3.png`,
      },
      {
        name: `Ганс Мюллер`,
        email: `gans@example.com`,
        passwordHash: await passwordUtils.hash(`gans`),
        avatar: `avatar-4.png`,
      },
    ];

    const articles = generateArticles(
        articleCount,
        titles,
        categories,
        sentences,
        comments,
    ).map((article) => ({
      ...article,
      user: getRandomValue(users).email,
      comments: article.comments.map((comment) => ({
        ...comment,
        user: getRandomValue(users).email,
      })),
    }));

    try {
      await initDatabase(sequelize, {articles, categories, users});
      sequelize.close();
      console.info(chalk.green(`Operation success. Data fill to database.`));
    } catch (err) {
      console.error(chalk.red(
          `An error occurred adding data to the database: ${err.message}`,
      ));
      process.exit(ExitCode.error);
    }
  },
};
