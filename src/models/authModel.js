import httpClient from '../services/httpClient';
import { env } from '../config/env';

const toSession = (data, { userServer, userId }) => ({
  userServer,
  userId,
  token: data?.token ?? data?.access_token ?? data?.data?.token ?? null,
});

export const login = async ({ userServer, userId, password }) => {
  const { data } = await httpClient.post('/authV5', {
    from_origin: env.fromOrigin,
    userServer,
    userId,
    userPassword: password,
    envServer: env.envServer,
    referrer: env.referrer,
  });

  return toSession(data, { userServer, userId });
};
