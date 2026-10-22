import PageShell from '../components/PageShell';
import Button from '../components/Button';
import DetailList from '../components/DetailList';
import useDashboardPresenter from '../presenters/useDashboardPresenter';

const maskToken = (token) => `••••${token.slice(-4)}`;

const DashboardView = () => {
  const { session, handleLogout } = useDashboardPresenter();

  const details = [
    { label: 'User Server', value: session.userServer },
    { label: 'User ID', value: session.userId },
    ...(typeof session.token === 'string' ? [{ label: 'Token', value: maskToken(session.token) }] : []),
  ];

  const actions = (
    <>
      <span className="hidden text-sm text-muted sm:inline">{session.userId}</span>
      <Button variant="secondary" size="sm" onClick={handleLogout}>
        Logout
      </Button>
    </>
  );

  return (
    <PageShell actions={actions}>
      <div className="flex max-w-xl flex-col gap-6">
        <header>
          <h1 className="text-[1.625rem] leading-tight font-semibold tracking-tight">Halo, {session.userId}</h1>
          <p className="mt-1.5 text-muted">Login berhasil. Berikut detail sesi Anda.</p>
        </header>
        <DetailList items={details} />
        <p className="text-[0.8125rem] text-muted">
          Sesi tersimpan di tab ini dan berakhir saat tab ditutup atau Anda logout.
        </p>
      </div>
    </PageShell>
  );
};

export default DashboardView;
