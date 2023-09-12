import { registerAs } from '@nestjs/config';

const { JWT_TOKEN } = process.env;

export const jwt_secret = () => JWT_TOKEN;
export const security_config_name = () => 'security';

export const security_config = () => ({
  jwt_secret: jwt_secret(),
  expires_in: '60m',
});

export default registerAs(security_config_name(), security_config);
