import { server, init } from '../server';

beforeAll(async () => {
  await init(server);
});

afterAll(async () => {
  await server.stop();
});

test('should return yo', async () => {
  const query = {
    method: 'GET',
    url: '/'
  };
  const data = await server.inject(query);

  expect(data.statusCode).toBe(200);
  expect(data.result).toEqual({ result: 'foo' });
});
