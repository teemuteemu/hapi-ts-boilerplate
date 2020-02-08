import { server, init } from '../server';

beforeAll(async () => {
  await init(server);
});

afterAll(async () => {
  await server.stop();
});

test('health check', async () => {
  const request = {
    method: 'GET',
    url: '/health'
  };
  const response = await server.inject(request);

  expect(response.statusCode).toBe(200);
  expect(response.result).toEqual({ result: 'healthy' });
});

test('should return foo', async () => {
  const request = {
    method: 'GET',
    url: '/'
  };
  const response = await server.inject(request);

  expect(response.statusCode).toBe(200);
  expect(response.result).toEqual({ result: 'foo' });
});
