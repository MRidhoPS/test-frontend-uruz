const STORAGE_KEY = 'auth_session';

const read = () => {
  try {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY));
  } catch {
    return null;
  }
};

export const sessionService = {
  get: read,
  save: (session) => sessionStorage.setItem(STORAGE_KEY, JSON.stringify(session)),
  clear: () => sessionStorage.removeItem(STORAGE_KEY),
  isAuthenticated: () => read() !== null,
};
