import Config from 'config';
import hapiAuthJWT from 'hapi-auth-jwt2';
import jwksRsa from 'jwks-rsa';

type AuthConfig = {
  domain: string;
  audience: string;
};

const config: AuthConfig = Config.get('auth');

const options = {
  complete: true,
  key: decoded =>
    new Promise(resolve => {
      jwksRsa.hapiJwt2Key({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `${config.domain}.well-known/jwks.json`
      })(decoded, (error, publicKey) => resolve({ key: publicKey }));
    }),
  verifyOptions: {
    audience: config.audience,
    issuer: config.domain,
    algorithms: ["RS256"]
  },
  validate: () => {
    return { isValid: true };
  }
};

const register = async server => {
  await server.register(hapiAuthJWT);
  server.auth.strategy('jwt', 'jwt', options);
  server.auth.default('jwt');
};

export default register;
