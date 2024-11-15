interface ListDetailHeaderProps {
  list_name: string;
}

export default async function ListDetailHeader({
  list_name,
}: ListDetailHeaderProps) {
  return (
    <header className="relative flex flex-col justify-center gap-2 p-4">
      <div className="font-serif text-lg font-bold text-center ">
        {list_name}
      </div>
    </header>
  );
}
