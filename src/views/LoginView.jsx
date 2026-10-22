import AuthCard from '../components/AuthCard';
import TextField from '../components/TextField';
import Button from '../components/Button';
import Alert from '../components/Alert';
import useLoginPresenter from '../presenters/useLoginPresenter';

const LoginView = () => {
  const { values, errors, apiError, isSubmitting, handleChange, handleBlur, handleSubmit } =
    useLoginPresenter();

  const fieldProps = (name) => ({
    name,
    value: values[name],
    error: errors[name],
    onChange: handleChange,
    onBlur: handleBlur,
    disabled: isSubmitting,
  });

  return (
    <AuthCard title="Login" subtitle="Gunakan akun server Anda untuk melanjutkan.">
      {apiError && (
        <Alert title={apiError.status ? `Login gagal (HTTP ${apiError.status})` : 'Login gagal'}>
          {apiError.message}
        </Alert>
      )}
      <form className="flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
        <TextField
          label="User Server"
          hint="Nama server yang diberikan administrator."
          autoComplete="organization"
          {...fieldProps('userServer')}
        />
        <TextField label="User ID" autoComplete="username" {...fieldProps('userId')} />
        <TextField
          label="Password"
          type="password"
          autoComplete="current-password"
          {...fieldProps('password')}
        />
        <Button type="submit" fullWidth loading={isSubmitting} loadingText="Memproses login...">
          Login
        </Button>
      </form>
      <p className="text-center text-[0.8125rem] text-muted">
        Lupa password? Hubungi administrator server Anda.
      </p>
    </AuthCard>
  );
};

export default LoginView;
