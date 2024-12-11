export default async function PhotoPage(props: {
  params: Promise<{ team: string }>;
  searchParams: Promise<Record<string, string>>;
}) {
  const params = await props.params;
  const search = await props.searchParams;
  return (
    <div>
      Audit Page
      <pre>Params: {JSON.stringify(params, null, 4)}</pre>
      <pre>Search params on page: {JSON.stringify(search, null, 4)}</pre>
    </div>
  );
}
