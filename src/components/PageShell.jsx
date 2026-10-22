import Brand from './Brand';
import EnvBadge from './EnvBadge';

const MAIN_LAYOUTS = {
  centered: 'flex items-center justify-center px-4 py-10',
  page: 'mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 sm:py-10',
};

const PageShell = ({ layout = 'page', actions, children }) => (
  <div className="flex min-h-dvh flex-col">
    <header className="border-b border-line bg-surface">
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-4 sm:px-6">
        <Brand />
        <div className="flex items-center gap-3">
          <EnvBadge />
          {actions}
        </div>
      </div>
    </header>
    <main className={`flex-1 ${MAIN_LAYOUTS[layout]}`}>{children}</main>
  </div>
);

export default PageShell;
