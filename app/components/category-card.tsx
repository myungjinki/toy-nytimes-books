import Image from "next/image";
import { getBookList } from "../(home)/list/[id]/actions";

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
    <div className="w-full h-48 shadow-2xl rounded-2xl flex justify-between">
      <div className="flex px-4 items-center text-xl font-serif font-semibold w-1/2">
        {list_name}
      </div>
      <div className="size-4 w-1/2 h-full relative">
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
    </div>
  );
}
