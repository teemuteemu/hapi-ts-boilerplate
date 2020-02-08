import handlers from '../handlers';

export default [
  {
    method: 'GET',
    path: '/',
    config: handlers.index
  },
  {
    method: 'GET',
    path: '/health',
    config: handlers.health
  },
  {
    method: 'POST',
    path: '/dummy',
    config: handlers.dummyPost
  }
];
