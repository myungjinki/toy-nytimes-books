import ListDetailHeader from "@/app/components/list-detail-header";
import { getBookList } from "./actions";
import ListDetailMain from "@/app/components/list-detail-main";

export default async function ListDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  const { results } = await getBookList(id);
  return (
    <div>
      <ListDetailHeader list_name={results.list_name} />
      <ListDetailMain books={results.books} />
    </div>
  );
}
