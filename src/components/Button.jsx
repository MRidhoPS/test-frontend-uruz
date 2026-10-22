const BASE =
  'inline-flex cursor-pointer items-center justify-center gap-2 rounded-md border font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-[0.65] motion-reduce:transition-none';

const SIZES = {
  md: 'h-11 px-5',
  sm: 'h-9 px-3.5 text-sm',
};

const VARIANTS = {
  primary: 'border-transparent bg-primary text-white hover:enabled:bg-primary-dark',
  secondary: 'border-line bg-surface text-ink hover:enabled:bg-page',
};

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  loadingText = 'Memproses...',
  disabled,
  ...props
}) => {
  const className = [BASE, SIZES[size], VARIANTS[variant], fullWidth && 'w-full']
    .filter(Boolean)
    .join(' ');

  return (
    <button className={className} disabled={disabled || loading} aria-busy={loading} {...props}>
      {loading && (
        <span
          className="size-4 animate-[spin_0.7s_linear_infinite] rounded-full border-2 border-current border-r-transparent motion-reduce:animate-none"
          aria-hidden="true"
        />
      )}
      {loading ? loadingText : children}
    </button>
  );
};

export default Button;
