import { server, init } from './server';

init(server);

process.on('unhandledRejection', (err) => {
  console.error(err);
  server.stop();
  process.exit();
});
