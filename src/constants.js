'use strict';

module.exports.DEFAULT_COMMAND = `--help`;
module.exports.USER_ARGV_INDEX = 2;
module.exports.MAX_ID_LENGTH = 6;
module.exports.MOCK_FILENAME = `mocks.json`;
module.exports.DATA_DB_FILENAME = `fill-db.sql`;
module.exports.API_PREFIX = `/api`;
module.exports.REST_API_DEFAULT_PORT = 3010;
module.exports.FRONT_DEFAULT_PORT = 8010;
module.exports.MAX_LAST_COMMENTS = 4;
module.exports.MAX_DISCUSSED_ARTICLES = 4;
module.exports.ARTICLES_PER_PAGE = 8;
module.exports.MAX_LETTERS_PROMO_TEXT = 100;

module.exports.ExitCode = {
  error: 1,
  success: 0,
};

module.exports.HttpCode = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};

module.exports.Env = {
  DEVELOPMENT: `development`,
  PRODUCTION: `production`,
};

module.exports.HttpMethod = {
  GET: `GET`,
  POST: `POST`,
  PUT: `PUT`,
  DELETE: `DELETE`,
};
