interface CategoryCardProps {
  list_name: string;
}

export default async function CategoryCard({ list_name }: CategoryCardProps) {
  return (
    <div className="w-full h-48 shadow-2xl rounded-2xl flex justify-between">
      <div className="flex px-4 items-center text-xl font-serif font-semibold w-1/2">
        {list_name}
      </div>
      <div className="bg-black size-4 w-1/2 h-full"></div>
    </div>
  );
}
