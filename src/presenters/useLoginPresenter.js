import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../models/authModel';
import { sessionService } from '../services/sessionService';
import { validateField, validateForm } from '../utils/validators';

const INITIAL_VALUES = { userServer: '', userId: '', password: '' };
const CREDENTIAL_ERRORS = [401, 403];

export default function useLoginPresenter() {
  const navigate = useNavigate();
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    if (apiError) setApiError(null);
  };

  const handleBlur = ({ target: { name, value } }) => {
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting) return;

    const formErrors = validateForm(values);
    setErrors(formErrors);
    if (Object.keys(formErrors).length > 0) return;

    setIsSubmitting(true);
    setApiError(null);

    try {
      sessionService.save(await login(values));
      navigate('/dashboard', { replace: true });
    } catch (error) {
      setApiError({ message: error.message, status: error.status });
      if (CREDENTIAL_ERRORS.includes(error.status)) {
        setValues((prev) => ({ ...prev, password: '' }));
      }
      setIsSubmitting(false);
    }
  };

  return { values, errors, apiError, isSubmitting, handleChange, handleBlur, handleSubmit };
}
