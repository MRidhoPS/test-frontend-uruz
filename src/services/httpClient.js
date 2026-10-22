import axios from 'axios';
import { env } from '../config/env';
import { toApiError } from '../utils/httpError';

const httpClient = axios.create({
  baseURL: env.apiBaseUrl,
  timeout: 15000,
  headers: { 'Content-Type': 'application/json' },
});

httpClient.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(toApiError(error)),
);

export default httpClient;
