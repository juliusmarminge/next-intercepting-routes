import Link from "next/link";

export default async function Page(props: {
  params: Promise<{ team: string }>;
  searchParams: Promise<Record<string, string>>;
}) {
  const params = await props.params;
  const search = await props.searchParams;
  let apps = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <div>
      AppId page
      <section className="cards-container">
        {apps.map((id) => (
          <Link
            className="card"
            key={id}
            href={`/dashboard/${params.team}/${id}`}
          >
            Go to app: {id}
          </Link>
        ))}
      </section>
      <pre>Params: {JSON.stringify(params, null, 4)}</pre>
      <pre>Search params on page: {JSON.stringify(search, null, 4)}</pre>
      <Link href={`/dashboard/${params.team}?foo=bar`}>Push params</Link>
    </div>
  );
}
