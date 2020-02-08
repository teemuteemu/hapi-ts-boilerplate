import handlers from '../handlers';

export default [
  {
    method: 'GET',
    path: '/',
    handler: handlers.index
  },
  {
    method: 'GET',
    path: '/health',
    handler: handlers.health
  },
];
