import { Modal } from "./modal";

export default async function PhotoModalPage(props: {
  params: Promise<{ team: string }>;
  searchParams: Promise<{ photoId?: string[] }>;
}) {
  const params = await props.params;
  const search = await props.searchParams;
  return (
    <Modal>
      <div>
        <pre>Params: {JSON.stringify(params, null, 4)}</pre>
        <pre>Search params on page: {JSON.stringify(search, null, 4)}</pre>
      </div>
    </Modal>
  );
}
