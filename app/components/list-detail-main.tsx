import { Book } from "../type";
import BookCard from "./book-card";

export default async function ListDetailMain({ books }: { books: Book[] }) {
  return (
    <div className="grid grid-cols-2 px-4 place-items-center">
      {books?.map((book) => (
        <BookCard key={book.title} book={book} />
      ))}
    </div>
  );
}
