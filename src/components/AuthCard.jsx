import PageShell from './PageShell';

const AuthCard = ({ title, subtitle, children }) => (
  <PageShell layout="centered">
    <section className="w-full max-w-[420px] rounded-lg border border-line bg-surface p-6 min-[480px]:p-8">
      <header className="mb-6">
        <h1 className="text-[1.625rem] leading-tight font-semibold tracking-tight">{title}</h1>
        {subtitle && <p className="mt-1.5 text-[0.9375rem] text-muted">{subtitle}</p>}
      </header>
      <div className="flex flex-col gap-5">{children}</div>
    </section>
  </PageShell>
);

export default AuthCard;
