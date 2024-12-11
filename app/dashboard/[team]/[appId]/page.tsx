import Link from "next/link";

export default async function AppPage(props: {
  params: Promise<{ team: string; appId: string }>;
  searchParams: Promise<Record<string, string>>;
}) {
  const params = await props.params;
  const search = await props.searchParams;
  let photos = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <div>
      AppId page
      <section className="cards-container">
        {photos.map((id) => (
          <Link
            className="card"
            key={id}
            href={`/dashboard/${params.team}/audit?photoId=${id}`}
          >
            {id}
          </Link>
        ))}
      </section>
      <pre>Params: {JSON.stringify(params, null, 4)}</pre>
      <pre>Search params on page: {JSON.stringify(search, null, 4)}</pre>
      <Link href={`/dashboard/${params.team}/${params.appId}?baz=qux`}>
        Push params
      </Link>
    </div>
  );
}
