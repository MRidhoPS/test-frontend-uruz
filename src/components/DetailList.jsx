const DetailList = ({ items }) => (
  <dl className="divide-y divide-line rounded-lg border border-line bg-surface">
    {items.map(({ label, value }) => (
      <div key={label} className="flex flex-col gap-0.5 px-4 py-3 sm:flex-row sm:items-center sm:gap-4">
        <dt className="text-sm text-muted sm:w-40 sm:shrink-0">{label}</dt>
        <dd className="min-w-0 font-medium [overflow-wrap:anywhere]">{value}</dd>
      </div>
    ))}
  </dl>
);

export default DetailList;
