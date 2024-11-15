import Image from "next/image";
import { getBookList } from "../(home)/list/[id]/actions";
import Link from "next/link";

interface CategoryCardProps {
  list_name: string;
  list_name_encoded: string;
}

export default async function CategoryCard({
  list_name,
  list_name_encoded,
}: CategoryCardProps) {
  const { results } = await getBookList(list_name_encoded);
  const books = results?.books.filter((book) => book.book_image).slice(0, 1);
  return (
    <Link
      href={`/list/${list_name_encoded}`}
      className="flex justify-between w-full h-48 shadow-2xl rounded-2xl"
    >
      <div className="flex items-center w-1/2 px-4 font-serif text-xl font-semibold">
        {list_name}
      </div>
      <div className="relative w-1/2 h-full size-4">
        {books &&
          books.map((book) => (
            <Image
              className="absolute bottom-0 right-0"
              key={book.title}
              src={book.book_image!}
              width={120}
              height={300}
              alt={book.title}
            />
          ))}
      </div>
    </Link>
  );
}
