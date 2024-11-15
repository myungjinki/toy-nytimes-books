import { Book } from "../type";

export default async function BookCard({ book }: { book: Book }) {
  return (
    <div className="w-40 my-2 bg-black h-60">
      <div>{book.title}</div>
    </div>
  );
}
