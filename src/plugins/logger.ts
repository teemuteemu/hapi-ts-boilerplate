import Good from 'good';

const options = {
  reporters: {
    consoleReporter: [
      {
        module: 'good-squeeze',
        name: 'Squeeze',
        args: [{ log: '*', response: '*', error: '*', request: '*' }]
      },
      {
        module: 'good-console'
      },
      'stdout'
    ],
  },
};

const register = async server => {
  await server.register({
    plugin: Good,
    options
  });
};

export default register;
