import { Server } from "@hapi/hapi";
import config from 'config';

import routes from './routes';
import plugins from './plugins';

const port: number = config.get('server.port');

export const server: Server = new Server({
  port,
  routes: {
    cors: {
      origin: config.get('server.cors_origin'),
    },
  },
});

export const init = async (_server: Server) => {
  routes.forEach(route => _server.route(route));

  for (let register of plugins) {
    await register(_server);
  }

  await _server.start();
  _server.log(['info'], `Listening :${port}...`);
};
