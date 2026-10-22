const required = (label, { trim = true } = {}) => (value) => {
  const text = trim ? value.trim() : value;
  return text ? '' : `${label} wajib diisi.`;
};

const loginRules = {
  userServer: required('User Server'),
  userId: required('User ID'),
  password: required('Password', { trim: false }),
};

export const validateField = (name, value) => loginRules[name](value);

export const validateForm = (values) =>
  Object.keys(loginRules).reduce((errors, name) => {
    const message = validateField(name, values[name]);
    return message ? { ...errors, [name]: message } : errors;
  }, {});
