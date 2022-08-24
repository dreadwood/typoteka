'use strict';

const {Server} = require(`socket.io`);
const {
  HttpMethod,
  FRONT_DEFAULT_PORT,
} = require(`../../constants`);

const origins = [`localhost:${FRONT_DEFAULT_PORT}`];

if (process.env.SERVER_URL) {
  origins.push(process.env.SERVER_URL);
}

module.exports = (server) => {
  return new Server(server, {
    cors: {
      origins,
      methods: [HttpMethod.GET],
    },
  });
};
