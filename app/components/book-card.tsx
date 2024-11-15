import Image from "next/image";
import { Book } from "../type";
import EmptyBook from "../../public/book.png";

export default async function BookCard({ book }: { book: Book }) {
  return (
    <div className="flex flex-col w-40 my-4">
      <Image
        className="h-48 border shadow-2xl drop-shadow-xl"
        src={book.book_image || EmptyBook}
        width={160}
        height={240}
        alt={book.title}
      />
      <div className="p-2">
        <div className="text-[0.8rem] font-bold">{book.title}</div>
        <div className="text-[0.6rem]">{book.author}</div>
      </div>
    </div>
  );
}
