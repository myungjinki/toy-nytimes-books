import { getCategoryList } from "../(home)/actions";
import CategoryCard from "./category-card";

export default async function CategoryList() {
  const { results } = await getCategoryList();
  console.log(results);
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-serif text-2xl font-bold">More to Explore</h2>
      <main className="flex flex-col gap-4">
        {results?.map((category) => (
          <CategoryCard
            key={category.list_name}
            list_name={category.list_name}
          ></CategoryCard>
        ))}
      </main>
    </div>
  );
}
