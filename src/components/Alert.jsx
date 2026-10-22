const VARIANTS = {
  error: 'border-danger-line bg-danger-soft text-danger',
};

const Alert = ({ title, variant = 'error', children }) => (
  <div className={`flex gap-2.5 rounded-md border px-3.5 py-3 text-sm ${VARIANTS[variant]}`} role="alert">
    <svg className="mt-0.5 size-4 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9 6h2v5H9V6zm0 6h2v2H9v-2z"
      />
    </svg>
    <div>
      {title && <strong className="block font-semibold">{title}</strong>}
      <span>{children}</span>
    </div>
  </div>
);

export default Alert;
