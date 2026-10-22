export const env = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL ?? '/api',
  fromOrigin: import.meta.env.VITE_FROM_ORIGIN ?? '*',
  envServer: import.meta.env.VITE_ENV_SERVER ?? 'dev',
  referrer: import.meta.env.VITE_REFERRER ?? 'bodev.uruz.id',
};
