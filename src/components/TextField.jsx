import { useState } from 'react';

const TextField = ({ name, label, type = 'text', error, hint, ...inputProps }) => {
  const [isVisible, setIsVisible] = useState(false);
  const isPassword = type === 'password';
  const messageId = `${name}-message`;
  const message = error || hint;
  const inputClass = [
    'h-11 w-full rounded-md border bg-surface pl-3 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-primary disabled:bg-page',
    error ? 'border-danger' : 'border-line hover:border-line-strong focus-visible:border-primary',
    isPassword ? 'pr-26' : 'pr-3',
  ].join(' ');

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium">
        {label}
      </label>
      <div className="relative">
        <input
          id={name}
          name={name}
          type={isPassword && isVisible ? 'text' : type}
          className={inputClass}
          aria-invalid={Boolean(error)}
          aria-describedby={message ? messageId : undefined}
          {...inputProps}
        />
        {isPassword && (
          <button
            type="button"
            className="absolute top-0 right-0 h-11 cursor-pointer px-3 text-[0.8125rem] font-medium text-primary"
            onClick={() => setIsVisible((v) => !v)}
          >
            {isVisible ? 'Sembunyikan' : 'Tampilkan'}
          </button>
        )}
      </div>
      {message && (
        <p id={messageId} className={`text-[0.8125rem] ${error ? 'text-danger' : 'text-muted'}`}>
          {message}
        </p>
      )}
    </div>
  );
};

export default TextField;
