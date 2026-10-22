import { env } from '../config/env';

const STYLES = {
  dev: { badge: 'border-env-line bg-env-soft text-env-ink', dot: 'bg-env-dot' },
};
const NEUTRAL = { badge: 'border-line bg-page text-muted', dot: 'bg-muted' };

const EnvBadge = () => {
  const style = STYLES[env.envServer] ?? NEUTRAL;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${style.badge}`}
    >
      <span className={`size-1.5 rounded-full ${style.dot}`} aria-hidden="true" />
      <span className="hidden sm:inline">Lingkungan</span> {env.envServer}
    </span>
  );
};

export default EnvBadge;
