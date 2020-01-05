import { Server } from "@hapi/hapi";
import config from 'config';

import routes from './routes';
import plugins from './plugins';

const init = async () => {
  const port: number = config.get('server.port');
  const server: Server = new Server({
    port,
    routes: {
      cors: {
        origin: config.get('server.cors_origin'),
      },
    },
  });

  routes.forEach(route => server.route(route));

  for (let register of plugins) {
    await register(server);
  }

  await server.start();
  server.log(['info'], `Listening :${port}...`);
};

process.on('unhandledRejection', (err) => {
  console.error(err);
  process.exit();
});

init();
